<?php

namespace App\Lib\Api;

use Carbon\Carbon;
use App\MediaRecord;
use App\SettingsRadarr;
use GuzzleHttp\Client;
use GuzzleHttp\Promise;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\GuzzleException;

class Radarr
{
    protected $config;
    protected $client;

    public function __construct(SettingsRadarr $config)
    {
        $this->config = $config;
        $urlbase = $config->ssl ? 'https://' : 'http://';
        $urlbase .= $config->hostname . ':' . $config->port;
        $path = implode('/', array_filter(explode('/', $config->subpath . '/' . 'api')));
        $urlbase .= '/' . $path . '/';
        $this->client = new Client(['base_uri' => $urlbase, 'headers' => ['X-Api-Key' => $this->config->apikey]]);
    }

    public function updateLocalData()
    {
        if($this->disabled()) return false;

        $res = $this->client->get('movie');
        $data = json_decode($res->getBody()->getContents(), true);

        foreach($data as $idx => $datum)
        {
            $updated = isset($datum['lastInfoSync']) ? new Carbon($datum['lastInfoSync']) : Carbon::now();
            $r = [
                'source' => 'radarr',
                'type' => 'movie',
                'fk' => $datum['id'],
                'remote_updated_at' => $updated,
                'json' => $datum,
                'status' => isset($datum['downloaded']) ? 'completed' : 'missing',
                'imdbId' => isset($datum['imdbId']) ? $datum['imdbId'] : null,
                'tmdbId' => isset($datum['tmdbId']) ? $datum['tmdbId'] : null,
                'tvdbId' => isset($datum['tvdbId']) ? $datum['tvdbId'] : null,
                'tvMazeId' => isset($datum['tvMazeId']) ? $datum['tvMazeId'] : null
            ];

            MediaRecord::updateOrCreate(['fk' => $r['fk']], $r);
        }
    }

    public function submitRequest(int $tmdbId, string $rootFolderPath, int $qualityProfileId, string $minimumAvailability)
    {
        $movie = $this->getMediaByTmdbId($tmdbId);

        $data = [
            'title' => $movie['title'],
            'qualityProfileId' => $qualityProfileId,
            'titleSlug' => $movie['titleSlug'],
            'images' => $movie['images'],
            'year' => $movie['year'],
            'tmdbId' => $tmdbId,
            'rootFolderPath' => $rootFolderPath,
            'minimumAvailability' => $minimumAvailability
        ];
        try
        {
            $res = $this->client->post('movie', ['json' => $data]);
        }
        catch(ClientException $e)
        {
            $res = json_decode($e->getResponse()->getBody()->getContents(), true);
            if(isset($res[0]['errorMessage']) && $res[0]['errorMessage'] === 'This movie has already been added')
            {
                return false;
            }
            return abort(400, $e);
        }

        return json_decode($res->getBody()->getContents(), true);
    }

    public function getMediaByTmdbId($id)
    {
        $url = 'movie/lookup/tmdb?tmdbId=' . $id;
        $res = $this->client->get($url);
        return json_decode($res->getBody()->getContents(), true);
    }

    public function getProfiles()
    {
        $res = $this->client->get('profile');
        return json_decode($res->getBody()->getContents(), true);
    }

    public function enabled()
    {
        return $this->config->enabled === true;
    }

    public function disabled()
    {
        return ! $this->enabled();
    }
}
