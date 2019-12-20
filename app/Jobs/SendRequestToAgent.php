<?php

namespace App\Jobs;

use Artisan;
use App\MediaRecord;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendRequestToAgent implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The number of times the job may be attempted.
     *
     * @var int
     */
    public $tries = 5;

    /**
     * The number of seconds the job can run before timing out.
     *
     * @var int
     */
    public $timeout = 30;

    protected $record;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(MediaRecord $record)
    {
        $this->record = $record;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $cmd = $this->record->type === 'movie'
                    ? 'radarr'
                    : 'sonarr';
        Artisan::call('megamaid:submit:' . $cmd, ['megaKey' => $this->record->fk]);
    }
}
