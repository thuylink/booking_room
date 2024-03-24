<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function addToCart (Request $request) {
        //lấy ttin sp từ request
        $product = $request->id_product;
        $id_user = Auth::user()->id;

        //kiểm tra xe sp có trong cart chưa
        $existingCartItem = Cart::where('id_product', $product)
        ->where('id_user', $id_user)
        ->first();

        return redirect()->back();

    }

    public function delete(Request $request, string $id) {
        if ($request->isMethod('POST')) {
            $cart = Cart::find($id);
            $cart->delete();
        } else {
            return view('errors.4-5');
        }
        return back();
    }
}
