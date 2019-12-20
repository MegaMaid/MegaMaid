<?php

namespace App\Lib;

use jc21\PlexApi;

class Plexx extends PlexApi
{
    public function analyze($key)
    {
        return $this->call($key . '/analyze', [], self::PUT);
    }

    public function getMatches($key)
    {
        return $this->call($key . '/matches', ['manual' => 1], self::GET);
    }

    public function setMatch($key, $name, $guid)
    {
        return $this->call($key . '/match', ['name' => $name, 'guid' => $guid], self::PUT);
    }
}
