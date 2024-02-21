<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web'])->group(function () {

/*đăng ký 1 tuyến POST/register. khi ng dùng gửi yêu cầu đến tuyến này
nó được xử lý bởi phương thức store. middleware 'guest' được áp dụng
cho tuyến này, đảm bapr rằng chỉ những người dùng chưa đăng nhập mới có thể truy cập
tên tuyến được đặt là register
*/
Route::post('/register', [RegisteredUserController::class, 'store'])
                ->middleware('guest')
                ->name('register');


/*
đăng ký 1 tuyến POST/login để xử lý việc đăng nhập. Middleware 'guest'
đảm bảo rằng chỉ ngwuofi dùng chưa đăng nhập mới truy cập được vào tuyến này
tên tuyến được đặt là login
*/
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest')
                ->name('login');

/**
 * đăng kí 1 tuyến GET/login hiển thị thông tin đăng nhập. middleware 'guest' đảm
 * bảo chỉ người dùng chưa đăng nhập mới có thể truy cập vào tuyến này, tên tuyến
 * được đặt là login
 */
Route::get('/login', [AuthenticatedSessionController::class, 'getLoginInfo'])
                ->middleware('guest')
                ->name('login');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->middleware('auth')
                ->name('logout');


});
