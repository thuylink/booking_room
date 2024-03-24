<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;

class SiteController extends Controller
{
    public function product_()
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
        $total = DB::table('gio_hang')
        ->where('id_user', Auth::user()->id);
    }

}
