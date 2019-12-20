<?php

namespace App\Lib\Api;

use App\MediaRecord;
use GuzzleHttp\Client;
use GuzzleHttp\Promise;
use GuzzleHttp\Exception\GuzzleException;

class TMDBExternalIdMap
{
    protected $client;
    protected $rateLimitMin = 10;
    protected $rateLimit = 40;
    protected $rateLimitRemaining = 40;
    protected $rateLimitReset = 0;

    public function __construct()
    {
        $this->client = new Client();
        $this->process();
    }

    protected function process()
    {
        $items = MediaRecord::whereNull('tmdbId')->whereNotNull('imdbId')->get();
        $items = $items->merge(MediaRecord::whereNull('tmdbId')->whereNotNull('tvdbId')->get())->unique();
        while($items->count() > 0)
        {
            if($item = $items->pop())
            {
                $id = $item->tvdbId ? $item->tvdbId : $item->imdbId;
                $type = $item->tvdbId ? 'tvdbId' : 'imdbId';
                $res = $this->getTmdbId($item, $id, $type);

                if(! $item->tmdbId && $type !== 'imdbId' && $item->imdbId)
                {
                    // Let's give a try using the IMDB ID (if it has one)
                    $res = $this->getTmdbId($item, $item->imdbId, 'imdbId');
                }

                if($item->tmdbId) $item->save();

                $this->rateLimitHandler($res);
            }
        }
    }

    protected function getTmdbId(&$item, $id, $type)
    {
        $res = $this->client->request('GET', $this->buildApiUrl($id, $type));
        $data = json_decode($res->getBody()->getContents(), true);
        $key = $item->type . '_results';
        $item->tmdbId = isset($data[$key][0]['id']) ? $data[$key][0]['id'] : null;
        return $res;
    }

    protected function rateLimitHandler($response)
    {
        $this->rateLimit = $response->getHeader('X-RateLimit-Limit');
        $this->rateLimit = isset($this->rateLimit[0]) ? (int) $this->rateLimit[0] : 0;

        $this->rateLimitRemaining = $response->getHeader('X-RateLimit-Remaining');
        $this->rateLimitRemaining = isset($this->rateLimitRemaining[0]) ? (int) $this->rateLimitRemaining[0] : 0;

        $this->rateLimitReset = $response->getHeader('X-RateLimit-Reset');
        $this->rateLimitReset = isset($this->rateLimitReset[0]) ? (int) $this->rateLimitReset[0] : 0;

        if($this->rateLimitRemaining <= $this->rateLimitMin)
        {
            time_sleep_until($this->rateLimitReset + 1);
        }
    }

    protected function buildApiUrl($id, $external_type)
    {
        $url = 'https://api.themoviedb.org/3/find/' . $id;
        $type = $external_type === 'tvdbId' ? 'tvdb_id' : 'imdb_id'; // We only really have these 2 options right now
        $url .= '?external_source=' . $type;
        $url .= '&api_key=' . 'e9fd52dc9bbb0c213aaacd0449822475';
        return $url;
    }
}
