<?php

namespace App\Lib\Api;

use MegaHelpers;
use Carbon\Carbon;
use App\MediaRecord;
use App\SettingsCouchPotato;

class CouchPotato
{
    protected $settings;
    protected $client;

    public function __construct(SettingsCouchPotato $settings = null)
    {
        $this->settings = $settings ? $settings : MegaHelpers::getSettingsCouchPotato();
        $this->client = MegaHelpers::couchPotatoClientFromSettings($this->settings);
    }

    public function updateLocalData()
    {
        if($this->disabled()) return false;

        $data = json_decode($this->client->getMediaList(), true);
        if(!array_key_exists('movies', $data)) return false;

        foreach($data['movies'] as $idx => $datum)
        {
            $updated = isset($datum['last_edit']) ? Carbon::createFromTimestamp($datum['last_edit']) : Carbon::now();
            $identifiers = array_key_exists('identifiers', $datum) ? $datum['identifiers'] : [];
            $r = [
                'source' => 'couchpotato',
                'type' => 'movie',
                'fk' => $datum['_id'],
                'remote_updated_at' => $updated,
                'json' => $datum,
                'status' => isset($datum['status']) && $datum['status'] === 'done' ? 'completed' : 'missing',
                'imdbId' => isset($identifiers['imdb']) ? $identifiers['imdb'] : null,
                'tmdbId' => isset($identifiers['tmdb_id']) ? $identifiers['tmdb_id'] : null,
            ];

            if($r['tmdbId'] === null)
            {
                $r['tmdbId'] = isset($datum['info']) && isset($datum['info']['tmdb_id']) && $datum['info']['tmdb_id'] !== 0 ? $datum['info']['tmdb_id'] : null;
            }

            MediaRecord::updateOrCreate(['fk' => $r['fk']], $r);
        }
    }

    public function submitRequest(string $imdbId)
    {
        $title = null;

        $search = json_decode($this->client->getSearch($imdbId), true);

        if(array_key_exists('movie', $search))
        {
            foreach($search['movie'] as $movie)
            {
                if(array_key_exists('imdb', $movie) && $movie['imdb'] === $imdbId)
                {
                    $title = array_key_exists('original_title', $movie) ? $movie['original_title'] : null;
                    break;
                }
            }
        }

        $data =[
            'profile_id' => $this->settings->quality,
            'identifier' => $imdbId,
            'title' => $title
        ];

        return $this->client->getMovieAdd($data);
    }


    public function getProfiles()
    {
        $profiles = collect(json_decode($this->client->getProfileList(), true)['list']);
        return $profiles->map(function($p) {
            return ['id' => $p['_id'], 'name' => $p['label'] ];
        });
    }

    public function enabled()
    {
        return $this->settings->enabled === true;
    }

    public function disabled()
    {
        return ! $this->enabled();
    }
}
