<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RatingController;
use App\Models\Profile;
use App\Models\Rating;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HostController;
use App\Http\Controllers\HomeMainController;
use App\Models\User;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\BookingController;


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


// Route::get('/', [HomeMainController::class,'index'])->name('index');
// Route::get('/login', [RegisteredUserController::class,'login'])->name('login');
Route::post('/login', [RegisteredUserController::class,'postLogin']);
Route::post('/loginHost', [RegisteredUserController::class,'postLoginHost']);
Route::get('/user', [RegisteredUserController::class, 'index'])->name('user.index');
//đi đến trang đki
// Route::get('/register', [RegisteredUserController::class,'register'])->name('register');
//xử lí khi nhập thông tin đki
Route::post('/register', [RegisteredUserController::class,'store']);
Route::get('/logout', [RegisteredUserController::class,'logout'])->name('logout');

//sau khi khách tìm nhà đăng nhập thành công, đi tới customer home
// Route::get('/customerhome', [DashboardController::class, 'index'])->name('customerhome');


//CHỦ NHÀ

//sau khi click vào 'cho thuê nhà', đi tới trang chủ nhà chọn đăng kí hoặc đăng nhập
// Route::get('/host', [HomeMainController::class,'index_host'])->name('host');
//đi đến trang đăng kí cho chủ nhà
// Route::get('/host/register-host', [RegisteredUserController::class,'registerHost'])->name('host.register-host');

Route::post('/host/register-host', [RegisteredUserController::class, 'store']);
//đi đến trang đăng nhập cho chủ nhà
// Route::get('/host/login-host', [RegisteredUserController::class,'loginHost'])->name('host.login-host');
//đi đến dashboard cho chủ nhà sau khi chủ nhà đăng nhập thành công
// Route::get('/dashboard', [DashboardController::class, 'indexHost'])->name('hosthome');

// Route::post('/host/login-host', [RegisteredUserController::class,'postLoginHost']);


Route::get('/category',[CategoryController::class,'index'])->name('category.all');
Route::get('/add-category',[CategoryController::class,'add'])->name('category.add');
Route::post('/add-category', [CategoryController::class, 'store'])->name('category.store');
Route::get('/edit-category/{id}',[CategoryController::class,'edit'])->name('category.edit');
Route::post('/update-category/{id}', [CategoryController::class, 'update'])->name('category.update');
Route::delete('/delete-category/{id}', [CategoryController::class, 'delete'])->name('category.delete');
Route::get('/show-category/{id}',[CategoryController::class,'show'])->name('category.show');
Route::get('/search', [CategoryController::class, 'search'])->name('category.search');


Route::get('/product',[ProductController::class,'index'])->name('product.all');
Route::get('/add-product',[ProductController::class,'add'])->name('product.add');
Route::post('/add-product', [ProductController::class, 'store'])->name('product.store');
Route::get('/edit-product/{id}',[ProductController::class,'edit'])->name('product.edit');
// Route::put('/update-product/{id}', [ProductController::class, 'update'])->name('product.update');
Route::post('/update-product/{id}', [ProductController::class, 'update'])->name('product.update');

Route::get('/show-product/{id}',[ProductController::class,'show'])->name('product.show');
Route::get('/search', [ProductController::class, 'search'])->name('product.search');

Route::delete('/delete-product/{id}', [ProductController::class, 'delete'])->name('product.delete');



Route::get('/profile', [ProfileController::class, 'index'])->name('profile.all');

Route::get('/san-pham', [SiteController::class, 'product'])->name('san_pham');
Route::get('/customerhome', [SiteController::class, 'product'])->name('user.products');

Route::get('/dashboard', [SiteController::class, 'product']);
Route::get('/', [SiteController::class, 'product']);

Route::get('/dashboard', [SiteController::class, 'indexCate']);

Route::post('/gio-hang/them', [CartController::class,'addToCart'])->name('cart.add');

Route::get('/gio-hang/{id}', [SiteController::class, 'viewCart'])->name('gio-hang');
Route::delete('/delete-cart/{id}', [CartController::class, 'delete'])->name('cart.delete');

Route::post('/add-rating', [RatingController::class, 'store'])->name('rating.add');
Route::get('/rating', [RatingController::class, 'index'])->name('rating.all');

Route::get('products/{name_category}', [ProductController::class, 'getProductByCategory']);

Route::get('/users', [RegisteredUserController::class, 'index']);

Route::get('products/category/{name_category}', [ProductController::class, 'getProductsByCategory']);


// Route::get('/profile', [CustomerController::class, 'showProfile'])->name('users.all');
Route::post('/store-user', [CustomerController::class, 'store'])->name('user.add');
Route::get('/profiles', [CustomerController::class, 'showProfile'])->name('user.show');
Route::get('/edit-user',[CustomerController::class,'edit'])->name('user.edit');
// Route::put('/update-user', [CustomerController::class, 'update'])->name('user-update');

// Route::get('/show-profile', [CustomerController::class, 'showProfile'])->name('profile.show');
// Route::post('/store-profile', [CustomerController::class, 'store'])->name('profile.store');


Route::get('/add-profile',[CustomerController::class,'add'])->name('profile.add');
Route::post('/add-profile', [CustomerController::class, 'store'])->name('profile.store');
Route::post('/edit-user', [CustomerController::class, 'update'])->name('profile.update');


Route::get('/products/{id}/view',[ProductController::class,'incrementViewCount'])->name('product.view');
Route::get('/products/{productId}/related', [ProductController::class,'getRelatedProducts'])->name('product->related');

Route::get('/create-booking', [BookingController::class, 'showBookingForm'])->name('booking.create');
Route::post('/store-booking', [BookingController::class, 'store'])->name('booking.store');
Route::get('/booking', [BookingController::class, 'index'])->name('bookings.all');
