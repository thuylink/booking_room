<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;


class MiddlewareAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        return $next($request);
        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        // if (!Auth::check()) {
        //     // Nếu chưa đăng nhập, chuyển hướng người dùng đến trang đăng nhập
        //     return redirect()->route('login')->with('error', 'Bạn cần đăng nhập để truy cập trang này.');
        // }

        // // Nếu đã đăng nhập, cho phép request tiếp tục
        // return $next($request);
    }
}
