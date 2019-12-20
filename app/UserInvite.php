<?php

namespace App;

use MegaHelpers;
use Illuminate\Database\Eloquent\Model;

class UserInvite extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'role'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'url',
    ];

    /**
     * Get the URL of the register link
     *
     * @return string
     */
    public function getUrlAttribute()
    {
        return url(config('app.url') . '/register/' . $this->attributes['token']);
    }
}
