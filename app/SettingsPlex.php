<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SettingsPlex extends Model
{
    public $settingsKey = "plex";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'enabled',
        'ssl',
        'hostname',
        'port',
        'token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'enabled' => 'boolean',
        'ssl' => 'boolean',
        'hostname' => 'string',
        'port' => 'integer',
        'token' => 'string'
    ];
}
