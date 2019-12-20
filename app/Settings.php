<?php

namespace App;

use Crypt;
use MegaHelpers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Encryption\DecryptException;

class Settings extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'type',
        'key',
        'value'
    ];

    public function getValueAttribute($value)
    {
        $r = $value;
        try
        {
            $r = Crypt::decrypt($value);
        }
        catch (DecryptException $e)
        {
            \Log::error($e);
        }
        return $r;
    }

    public function setValueAttribute($value)
    {
        $this->attributes['value'] = Crypt::encrypt($value);
    }

    public static function getSettings(Model $model)
    {
        $c = Settings::where('type', $model->settingsKey)->get();
        $cm = $c->mapWithKeys(function($m) { return [$m->key => $m->value]; });
        $model->fill($cm->toArray());
        return $model;
    }

    public static function updateSettings(string $type, array $data)
    {
        $records = self::collectRecords($type, $data);

        $rs = Settings::where('type', $type)->get();
        $inserts = $records->whereNotIn('key', $rs->pluck('key'));
        $deletes = $rs->whereNotIn('key', $records->pluck('key'));
        $updates = $rs->whereIn('key', $records->pluck('key'));

        $inserts->each(function ($i) { Settings::create($i); });
        $deletes->each(function ($d) { $d->delete(); });
        $updates->each(function ($u) use ($records) {
            $nv = $records->where('key', $u->key)->first()['value'];
            if($u->value !== $nv)
            {
                $u->value = $nv;
                $u->save();
            }
        });

        self::queueUpdateJob($type);

        return true;
    }

    public static function queueUpdateJob(string $type)
    {
        $supported = ['plex', 'sonarr', 'radarr'];
        if(in_array($type, $supported))
        {
            $settingsClass = '\App\Settings' . ucfirst($type);
            $jobClass = '\App\Jobs\Update' . ucfirst($type) . 'RecordsJob';
            $settings = MegaHelpers::getSettings(new $settingsClass);
            if($settings->enabled === true)
            {
                $jobClass::dispatch();
            }
        }
    }

    public static function collectRecords(string $type, array $data)
    {
        $records = collect();

        foreach($data as $key => $val)
        {
            if(empty($val)) continue;

            $records->push([
                'type' => $type,
                'key' => $key,
                'value' => $val
            ]);
        }

        return $records;
    }
}
