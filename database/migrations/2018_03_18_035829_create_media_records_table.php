<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMediaRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_records', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->datetime('remote_updated_at')->nullable();
            $table->string('source')->index();
            $table->string('fk')->index();
            $table->string('type')->index();
            $table->integer('requested_by')->unsigned()->nullable()->index();
            $table->integer('approved_by')->unsigned()->nullable()->index();
            $table->datetime('approved_on')->nullable();
            $table->string('status');
            $table->text('json');
            $table->string('imdbId')->nullable();
            $table->string('tmdbId')->nullable();
            $table->string('tvdbId')->nullable();
            $table->string('tvMazeId')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_records');
    }
}
