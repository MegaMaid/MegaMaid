<?php

namespace App\Http\Controllers\Settings;

use MegaHelpers;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use App\Http\Requests\Api\Settings\SonarrRequest;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(User::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\Settings\SonarrRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $m = MegaHelpers::updateExternalConfig('sonarr', $request->all());
        // return response()->json(MegaHelpers::flattenExternalConfig($m));
    }
}
