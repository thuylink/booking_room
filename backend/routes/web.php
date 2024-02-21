<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\HostController;
use App\Http\Controllers\HomeMainController;
use App\Http\Controllers\Api\UserController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/**
 * đăng ký một tuyến GET cho đường dẫn gốc'/' (tức là trang chủ của ứng dụng)
 * dòng require...  yêu cầu tệp auth.php
 * điều này giúp các tuyến và cấu hình liên quan đến
 * xác thực và phân quyền trong ứng dụng
 */

Route::get('/', function () {
    return ['Laravel' => app()->version()];

});

require __DIR__.'/auth.php';



// //client routes
// Route::prefix('category')->group(function() {
//     Route::get('/',[CategoryController::class, 'index']);
// });


// Route::get('/', [HomeMainController::class,'index'])->name('index');
// Route::get('/login', [HostController::class,'login'])->name('login');
// Route::post('/login', [HostController::class,'postLogin']);
// Route::get('/register', [HostController::class,'register'])->name('register');
// Route::post('/register', [HostController::class,'postRegister']);
// Route::get('/logout', [HostController::class,'logout'])->name('logout');
// Route ::get('/host/home', [HostController::class, 'index'])->name('home-host');

/*

Route::get('/', [HomeMainController::class,'index'])->name('index');
Route::get('/login', [UserController::class,'login'])->name('login');
Route::post('/login', [UserController::class,'postLogin']);
Route::get('/register', [UserController::class,'register'])->name('register');
Route::post('/register', [UserController::class,'postRegister']);
Route::get('/logout', [UserController::class,'logout'])->name('logout');

//sau khi login, đi tới customer home
Route::get('/customerhome', [DashboardController::class, 'index'])->name('customerhome');

//sau khi click vào 'cho thuê nhà', đi tới trang chủ nhà chọn đăng kí hoặc đăng nhập
Route::get('/host', [HomeMainController::class,'index_host'])->name('host');

Route::get('/register-host', [HostController::class,'registerHost'])->name('host.register-host');

Route::get('/login-host', [HostController::class,'loginHost'])->name('host.login-host');




Route::get('/dashboard', [DashboardController::class, 'index'])->name('hosthome');





// Route::post('register', [RegisteredUserController::class,'store'])->name('index');

*/


// Route::get('/', [HomeMainController::class,'index'])->name('index');
// Route::get('/login', [RegisteredUserController::class,'login'])->name('login');
// Route::post('/login', [RegisteredUserController::class,'postLogin']);
// Route::get('/register', [RegisteredUserController::class,'register'])->name('register');
// Route::post('/register', [RegisteredUserController::class,'postRegister']);
// Route::get('/logout', [RegisteredUserController::class,'logout'])->name('logout');





//KHÁCH THUÊ NHÀ


Route::get('/', [HomeMainController::class,'index'])->name('index');
Route::get('/login', [RegisteredUserController::class,'login'])->name('login');
Route::post('/login', [RegisteredUserController::class,'postLogin']);
//đi đến trang đki
Route::get('/register', [RegisteredUserController::class,'register'])->name('register');
//xử lí khi nhập thông tin đki
Route::post('/register', [RegisteredUserController::class,'store']);
Route::get('/logout', [RegisteredUserController::class,'logout'])->name('logout');

//sau khi khách tìm nhà đăng nhập thành công, đi tới customer home
Route::get('/customerhome', [DashboardController::class, 'index'])->name('customerhome');


//CHỦ NHÀ

//sau khi click vào 'cho thuê nhà', đi tới trang chủ nhà chọn đăng kí hoặc đăng nhập
Route::get('/host', [HomeMainController::class,'index_host'])->name('host');
//đi đến trang đăng kí cho chủ nhà
Route::get('/host/register-host', [RegisteredUserController::class,'registerHost'])->name('host.register-host');

Route::post('/host/register-host', [RegisteredUserController::class, 'store']);
//đi đến trang đăng nhập cho chủ nhà
Route::get('/host/login-host', [RegisteredUserController::class,'loginHost'])->name('host.login-host');
//đi đến dashboard cho chủ nhà sau khi chủ nhà đăng nhập thành công
Route::get('/dashboard', [DashboardController::class, 'indexHost'])->name('hosthome');

Route::post('/host/login-host', [RegisteredUserController::class,'postLoginHost']);


