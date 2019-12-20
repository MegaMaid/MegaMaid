<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class MediaRecord extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'fk',
        'remote_updated_at',
        'source',
        'type',
        'json',
        'status',
        'files',
        'missing',
        'json',
        'imdbId',
        'tmdbId',
        'tvdbId',
        'tvMazeId'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'json' => 'array'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'remote_updated_at'];

    public function complete()
    {
        $this->status = 'completed';
        $this->save();
    }

    /**
     * Scope to media requests
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRequests($query)
    {
        return $query->where('source', 'megamaid');
    }

    /**
     * Scope to pending media requests
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePendingRequests($query)
    {
        return $query->where('source', 'megamaid')->whereNull('approved_by');
    }

    /**
     * Scope to approved media requests
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeApprovedRequests($query)
    {
        return $query->where('source', 'megamaid')->whereNotNull('approved_by');
    }

    /**
     * Get the post that owns the comment.
     */
    public function requestedBy()
    {
        return $this->belongsTo(User::class, 'requested_by');
    }

    /**
     * Get the post that owns the comment.
     */
    public function approvedBy()
    {
        return $this->belongsTo(User::class, 'approved_by');
    }
}
