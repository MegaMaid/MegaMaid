<?php

namespace App\Console\Commands;

use MegaHelpers;
use App\SettingsRadarr;
use App\Lib\Api\Radarr;
use Illuminate\Console\Command;

class UpdateMediaCacheFromRadarr extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'megamaid:update:radarr';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the local Radarr data cache';

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
        $settings = MegaHelpers::getSettings(new SettingsRadarr);
        $apiRadarr = new Radarr($settings);
        if($apiRadarr->disabled())
        {
            $this->info('Radarr is disabled, exiting without executing.');
            return false;
        }
        $this->info('Updating the Radarr cache, this might take a tick...');
        $apiRadarr->updateLocalData();
        $this->info('Finished updating the Radarr cache.');
    }
}
