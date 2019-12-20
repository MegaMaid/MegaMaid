<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use App\Lib\Api\Sonarr;
use App\SettingsSonarr;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\SonarrQualityRequest;

class SonarrQualityController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\SonarrQualityRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SonarrQualityRequest $request)
    {
        $sr = (new SettingsSonarr)->fill($request->all());
        $r = new Sonarr($sr);
        return response()->json($r->getProfiles());
    }
}
