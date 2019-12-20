<?php

namespace App\Providers;

use App\User;
use App\UserInvite;
use App\MediaRecord;
use App\Observers\UserInviteObserver;
use App\Observers\MediaRecordObserver;
use App\Observers\InitialSetupObserver;
use Illuminate\Support\ServiceProvider;

class ObserverServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(InitialSetupObserver::class);
        UserInvite::observe(UserInviteObserver::class);
        MediaRecord::observe(MediaRecordObserver::class);
    }
}
