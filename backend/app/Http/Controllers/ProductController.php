<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use App\Models\Category;
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
                $image360Contents = file_get_contents($image360->getPathname());
                $image360Base64 = base64_encode($image360Contents); // Chuyển đổi sang base64
                $image360Base64s[] = $image360Base64;
            }

            $validatedData['image360'] = json_encode($image360Base64s);
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
    public function edit_($id)
    {
        $product = Product::find($id);
        return view('product.edit', compact('product'));
    }

    public function edit($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }
    public function update_(Request $request, $id)
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

        if ($request->hasFile('image360')) {
            $oldImage360 = 'uploads/product360/' . $product->image360;
            if (File::exists($oldImage360)) {
                File::delete($oldImage360);
            }
            $file360 = $request->file('image360');
            $extension360 = $file->getClientOriginalExtension();
            $filename360 = time() . '.' . $extension360;
            $file->move('uploads/product360', $filename360);
            $product->image360 = $filename360;
        }
        $product->title = $request->input('title');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->update();
        return redirect()->back()->with('status', 'Đã cập nhật nhà thành công');
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $validatedData = $request->validate([
            'id_category' => 'required|integer',
            'privacy_type' => 'required|string',
            'image' => 'nullable|array',
            'image.*' => 'nullable|image',
            'image360' => 'nullable|array',
            'image360.*' => 'nullable|image',
            'location' => 'required|string',
            'capacity' => 'required|string',
            'amenities' => 'required|string',
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|string',

        ]);

        $product->id_category = $validatedData['id_category'];
        $product->privacy_type = $validatedData['privacy_type'];

        $product->location = $validatedData['location'];
        $product->capacity = $validatedData['capacity'];
        $product->amenities = $validatedData['amenities'];
        $product->title = $validatedData['title'];
        $product->description = $validatedData['description'];
        $product->price = $validatedData['price'];

        if ($request->hasFile('image')) {
            $imageNames = [];
            foreach ($request->file('image') as $image) {
                $extension = $image->getClientOriginalExtension();
                $imageName = time() . '_' . uniqid() . '.' . $extension;
                $image->move('uploads/product/', $imageName);
                $imageNames[] = $imageName;
            }
            // Cập nhật trường image với mảng các tên file ảnh
            $product->image = json_encode($imageNames);
        }

        if ($request->hasFile('image360')) {
            $image360Base64s = [];
            foreach ($request->file('image360') as $image360) {
                $image360Contents = file_get_contents($image360->getPathname());
                $image360Base64 = base64_encode($image360Contents); // Chuyển đổi sang base64
                $image360Base64s[] = $image360Base64;
            }
            // Cập nhật trường image360 với mảng các base64 của ảnh
            $product->image360 = json_encode($image360Base64s);
        }
        $product->save();
        return response()->json(['status' => 'Cập nhật nhà thành công'], 201);
    }

    //delete
    public function delete_($id)
    {
        $product = Product::find($id);
        $image = 'uploads/product/' . $product->image;
        if (File::exists($image)) {
            File::delete($image);
        }
        $product->delete();
        return redirect()->back()->with('status', 'Đã xóa 1 nhà');
    }

    public function delete($id)
    {
        $product = Product::find($id);
        $image = 'uploads/product/' . $product->image;
        if (File::exists($image)) {
            File::delete($image);
        }
        $image360 = 'uploads/product360/' . $product->image360;
        if (File::exists($image360)) {
            File::delete($image360);
        }
        $product->delete();
        return response()->json(['status' => 'Xóa nhà thành công'], 201);
        // return redirect()->back()->with('status', 'Đã xóa 1 nhà');

    }


    //read - show
    public function show_($id)
    {
        $product = Product::find($id);
        return view('product.show', compact('product'));
    }

    public function show($id)
    {
        // $product = Product::find($id);
        $product = Product::findOrFail($id);
        $product->increment('view_count');
        return response()->json($product);
    }

    public function search(Request $request)
    {
        $search = $request->search;
        $products = Product::where('location', 'like', "%$search%")->get();

        return response()->json($products);
    }

    public function getProductsByCategory($name_category)
    {
        try {
            //tìm danh mục theo tên
            $category = Category::where('name_category', $name_category)->firstOrFail();
            //lấy tất cả sản phẩm thuộc danh mục đó
            $products = $category->products;
            // Trả về danh sách sản phẩm dưới dạng JSON
            return response()->json($products);
        } catch (\Exception $e) {
            // Xử lý nếu có lỗi
            return response()->json(['message' => 'Không tìm thấy danh mục hoặc sản phẩm'], 404);
        }
    }

    public function getRelatedProducts($productId) {
        $product = Product::find($productId);
        $relatedProducts = Product::where('id_category', $product->id_category)
                                    ->where('id', '!=' , $productId)
                                    ->limit(5) ->get();
        return response()->json($relatedProducts);

    }


}
