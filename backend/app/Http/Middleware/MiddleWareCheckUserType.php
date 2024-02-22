<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MiddleWareCheckUserType
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // $usertype = $request->user()->usertype;

        // if ($usertype === 0) {
        //     return redirect()->route('dashboard');
        // }

        // if ($usertype === 1) {
        //     return redirect()->route('dashboard-host');
        // }

        return $next($request);
    }
}
