<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

class ImageController extends Controller
{
    public function getCategoryImage($imageName)
    {
        $imagePath = public_path('uploads/category360/' . $imageName);
        if (File::exists($imagePath)) {
            return Response::file($imagePath);
        } else {
            abort(404);
        }
    }
}
