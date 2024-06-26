<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/add-product',[ProductController::class,'add']);

Route::post('/add-product', [ProductController::class, 'store']);


Route::get('/product', [ProductController::class, 'index']);
// Route::get('/product',[ProductController::class,'index_'])->name('product.all');
Route::get('/category360/{imageName}', [ImageController::class, 'getCategoryImage']);

/**
 *
 */
