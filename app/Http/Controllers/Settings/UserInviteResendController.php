<?php

namespace App\Http\Controllers\Settings;

use Mail;
use MegaHelpers;
use App\UserInvite;
use App\Mail\Invitation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Settings\UserInviteResendRequest;

class UserInviteResendController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Api\UserInviteResendRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserInviteResendRequest $request)
    {
        $u = UserInvite::find($request->get('id'));
        Mail::to($u)->queue(new Invitation($u));
        return response()->json($u);
    }
}
