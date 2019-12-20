<?php

namespace App\Http\Controllers\Settings;

use Artisan;
use MegaHelpers;
use App\SettingsEmail;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\EmailRequest;

class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(MegaHelpers::getSettingsEmail());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\EmailRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmailRequest $request)
    {
        $m = MegaHelpers::updateSettings('email', $request->all());
        Artisan::call('queue:restart');
        return response()->json(MegaHelpers::getSettingsEmail());
    }
}
