<?php

namespace App\Console\Commands;

use MegaHelpers;
use App\SettingsSonarr;
use App\Lib\Api\Sonarr;
use Illuminate\Console\Command;

class UpdateMediaCacheFromSonarr extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'megamaid:update:sonarr';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the local Sonarr data cache';

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
        $settings = MegaHelpers::getSettings(new SettingsSonarr);
        $apiSonarr = new Sonarr($settings);
        if($apiSonarr->disabled())
        {
            $this->info('Sonarr is disabled, exiting without executing.');
            return false;
        }
        $this->info('Updating the Sonarr cache, this might take a tick...');
        $apiSonarr->updateLocalData();
        $this->info('Finished updating the Sonarr cache.');
    }
}
