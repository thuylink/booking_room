<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Models\Profile;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HostController;
use App\Http\Controllers\HomeMainController;
use App\Http\Controllers\Api\UserController;
use App\Models\User;
use App\Http\Controllers\SiteController;


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





//KHÁCH THUÊ NHÀ


Route::get('/', [HomeMainController::class,'index'])->name('index');
Route::get('/login', [RegisteredUserController::class,'login'])->name('login');
Route::post('/login', [RegisteredUserController::class,'postLogin']);

Route::post('/loginHost', [RegisteredUserController::class,'postLoginHost']);

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


Route::get('/category',[CategoryController::class,'index'])->name('category.all');
Route::get('/add-category',[CategoryController::class,'add'])->name('category.add');
Route::post('/add-category', [CategoryController::class, 'store'])->name('category.store');
Route::get('/edit-category/{id}',[CategoryController::class,'edit'])->name('category.edit');
Route::put('/update-category/{id}', [CategoryController::class, 'update'])->name('category.update');
Route::delete('/delete-category/{id}', [CategoryController::class, 'delete'])->name('category.delete');
Route::get('/show-category/{id}',[CategoryController::class,'show'])->name('category.show');
Route::get('/search', [CategoryController::class, 'search'])->name('category.search');



Route::get('/product',[ProductController::class,'index'])->name('product.all');
Route::get('/add-product',[ProductController::class,'add'])->name('product.add');
Route::post('/add-product', [ProductController::class, 'store'])->name('product.store');
Route::get('/edit-product/{id}',[ProductController::class,'edit'])->name('product.edit');
Route::post('/update-product/{id}', [ProductController::class, 'update'])->name('product.update');
Route::get('/show-product/{id}',[ProductController::class,'show'])->name('product.show');
Route::get('/search', [ProductController::class, 'search'])->name('product.search');

Route::delete('/delete-product/{id}', [ProductController::class, 'delete'])->name('product.delete');



Route::get('/profile', [ProfileController::class, 'index_'])->name('profile.all');

Route::get('/san-pham', [SiteController::class, 'product'])->name('san_pham');
Route::get('/customerhome', [SiteController::class, 'product'])->name('user.products');

Route::get('/dashboard', [SiteController::class, 'product']);

Route::get('/dashboard', [SiteController::class, 'indexCate']);

Route::get('/fe-a-home/{id}',[SiteController::class,'show'])->name('product.show');

