<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use jc21\PlexApi;
use App\SettingsPlex;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\PlexTokenRequest;

class PlexTokenController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\PlexTokenRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(PlexTokenRequest $request)
    {
        $c = MegaHelpers::plexClient(
            $request->input('hostname'),
            $request->input('port'),
            (bool) $request->input('ssl')
        );
        $c->setAuth($request->input('username'), $request->input('password'));
        $token = $c->getToken();

        if($token !== false) return response()->json(['token' => $token]);

        return response()->json([
            'message' => 'The given data was invalid',
            'errors' => [
                'credentials' => ['The credentials supplied are incorrect, please confirm connection details, username and password.']
            ]
        ], 422);

    }
}
