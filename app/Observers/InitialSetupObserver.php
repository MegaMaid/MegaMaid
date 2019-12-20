<?php

namespace App\Observers;

use App\User;
use MegaHelpers;

class InitialSetupObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function creating(User $user)
    {
        if(!MegaHelpers::initialSetupCompleted())
        {
            $user->role = 'admin';
        }
    }

    /**
     * Listen to the User created event.
     *
     * @param  \App\User  $model
     * @return void
     */
    public function created(User $model)
    {
        if(User::all()->count() === 1)
        {
            $s = MegaHelpers::getSettingsSystem();
            if(!$s->hostname)
            {
                MegaHelpers::updateSettings('system', ['hostname' => url('')]);
            }
        }
    }
}
