<?php

namespace App\Mail;

use MegaHelpers;
use App\UserInvite;
use App\Lib\ConfigureEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Invitation extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The number of times the job may be attempted.
     *
     * @var int
     */
    public $tries = 5;

    /**
     * The user instance.
     *
     * @var User
     */
    protected $user_invite;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(UserInvite $user_invite)
    {
        $this->user_invite = $user_invite;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->with(['url' => $this->user_invite->url])
                    ->markdown('emails.invitation');
    }
}
