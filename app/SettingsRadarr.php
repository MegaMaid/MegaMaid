<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SettingsRadarr extends Model
{
    public $settingsKey = "radarr";

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
        'apikey',
        'subpath',
        'directory',
        'availability',
        'quality',
        'qualities'
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
        'apikey' => 'string',
        'subpath' => 'string',
        'directory' => 'string',
        'availability' => 'string',
        'quality' => 'string',
        'qualities' => 'array'
    ];
}
