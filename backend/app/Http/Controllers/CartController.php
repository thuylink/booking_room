<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function addToCart(Request $request)
{
    // Lấy thông tin sản phẩm từ request
    $product = $request->input('id_product');
    $id_user = 2;

    // Kiểm tra xem id_product đã tồn tại trong giỏ hàng chưa
    $exists = Cart::where('id_product', $product)
                  ->where('id_user', $id_user)
                  ->exists();

    if (!$exists) {
        // Thêm vào giỏ hàng nếu id_product chưa tồn tại
        $gioHang = new Cart();
        $gioHang->id_product = $product;
        $gioHang->id_user = $id_user;
        $gioHang->save();
    }

    return redirect()->back();
}

    public function delete_(Request $request, string $id) {
        if ($request->isMethod('POST')) {
            $cart = Cart::find($id);
            $cart->delete();
        } else {
            return view('errors.405');
        }
        return back();
    }

    public function delete($id)
    {
        $gioHang = Cart::find($id);

        $gioHang->delete();
        return response()->json(['status' => 'Xóa yêu thích thành công'], 201);
    }
}
