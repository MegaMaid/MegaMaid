<?php

namespace App\Lib\Api;

use Log;
use MegaHelpers;
use jc21\PlexApi;
use Carbon\Carbon;
use App\MediaRecord;
use App\SettingsPlex;

class Plex
{
    protected $settings;
    protected $client;

    protected $contentNodeLookup = [
        'movie' => 'Video',
        'show' => 'Directory'
    ];

    protected $agentColumnLookup = [
        'thetvdb' => 'tvdbId',
        'themoviedb' => 'tmdbId',
        'imdb' => 'imdbId'
    ];

    public function __construct(SettingsPlex $settings)
    {
        $this->settings = $settings;
        $this->client = MegaHelpers::plexClientFromSettings();
    }

    public function updateLocalData()
    {
        if($this->disabled()) return false;

        $sections = $this->getSections();
        foreach($this->getSections() as $sec) $this->upsertContents($this->getSectionContents($sec));

        $movies = MediaRecord::where('source', 'plex')
                    ->where('type', 'movie')
                    ->where('imdbId', null)
                    ->get();

        $tv = MediaRecord::where('source', 'plex')
                    ->where('type', 'tv')
                    ->where('tvdbId', null)
                    ->get();

        $data = $movies->merge($tv);

        Log::info('[Api\Plex] Finding tmdbId values for Plex cache items. Inspecting ' . $data->count() . ' records.');

        $data->each(function($datum) {
            $md = $this->client->getMetadata($datum->json['ratingKey']);
            $key = $this->contentNodeLookup[$datum->json['type']];
            $guid = isset($md[$key]['guid']) ? $md[$key]['guid'] : false;
            if($guid === false) return true;

            /*
             * Possible values we might find in $guid will look like:
             *     com.plexapp.agents.thetvdb://269586/2/8?lang=en
             *     com.plexapp.agents.themoviedb://390043?lang=en
             *     com.plexapp.agents.imdb://tt2543164?lang=en?
             */
            preg_match_all('/^com\.plexapp\.agents\.(.*):\/\/([A-Za-z0-9\-\.]+)/', $guid, $out);
            $idType = isset($out[1][0]) ? $out[1][0] : false;
            $id = isset($out[2][0]) ? $out[2][0] : false;
            if($idType === false || $id === false)
            {
                Log::error('[Api\Plex] Could not detect remote service ID from guid on Plex entry. Entry fk: ' . $datum->fk);
                return true;
            }

            $datum->{ $this->agentColumnLookup[$idType] } = $id;
            $datum->save();
        });
    }

    public function upsertContents($data)
    {
        foreach($data as $idx => $datum)
        {
            $updated = isset($datum['updatedAt']) ? Carbon::createFromTimestamp($datum['updatedAt']) : Carbon::now();
            $r = [
                'source' => 'plex',
                'type' => $datum['type'] === 'show' ? 'tv' : 'movie',
                'fk' => $datum['ratingKey'],
                'remote_updated_at' => $updated,
                'json' => $datum,
                'status' => 'completed'
            ];

            $r = MediaRecord::updateOrCreate(['fk' => $r['fk'], 'source' => 'plex'], $r);
        }
    }

    public function getSectionContents($section)
    {
        $media = $this->client->getLibrarySectionContents($section['key']);
        return $media[$section['content_node']];
    }

    public function getSections()
    {
        $ls = $this->client->getLibrarySections();
        $sections = [];
        foreach($ls['Directory'] as $s)
        {
            if(! in_array($s['type'], ['movie', 'show'])) continue;

            $sections[] = [
                'key' => $s['key'],
                'type' => $s['type'],
                'content_node' => $this->contentNodeLookup[$s['type']]
            ];
        }
        return $sections;
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
