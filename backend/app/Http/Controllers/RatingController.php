<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function store(Request $request) {
        $validatedData = $request->validate([
            'id_product' => 'required|integer',
            'id_user'=> 'required|integer',
            'star'=>'required|integer',
            'cmt'=>'required|string',
        ]);

        $existingRating = Rating::where('id_product', $validatedData['id_product'])
        ->where('id_user', $validatedData['id_user'])
        ->first();

        if ($existingRating) {
            return response()
            ->json(['message' => 'Người dùng đã đánh giá sản phẩm trước đó.'], 400);
        }

        $rating = new Rating();
        $rating->id_product = $request->id_product;
        $rating->id_user = $request->id_user;
        $rating->star = $request->star;
        $rating->cmt = $request->cmt;
        $rating->save();
        return response()->json($rating, 201);
    }

    // public function getRating(Request $request) {
    //     $productId = $request->input('id_product');
    //     $userId= $request->input('id_user');

    //     $rating = Rating::where('id_product', $productId)
    //     ->where('id_user', $userId) ->first();

    //     $numberStars = $rating ? $rating->star : 0;
    //     return response()->json(['số sao đánh giá là: ' => $numberStars]);
    // }

    public function index()
    {
        $rates = Rating::all();
        return response()->json($rates);
    }


//     public function index(Request $request)
// {
//     $productId = $request->input('id_product');
//     $rates = Rating::where('id_product', $productId)->get();
//     return response()->json($rates);
// }

}
