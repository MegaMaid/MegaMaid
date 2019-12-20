<?php

namespace App\Http\Controllers\Settings;

use Mail;
use MegaHelpers;
use App\UserInvite;
use App\Mail\Invitation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\UserInviteRequest;

class UserInviteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(UserInvite::all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($token)
    {
        return response()->json(UserInvite::where('token', $token)->firstOrFail());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserInviteRequest $request)
    {
        $d = $request->all();
        $d['role'] = $request->get('is_admin') === true ? 'admin' : 'user';
        $u = UserInvite::create($d);
        if(MegaHelpers::getSettingsEmail()->type !== 'manual')
        {
            Mail::to($u)->queue(new Invitation($u));
        }
        return response()->json($u);
    }
}
