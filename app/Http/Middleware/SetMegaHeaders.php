<?php

namespace App\Http\Middleware;

use Cookie;
use Closure;
use MegaHelpers;

class SetMegaHeaders
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        return $response->header('initial-setup-completed', MegaHelpers::initialSetupCompleted());
    }
}
