<?php

namespace App\Console\Commands;

use MegaHelpers;
use App\MediaRecord;
use App\SettingsSonarr;
use App\Lib\Api\Sonarr;
use Illuminate\Console\Command;

class SubmitRequestToSonarr extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'megamaid:submit:sonarr {megaKey : The fk value of the MegaMaid media record}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Submit a request to Sonarr using stored credentials and the provided tmdbId.';

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
        $record = MediaRecord::where('source', 'megamaid')
            ->where('fk', $this->argument('megaKey'))
            ->firstOrFail();

        if(!$record->tvdbId)
        {
            $record->status = 'failed_missing_ext_id';
            $record->save();
            return abort(400, 'tvdbId missing');
        }

        $settings = MegaHelpers::getSettings(new SettingsSonarr);
        $apiSonarr = new Sonarr($settings);
        if($apiSonarr->disabled())
        {
            $this->info('Sonarr is disabled, exiting without executing.');
            return false;
        }
        $this->info('Sending request to Sonarr');

        $response = $apiSonarr->submitRequest($record->tvdbId, $settings->directory, $settings->quality);
        $record->complete();

        $this->info('Finished sending request to Sonarr.');
        return $response;
    }
}
