<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class AuthAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check() && Auth::user()->isAdmin) {
            return $next($request);
        }

        throw new AccessDeniedHttpException();
    }
}
