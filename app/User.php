<?php

namespace App;

use App\MediaRecord;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\ResetPassword as ResetPasswordNotification;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'photo_url', 'requests_count', 'requests_pending_count', 'requests_approved_count'
    ];

    /**
     * Get the profile photo URL attribute.
     *
     * @return string
     */
    public function getPhotoUrlAttribute()
    {
        return 'https://www.gravatar.com/avatar/'.md5(strtolower($this->email)).'.jpg?s=200&d=mm';
    }

    /**
     * Get the oauth providers.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function oauthProviders()
    {
        return $this->hasMany(OAuthProvider::class);
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    /**
     * @return int
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Is the user in the admin role?
     *
     * @return boolean
     */
    public function getIsAdminAttribute()
    {
        return $this->role === 'admin';
    }

    public function getCanApproveAttribute()
    {
        return in_array($this->role, ['moderator', 'admin']);
    }

    /**
     * Get the profile photo URL attribute.
     *
     * @return string
     */
    public function getRequestsCountAttribute()
    {
        return MediaRecord::where('source', 'megamaid')
            ->where('requested_by', $this->id)
            ->count();
    }

    /**
     * Get the profile photo URL attribute.
     *
     * @return string
     */
    public function getRequestsPendingCountAttribute()
    {
        return MediaRecord::where('source', 'megamaid')
            ->where('requested_by', $this->id)
            ->whereNull('approved_by')
            ->count();
    }

    /**
     * Get the profile photo URL attribute.
     *
     * @return string
     */
    public function getRequestsApprovedCountAttribute()
    {
        return MediaRecord::where('source', 'megamaid')
            ->where('requested_by', $this->id)
            ->whereNotNull('approved_by')
            ->count();
    }

    /**
     * Get the media requests for the user.
     */
    public function requests()
    {
        return $this->hasMany(MediaRecord::class, 'requested_by')
            ->where('source', 'megamaid');
    }

    /**
     * Get the approved media requests for the user.
     */
    public function approvedRequests()
    {
        return $this->hasMany(MediaRecord::class, 'requested_by')
            ->where('source', 'megamaid')
            ->whereNotNull('approved_by');
    }

    /**
     * Get the pending media requests for the user.
     */
    public function pendingRequests()
    {
        return $this->hasMany(MediaRecord::class, 'requested_by')
            ->where('source', 'megamaid')
            ->whereNull('approved_by');
    }
}
