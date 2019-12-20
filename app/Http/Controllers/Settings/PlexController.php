<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use App\SettingsPlex;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\PlexRequest;

class PlexController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(MegaHelpers::getSettings(new SettingsPlex));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\PlexRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PlexRequest $request)
    {
        $m = MegaHelpers::updateSettings('plex', $request->all());
        return response()->json(MegaHelpers::getSettings(new SettingsPlex));
    }
}
