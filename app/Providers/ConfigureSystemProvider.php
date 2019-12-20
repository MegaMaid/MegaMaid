<?php

namespace App\Providers;

use Schema;
use App\Lib\ConfigureSystem;
use Illuminate\Support\ServiceProvider;

class ConfigureSystemProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        if(Schema::hasTable('settings')) new ConfigureSystem;
    }
}
