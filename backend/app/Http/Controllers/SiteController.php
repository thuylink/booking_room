<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Log;

class SiteController extends Controller
{
    public function product()
    {
        $products = Product::all();

        // $category = Category::whereHas('products', function ($query) {
        //     // $query->where('status', 1);
        // })->get();
        return view('customer.customerhome', compact('products'));
    }

    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function indexCate()
    {
        $categories = Category::all();

        return response()->json($categories);
    }

    public function show($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    public function viewCart() {
        $cart = Cart::all();
        return response()->json($cart);
    }
    public function viewCart_($id) {
        try {
            $cart = Cart::findOrFail($id);

            $products = $cart->products()->get();
            // var_dump("hii", $products);
            Log::info($cart);

            return ProductResource::collection($products);
                // return CartResource::collection($cart); //trả về danh sách sản phẩm

        } catch (\Exception $e) {
            return response()->json(['error' => 'Cart not found.'], 404);
        }

    }

}
