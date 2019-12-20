<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class SearchResult extends Model
{
    /**
     * Create a collection of models from plain arrays.
     *
     * @param  array   $items
     * @param  string  $type
     * @return \Illuminate\Database\Eloquent\Collection
     */
    static public function buildFromSearch(array $items)
    {
        $collection = parent::hydrate($items)->unique('id');
        foreach($collection as &$model)
        {
            $model->setTypeAttribute($model->type);
            $model->setTitleAttribute($model->title);
            $model->setViewMoreUrlAttribute($model->id);
            $model->setYearAttribute($model->release_date);
            $model->setPosterAttribute();
            $model->setSummaryAttribute();
        }
        $ids = $collection->map(function($m) { return $m->id; });
        $mrs = MediaRecord::whereIn('tmdbId', $ids)->get();
        foreach($collection as &$model)
        {
            $model->compareToMediaRecords($mrs->where('tmdbId', $model->id));
        }
        return $collection->values();
    }

    /**
     * Set the results type attribute
     *
     * @param  string  $value
     * @return void
     */
    public function setTypeAttribute($value)
    {
        $alt = isset($this->attributes['media_type'])
            ? $this->attributes['media_type']
            : null;
        $this->attributes['type'] = isset($this->attributes['type'])
            ? $this->attributes['type']
            : $alt;
    }

    /**
     * Set the results title attribute
     *
     * @param  string  $value
     * @return void
     */
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $this->type === 'movie'
            ? $this->attributes['title']
            : $this->attributes['name'];
    }

    /**
     * Set the results "view more details" url
     *
     * @param  string  $value
     * @return void
     */
    public function setViewMoreUrlAttribute($value)
    {
        $this->attributes['view_more_url'] = 'https://www.themoviedb.org/' . $this->type . '/' . $this->id;
    }

    /**
     * Set the results year attribute
     *
     * @param  string  $value
     * @return void
     */
    public function setYearAttribute($value)
    {
        $this->attributes['year'] = $value ? (new Carbon( $value ))->year : false;
    }

    /**
     * Set the results poster url attribute
     *
     * @return void
     */
    public function setPosterAttribute()
    {
        $poster = $this->poster_path
            ? $this->poster_path
            : $this->profile_path;

        $this->attributes['poster'] = $poster
            ? '//image.tmdb.org/t/p/w185' . $poster
            : '//via.placeholder.com/200x302?text=Missing';
    }

    /**
     * Set the results summary attribute
     *
     * @param  string  $value
     * @return void
     */
    public function setSummaryAttribute()
    {
        $summary = $this->overview;
        if($this->type === 'person' && $this->known_for)
        {
            $kf = collect($this->known_for);

            $kflist = $kf->map(function($k) {
                return $k['media_type'] === 'movie'
                    ? $k['title']
                    : $k['name'];
            });

            $summary = 'Has appeared in: ' . implode(', ', $kflist->toArray());
            $this->attributes['known_for'] = SearchResult::buildFromSearch($this->known_for);
        }
        $this->attributes['summary'] = $summary;
    }

    protected function compareToMediaRecords($mediaRecords = null)
    {
        if(!$mediaRecords)
        {
            $mediaRecords = MediaRecord::where('tmdbId', $this->id)->get();
        }
        $this->attributes['already_requested'] = $mediaRecords->count() > 0 ? true : false;
        $mediaRecords->each(function($item) {
            $this->attributes['exists_in_' . $item->source] = true;
        });
    }
}
