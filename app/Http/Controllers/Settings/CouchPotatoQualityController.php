<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use App\SettingsCouchPotato;
use App\Lib\Api\CouchPotato;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\CouchPotatoQualityRequest;

class CouchPotatoQualityController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\CouchPotatoQualityRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CouchPotatoQualityRequest $request)
    {
        $sr = (new SettingsCouchPotato)->fill($request->all());
        return response()->json((new CouchPotato($sr))->getProfiles());
    }
}
