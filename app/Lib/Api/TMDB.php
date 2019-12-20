<?php

namespace App\Lib\Api;

use Config;
use App\MediaRecord;
use App\SearchResult;
use GuzzleHttp\Client;
use GuzzleHttp\Promise;
use GuzzleHttp\Exception\GuzzleException;

class TMDB
{
    protected $config = [];
    protected $client;

    public function __construct()
    {
        $this->config = Config::get('services.tmdb');
        $this->client = new Client(['base_uri' => $this->config['base_uri']]);
    }

    public function getItemDetails($id, $type)
    {
        $res = $this->get($type.'/'.$id);
        $data = json_decode($res->getBody()->getContents(), true);
        $data['type'] = $type;
        return $data;
    }

    public function searchAll($query)
    {
        return $this->search(['movie', 'tv', 'person', 'multi'], $query, 1);
    }

    public function searchMovie($query, $page = 1)
    {
        return $this->search(['movie'], $query, $page);
    }

    public function searchTV($query, $page = 1)
    {
        return $this->search(['tv'], $query, $page);
    }

    public function searchPerson($query, $page = 1)
    {
        return $this->search(['person'], $query, $page);
    }

    public function searchPersonCredits($person_id)
    {
        $res = $this->get('person/'.$person_id.'/combined_credits');
        $data = json_decode($res->getBody()->getContents(), true);
        $cast = isset($data['cast']) ? $data['cast'] : [];
        $results = [];
        foreach($cast as $c)
        {
            $c['type'] = $c['media_type'];
            $results[$c['type']]['results'][] = $c;
        }

        foreach($results as &$r)
        {
            $r['page'] = 1;
            $r['total_pages'] = 1;
            $r['results'] = SearchResult::buildFromSearch($r['results']);
            $r['total_results'] = count($r['results']);
        }
        return $results;
    }

    public function searchTvCredits($tv_id)
    {
        return $this->searchMediaCredits('tv', $tv_id);
    }

    public function searchMovieCredits($movie_id)
    {
        return $this->searchMediaCredits('movie', $movie_id);
    }

    public function searchMediaCredits($media_type, $media_id)
    {
        $res = $this->get($media_type.'/'.$media_id.'/credits');
        $data = json_decode($res->getBody()->getContents(), true);
        $cast = isset($data['cast']) ? $data['cast'] : [];
        $results = [];
        foreach($cast as $c)
        {
            $c['type'] = 'person';
            $results[$c['type']]['results'][] = $c;
        }

        foreach($results as &$r)
        {
            $r['page'] = 1;
            $r['total_pages'] = 1;
            $r['results'] = SearchResult::buildFromSearch($r['results']);
            $r['total_results'] = count($r['results']);
        }
        return $results;
    }

    public function search(array $types, $query, $page = 1)
    {
        foreach($types as $type)
        {
            $promises[$type] = $this->getAsync('search/'.$type, ['query' => $query, 'page' => $page]);
        }

        $responses = Promise\settle($promises)->wait();

        $results = $this->parseSearchResults($responses);

        $results['best_match_type'] = $this->parseBestMatchType($responses, $types);

        return $results;
    }

    protected function parseSearchResults($responses)
    {
        $results = [];
        foreach($responses as $type => $response)
        {
            if($type === 'multi') continue;
            $decoded = json_decode($response['value']->getBody(), true);
            foreach($decoded['results'] as &$r)
            {
                $r['type'] = $type;
            }
            $decoded['results'] = SearchResult::buildFromSearch($decoded['results']);
            $results[$type] = $decoded;
        }
        return $results;
    }

    protected function parseBestMatchType($responses, $types)
    {
        if(isset($responses['multi']))
        {
            $multi = json_decode($responses['multi']['value']->getBody(), true);
            foreach($multi['results'] as $r)
            {
                if(isset($r['media_type']) && in_array($r['media_type'], $types))
                {
                    return $r['media_type'];
                }
            }
        }
        return '';
    }

    protected function getAsync($path, array $queryarray = [])
    {
        return $this->client->getAsync($this->url($path, $queryarray));
    }

    protected function get($path, array $queryarray = [])
    {
        return $this->client->get($this->url($path));
    }

    protected function url($path, array $queryarray = [])
    {
        $queryarray = array_merge($queryarray, $this->config['default_querystring']);
        $querystring = [];
        foreach($queryarray as $k => $v)
        {
            $querystring[] = $k . '=' . $v;
        }
        $querystring = implode('&', $querystring);
        return $path . '?' . $querystring;
    }
}
