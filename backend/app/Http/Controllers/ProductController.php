<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    public function index_()
    {
        $products = Product::all();
        return view('product.index', compact('products'));
    }

    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_category' => 'required|integer',
            'privacy_type' => 'required|string',
            'location' => 'required|string',
            'capacity' => 'required|string',
            'amenities' => 'required|string',
            'image' => 'nullable|array',
            'image.*' => 'nullable|image',
            'image360' => 'nullable|array',
            'image360.*' => 'nullable|image',
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|string',
        ]);

        if ($request->hasFile('image')) {
            $images = $request->file('image');
            $imageNames = [];

            foreach ($images as $image) {
                $extension = $image->getClientOriginalExtension();
                $imageName = time() . '_' . uniqid() . '.' . $extension;
                $image->move('uploads/product/', $imageName);
                $imageNames[] = $imageName;
            }

            $validatedData['image'] = json_encode($imageNames);

        }

        if ($request->hasFile('image360')) {
            $image360s = $request->file('image360');
            $image360Names = [];

            foreach ($image360s as $image360) {
                $extension = $image360->getClientOriginalExtension();
                $image360Name = time() . '_' . uniqid() . '.' . $extension;
                $image360->move('uploads/product/', $image360Name);
                $image360Names[] = $image360Name;
            }

            $validatedData['image360'] = json_encode($image360Names);
        }

        $product = Product::create($validatedData);

        return response()->json(['status' => 'Tạo mới nhà thành công'], 201);
    }

    //create
    public function add(Request $request)
    {
        return view('product.add');
    }


    //update
    public function edit($id)
    {
        $product = Product::find($id);
        return view('product.edit', compact('product'));
    }

    public function update(Request $request, $id)
    {
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
            $oldImage = 'uploads/product/' . $product->image;
            if (File::exists($oldImage)) {
                File::delete($oldImage);
            }
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/product', $filename);
            $product->image = $filename;
        }
        $product->title = $request->input('title');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->update();
        return redirect()->back()->with('status', 'Đã cập nhật nhà thành công');
        // return view('product.edit', compact('product'));
    }

    //delete
    public function delete($id)
    {
        $product = Product::find($id);
        $image = 'uploads/product/' . $product->image;
        if (File::exists($image)) {
            File::delete($image);
        }
        $product->delete();
        return redirect()->back()->with('status', 'Đã xóa 1 nhà');
    }


    //read - show
    public function show($id)
    {
        $product = Product::find($id);
        return view('product.show', compact('product'));
    }
}
