<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use App\SettingsSonarr;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\SonarrRequest;

class SonarrController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(MegaHelpers::getSettings(new SettingsSonarr));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\RadarrRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SonarrRequest $request)
    {
        $m = MegaHelpers::updateSettings('sonarr', $request->all());
        return response()->json(MegaHelpers::getSettings(new SettingsSonarr));
    }
}
