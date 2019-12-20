<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SettingsBackup extends Model
{
    public $settingsKey = "backups";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'enabled',
        'target',
        'filename_prefix',
        'email_contact',
        'authorization_token',
        'aws_key',
        'aws_secret',
        'aws_region',
        'aws_bucket'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'enabled' => 'boolean',
        'target' => 'string',
        'filename_prefix' => 'string',
        'email_contact' => 'string',
        'authorization_token' => 'string',
        'aws_key' => 'string',
        'aws_secret' => 'string',
        'aws_region' => 'string',
        'aws_bucket' => 'string',
    ];
}
