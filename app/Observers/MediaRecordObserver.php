<?php

namespace App\Observers;

use Auth;
use Carbon\Carbon;
use App\MediaRecord;
use App\Lib\Api\TMDB;
use App\Jobs\SendRequestToAgent;

class MediaRecordObserver
{
    /**
     * Listen to the MediaRecord creating event.
     *
     * @param  \App\MediaRecord  $model
     * @return void
     */
    public function creating(MediaRecord $model)
    {
        if($model->source === 'megamaid' && Auth::check())
        {
            $model->requested_by = Auth::user()->id;
            if(Auth::user()->canApprove)
            {
                $model->approved_by = Auth::user()->id;
                $model->approved_on = Carbon::now();
            }
        }
    }

    /**
     * Listen to the MediaRecord created event.
     *
     * @param  \App\MediaRecord  $model
     * @return void
     */
    public function created(MediaRecord $model)
    {
        if($model->source === 'megamaid')
        {
            $tmdb = new TMDB;
            $details = $tmdb->getItemDetails($model->tmdbId, $model->type);
            $model->json = $details;

            if(isset($details['external_ids']['imdb_id']))
            {
                $model->imdbId = $details['external_ids']['imdb_id'];
            }
            if(isset($details['external_ids']['tvdb_id']))
            {
                $model->tvdbId = $details['external_ids']['tvdb_id'];
            }

            $model->status = 'loaded';

            $model->save();

            SendRequestToAgent::dispatch($model);
        }
    }
}
