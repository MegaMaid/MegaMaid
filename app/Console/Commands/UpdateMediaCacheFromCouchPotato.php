<?php

namespace App\Console\Commands;

use MegaHelpers;
use App\Lib\Api\CouchPotato;
use Illuminate\Console\Command;

class UpdateMediaCacheFromCouchPotato extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'megamaid:update:couchpotato';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the local CouchPotato data cache';

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
        $api = new CouchPotato();
        if($api->disabled())
        {
            $this->info('CouchPotato is disabled, exiting without executing.');
            return false;
        }
        $this->info('Updating the CouchPotato cache, this might take a tick...');
        $api->updateLocalData();
        $this->info('Finished updating the CouchPotato cache.');
    }
}
