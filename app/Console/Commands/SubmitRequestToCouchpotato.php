<?php

namespace App\Console\Commands;

use MegaHelpers;
use App\MediaRecord;
use App\Lib\Api\CouchPotato;
use Illuminate\Console\Command;

class SubmitRequestToCouchPotato extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'megamaid:submit:couchpotato {megaKey : The fk value of the MegaMaid media record}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Submit a request to Couchpotato using stored credentials and the provided tmdbId.';

    /**
     * The console command description.
     *
     * @var App\MediaRecord
     */
    protected $record;

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->record = MediaRecord::where('source', 'megamaid')
            ->where('fk', $this->argument('megaKey'))
            ->firstOrFail();

        $api = new CouchPotato();
        if($api->disabled())
        {
            $this->info('CouchPotato is disabled, exiting without executing.');
            return false;
        }
        $this->info('Sending request to CouchPotato');

        $response = json_decode($api->submitRequest($this->record->imdbId), true);

        if(array_key_exists('success', $response) && $response['success'] === true)
        {
            $this->record->complete();
            $this->info('Finished sending request to Radarr.');
        }
        else
        {
            $this->info('Failed sending request to Radarr.');
        }

        return $response;
    }
}
