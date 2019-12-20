<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Lib\Api\TMDBExternalIdMap;

class UpdateMediaIdMaps extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'megamaid:update:idmap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the local ID Map data cache';

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
        $this->info('Updating the local ID map cache, this might take a tick...');
        new TMDBExternalIdMap;
        $this->info('Finished updating the ID map cache.');
    }
}
