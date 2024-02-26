<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
class ProductController extends Controller
{
    public function index() {
        $products = Product::all();
        return view('product.index', compact('products'));
    }

    public function store(Request $request){
        $product = new Product;
        $product->id_category = $request->input('id_category');
        if ($request->has('privacy_type')) {
            $product->privacy_type = $request->input('privacy_type');
        }
        $product->location = $request->input('location');
        $product->capacity = $request->input('capacity');
        $product->amenities = $request->input('amenities');

        //upload 1 ảnh

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); //lấy tên mở rộng .jpg .png ...
            $filename = time().'.'.$extension;
            $file->move('uploads/product/', $filename); //upload lên thư mục upload/category
            $product->image = $filename;
        }



        $product->title = $request->input('title');
        $product->description = $request->input('description');
        $product->price = $request->input('price');

        $product->save();
        return redirect()->back()->with('status', 'Đã thêm mới 1 nhà');
    }
    //create
    public function add(Request $request){
        return view('product.add');
    }


    //update
    public function edit($id) {
        $product = Product::find($id);
        return view('product.edit', compact('product'));
    }

    public function update(Request $request, $id) {
        $product = Product::find($id);
        $product->id_category = $request->input('id_category');
        if ($request->has('privacy_type')) {
            $product->privacy_type = $request->input('privacy_type');
        }
        $product->location = $request->input('location');
        $product->capacity = $request->input('capacity');
        $product->amenities = $request->input('amenities');


        if ($request->hasFile('image')) {
            /**nếu có file trong form update thì tìm file cũ và xóa đi */
            $oldImage = 'uploads/product/'.$product->image;
            if (File::exists($oldImage)) {
                File::delete($oldImage);
            }
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename= time().'.'.$extension;
            $file->move('uploads/product',$filename);
            $product->image=$filename;
        }
        $product->title = $request->input('title');
        $product->description = $request->input('description');
        $product->price = $request->input('price');        $product->update();
        return redirect()->back()->with('status','Đã cập nhật nhà thành công');
        // return view('product.edit', compact('product'));
    }

    //delete
    public function delete($id) {
        $product = Product::find($id);
        $image = 'uploads/product/' . $product->image;
        if (File::exists($image)) {
            File::delete($image);
        }
        $product->delete();
        return redirect()->back()->with('status', 'Đã xóa 1 nhà');
    }


    //read - show
    public function show ($id) {
        $product = Product::find($id);
        return view('product.show', compact('product'));
    }
}
