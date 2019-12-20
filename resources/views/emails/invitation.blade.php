@component('mail::message')
# OMG! You've been invited!

Hello

You must have some really good karma built up. Someone invited you to their **MegaMaid** server. You will be able to help them fill up their media library soon by requesting all kinds of content.

@component('mail::button', ['url' => $url])
Accept Invitation
@endcomponent

@component('mail::panel')
**What is MegaMaid?** It is a tool that can be setup by those savvy enough to configure their own media automation stuff. If you are using a Plex or Kodi server that someone hosts, then MegaMaid is a tool to help request and manage content for the server's users.
@endcomponent

*From the {{ config('app.name') }} automation robot. Do not reply to this email, it won't go anywhere.*
@endcomponent
