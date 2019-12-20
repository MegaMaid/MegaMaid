<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use App\SettingsRadarr;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\RadarrRequest;

class RadarrController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(MegaHelpers::getSettings(new SettingsRadarr));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\RadarrRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RadarrRequest $request)
    {
        $m = MegaHelpers::updateSettings('radarr', $request->all());
        return response()->json(MegaHelpers::getSettings(new SettingsRadarr));
    }
}
