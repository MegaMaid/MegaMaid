<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SettingsEmail extends Model
{
    public $settingsKey = "email";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'from_name',
        'from_address',
        'secret',
        'host',
        'port',
        'encryption',
        'username',
        'password',
        'domain',
        'key',
        'region'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'type' => 'string',
        'from_name' => 'string',
        'from_address' => 'string',
        'secret' => 'string',
        'host' => 'string',
        'port' => 'integer',
        'encryption' => 'string',
        'username' => 'string',
        'password' => 'string',
        'domain' => 'string',
        'key' => 'string',
        'region' => 'string',
    ];
}
