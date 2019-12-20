<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use App\SettingsCouchPotato;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\CouchPotatoRequest;

class CouchPotatoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(MegaHelpers::getSettings(new SettingsCouchPotato));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\CouchPotatoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CouchPotatoRequest $request)
    {
        $m = MegaHelpers::updateSettings('couchpotato', $request->all());
        return response()->json(MegaHelpers::getSettings(new SettingsCouchPotato));
    }
}
