<?php

namespace App\Lib;

use App\User;
use App\Settings;
use jc21\PlexApi;
use Carbon\Carbon;
use App\SettingsPlex;
use App\SettingsEmail;
use App\SettingsSystem;
use App\SettingsBackup;
use App\SettingsCouchPotato;
use Kryptonit3\CouchPotato\CouchPotato;
use Illuminate\Database\Eloquent\Model;

class MegaHelpers
{
    public function fixPlexUnmatchedMovies()
    {
        $client = MegaHelpers::plexClientFromSettings();
        $results = collect($client->getLibrarySectionContents(3)['Video']);
        $results->filter(function($result, $key) {
            return $result['summary'] === '' && isset($result['year']);
        })->each(function($result, $key) use ($client) {
            echo "Running analyze for key: " . $result['ratingKey'] . "\n";

            $client->analyze($result['ratingKey']);

            echo "Getting matches for key: " . $result['ratingKey'] . "\n";

            $matches = $client->getMatches($result['ratingKey']);
            $matches = $matches['size'] === '1' ? [$matches['SearchResult']] : $matches['SearchResult'];
            $match = collect($matches)->filter(function($match, $key) use ($result) {
                return isset($match['year']) && $match['year'] == $result['year'] && $result['year'];
            })
            ->map(function($match, $key) {
                $match['score'] = (int) $match['score'];
                return $match;
            })
            ->sortBy('score')
            ->last();

            if($match)
            {
                $client->setMatch($result['ratingKey'], $match['name'], $match['guid']);
            }
        });
    }

    public function initialSetupCompleted()
    {
        return User::where('role', 'admin')->limit(1)->count() > 0;
    }

    public function getSettingsEmail()
    {
        $e = Settings::getSettings(new SettingsEmail);
        if(!$e->type) $e->type = 'manual';
        return $e;
    }

    public function getSettingsSystem()
    {
        return Settings::getSettings(new SettingsSystem);
    }

    public function getSettingsBackups()
    {
        return Settings::getSettings(new SettingsBackup);
    }

    public function getSettingsCouchPotato()
    {
        return Settings::getSettings(new SettingsCouchPotato);
    }

    public function getSettings(Model $model)
    {
        return Settings::getSettings($model);
    }

    public function updateSettings(string $type, array $data)
    {
        return Settings::updateSettings($type, $data);
    }

    public function plexClient($hostname, $port, $ssl, $loadToken = false): PlexApi
    {
        $c = new PlexApi($hostname, $port, $ssl);
        $c->setClientIdentifier('23ffcc63-8f49-455d-97d1-7cdbceee30b9');
        $c->setDevice('MegaMaid');
        $c->setDeviceName('MegaMaid');
        $c->setProductName('Plex Client for MegaMaid');
        return $c;
    }

    public function plexClientFromSettings(): PlexApi
    {
        $settings = MegaHelpers::getSettings(new SettingsPlex);
        $c = $this->plexClient($settings->hostname, $settings->port, $settings->ssl);
        $c->setToken($settings->token);
        return $c;
    }

    public function couchPotatoClient($hostname, $port, $subpath, $ssl, $apiKey): CouchPotato
    {
        $url = $ssl ? 'https://' : 'http://';
        $url .= $hostname . ':' . $port . '/' . $subpath;
        return new CouchPotato($url, $apiKey);
    }

    public function couchPotatoClientFromSettings(SettingsCouchPotato $settings = null): CouchPotato
    {
        $settings = $settings ? $settings : $this->getSettingsCouchPotato();
        return $this->couchPotatoClient($settings->hostname, $settings->port, $settings->subpath, $settings->ssl, $settings->apikey);
    }
}
