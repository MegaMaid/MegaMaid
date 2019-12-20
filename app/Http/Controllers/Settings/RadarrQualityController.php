<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use App\Lib\Api\Radarr;
use App\SettingsRadarr;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\RadarrQualityRequest;

class RadarrQualityController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\RadarrQualityRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RadarrQualityRequest $request)
    {
        $sr = (new SettingsRadarr)->fill($request->all());
        $r = new Radarr($sr);
        return response()->json($r->getProfiles());
    }
}
