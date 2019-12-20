<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use App\SettingsBackup;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\BackupsRequest;

class BackupsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(MegaHelpers::getSettings(new SettingsBackup));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\SettingsBackups  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BackupsRequest $request)
    {
        $m = MegaHelpers::updateSettings('backups', $request->all());
        return response()->json(MegaHelpers::getSettings(new SettingsBackup));
    }
}
