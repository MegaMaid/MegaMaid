<?php

namespace App\Console\Commands;

use MegaHelpers;
use App\MediaRecord;
use App\SettingsRadarr;
use App\Lib\Api\Radarr;
use Illuminate\Console\Command;

class SubmitRequestToRadarr extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'megamaid:submit:radarr {megaKey : The fk value of the MegaMaid media record}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Submit a request to Radarr using stored credentials and the provided tmdbId.';

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
        // $this->record = MediaRecord::where('source', 'couchpotato')
        $this->record = MediaRecord::where('fk', $this->argument('megaKey'))
            // ->where('fk', $this->argument('megaKey'))
            ->firstOrFail();

        $settings = MegaHelpers::getSettings(new SettingsRadarr);
        $apiRadarr = new Radarr($settings);
        if($apiRadarr->disabled())
        {
            $this->info('Radarr is disabled, exiting without executing.');
            return false;
        }
        $this->info('Sending request to Radarr');

        $response = $apiRadarr->submitRequest($this->record->tmdbId, $settings->directory, $settings->quality, $settings->availability);
        $this->record->complete();

        $this->info('Finished sending request to Radarr.');
        return $response;
    }
}
