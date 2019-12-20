<?php

namespace App\Console\Commands;

use MegaHelpers;
use App\SettingsPlex;
use App\Lib\Api\Plex;
use Illuminate\Console\Command;

class UpdateMediaCacheFromPlex extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'megamaid:update:plex';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the local Plex data cache';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $settings = MegaHelpers::getSettings(new SettingsPlex);
        $api = new Plex($settings);
        if($api->disabled())
        {
            $this->info('Plex is disabled, exiting without executing.');
            return false;
        }
        $this->info('Updating the Plex cache, this might take a tick...');
        $api->updateLocalData();
        $this->info('Finished updating the Plex cache.');
    }
}
