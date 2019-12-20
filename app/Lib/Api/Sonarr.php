<?php

namespace App\Lib\Api;

use Carbon\Carbon;
use App\MediaRecord;
use App\SettingsSonarr;
use GuzzleHttp\Client;
use GuzzleHttp\Promise;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\GuzzleException;

class Sonarr
{
    protected $config;
    protected $client;

    public function __construct(SettingsSonarr $config)
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

        $res = $this->client->get('series');
        $data = json_decode($res->getBody()->getContents(), true);
        foreach($data as $idx => $datum)
        {
            $updated = isset($datum['lastInfoSync']) ? new Carbon($datum['lastInfoSync']) : Carbon::now();
            $files = isset($datum['episodeFileCount']) ? $datum['episodeFileCount'] : -1;
            $missing = isset($datum['totalEpisodeCount']) ? $datum['totalEpisodeCount'] : -1;

            if($files - $missing === $files)
            {
                $status = 'completed';
            }
            else if ($files > 0)
            {
                $status = 'partial';
            }
            else
            {
                $status = 'missing';
            }

            $r = [
                'source' => 'sonarr',
                'type' => 'tv',
                'fk' => $datum['id'],
                'remote_updated_at' => $updated,
                'json' => $datum,
                'status' => $status,
                'imdbId' => isset($datum['imdbId']) ? $datum['imdbId'] : null,
                'tmdbId' => isset($datum['tmdbId']) ? $datum['tmdbId'] : null,
                'tvdbId' => isset($datum['tvdbId']) ? $datum['tvdbId'] : null,
                'tvMazeId' => isset($datum['tvMazeId']) ? $datum['tvMazeId'] : null
            ];

            $r = MediaRecord::updateOrCreate(['fk' => $r['fk'], 'source' => 'sonarr'], $r);
        }

    }

    public function submitRequest(int $tvdbId, string $rootFolderPath, int $qualityProfileId)
    {
        $series = $this->getMediaByTvdbId($tvdbId);
        if($series === false) abort(400, 'Could not locate series in Sonarr.');

        $data = [
            'title' => $series['title'],
            'qualityProfileId' => $qualityProfileId,
            'titleSlug' => $series['titleSlug'],
            'images' => $series['images'],
            'tvdbId' => $tvdbId,
            'rootFolderPath' => $rootFolderPath,
            'seasons' => $series['seasons'],
            'seasonFolder' => true,
            'addOptions' => ['searchForMissingEpisodes' => true]
        ];

        try
        {
            $res = $this->client->post('series', ['json' => $data]);
        }
        catch(ClientException $e)
        {
            $res = json_decode($e->getResponse()->getBody()->getContents(), true);
            if(isset($res[0]['errorMessage']) && $res[0]['errorMessage'] === 'This series has already been added')
            {
                return false;
            }
            return abort(400, $e);
        }

        return json_decode($res->getBody()->getContents(), true);
    }

    public function getMediaByTvdbId($id)
    {
        $url = 'series/lookup?term=tvdb:' . $id;
        $res = $this->client->get($url);
        $data = json_decode($res->getBody()->getContents(), true);
        return isset($data[0]) ? $data[0] : false;
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
