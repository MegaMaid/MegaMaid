<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SettingsSystem extends Model
{
    public $settingsKey = "system";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'hostname'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'hostname' => 'string'
    ];
}
