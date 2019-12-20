<?php

namespace App\Observers;

use App\UserInvite;

class UserInviteObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  \App\UserInvite  $model
     * @return void
     */
    public function creating(UserInvite $model)
    {
        $model->token = str_random();
    }
}
