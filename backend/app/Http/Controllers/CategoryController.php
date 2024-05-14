<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::all();
        return response()->json([$categories]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name_category' => 'required|string',
            'image' => 'nullable|array',
            'image.*' => 'nullable|image',
            'image360' => 'nullable|array',
            'image360.*' => 'nullable|image',
            'status' => 'required|integer'
        ]);


        if ($request->hasFile('image')) {
            $images = $request->file('image');
            $imageNames = [];

            foreach ($images as $image) {
                $extension = $image->getClientOriginalExtension();
                $imageName = time() . '_' . uniqid() . '.' . $extension;
                $image->move('uploads/category/', $imageName);
                $imageNames[] = $imageName;
            }

            $validatedData['image'] = json_encode($imageNames);

        }

        if ($request->hasFile('image360')) {
            $image360s = $request->file('image360');
            $image360Base64s = [];

            foreach ($image360s as $image360) {
                $image360Contents = file_get_contents($image360->getPathname());
                $image360Base64 = base64_encode($image360Contents); // Chuyển đổi sang base64
                $image360Base64s[] = $image360Base64;
            }

            $validatedData['image360'] = json_encode($image360Base64s);
        }
        $category = Category::create($validatedData);
        return response()->json([
            'status' => 'Tạo mới danh mục thành công',
            'category' => $category
        ], 201);
    }

    public function show($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }

    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $validatedData = $request->validate([
            'name_category' => 'required|string',
            'status' => 'required|integer',
            'image' => 'nullable|array',
            'image.*' => 'nullable|image',
            'image360' => 'nullable|array',
            'image360.*' => 'nullable|image',
        ]);

        $category->name_category = $validatedData['name_category'];
        $category->status = $validatedData['status'];

        if ($request->hasFile('image')) {
            $imageNames = [];
            foreach ($request->file('image') as $image) {
                $extension = $image->getClientOriginalExtension();
                $imageName = time() . '_' . uniqid() . '.' . $extension;
                $image->move('uploads/category/', $imageName);
                $imageNames[] = $imageName;
            }
            $category->image = json_encode($imageNames);
        }

        if ($request->hasFile('image360')) {
            $image360Base64s = [];
            foreach ($request->file('image360') as $image360) {
                $image360Contents = file_get_contents($image360->getPathname());
                $image360Base64 = base64_encode($image360Contents); // Chuyển đổi sang base64
                $image360Base64s[] = $image360Base64;
            }
            $category->image360 = json_encode($image360Base64s);
        }

        $category->save();

        return response()->json(['status' => 'Cập nhật danh mục thành công'], 200);
    }

    public function delete($id)
    {
        $category = Category::find($id);
        $image = 'uploads/category/' . $category->image;
        if (File::exists($image)) {
            File::delete($image);
        }
        $image360 = 'uploads/category360/' . $category->image360;
        if (File::exists($image360)) {
            File::delete($image360);
        }
        $category->delete();
        return response()->json(['status' => 'Xóa danh mục thành công'], 201);
    }

    public function search(Request $request)
    {
        $search = $request->search;
        $categories = Category::where('name_category', 'like', "%$search%")->get();

        return response()->json($categories);
    }



    //ignore because this is applied for .blade file, not nextjs
    public function index_()
    {
        $categories = Category::all();
        return view('category.index', compact('categories'));
    }

    public function add(Request $request)
    {
        return view('category.add');
    }

    public function edit($id)
    {
        $category = Category::find($id);
        return view('category.edit', compact('category'));
    }

    public function update_(Request $request, $id)
    {
        $category = Category::find($id);
        $category->name_category = $request->input('name_category');
        if ($request->hasFile('image')) {
            $oldImage = 'uploads/category/' . $category->image;
            if (File::exists($oldImage)) {
                File::delete($oldImage);
            }
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/category', $filename);
            $category->image = $filename;
        }

        if ($request->hasFile('image360')) {
            $oldImage360 = 'uploads/category360/' . $category->image360;
            if (File::exists($oldImage360)) {
                File::delete($oldImage360);
            }
            $file360 = $request->file('image360');
            $extension = $file360->getClientOriginalExtension();
            $filename360 = time() . '.' . $extension;
            $file360->move('uploads/category360', $filename360);
            $category->image360 = $filename360;
        }
        $category->status = $request->input('status');
        $category->update();
        return redirect()->back()->with('status', 'Đã cập nhật danh mục thành công');
    }

    public function delete_($id)
    {
        $category = Category::find($id);
        $image = 'uploads/category/' . $category->image;
        if (File::exists($image)) {
            File::delete($image);
        }
        $category->delete();
        return redirect()->back()->with('status', 'Đã xóa 1 danh mục');
    }

    public function show_($id)
    {
        $category = Category::find($id);
        return view('category.show', compact('category'));
    }

    public function search_(Request $request)
    {
        $search = $request->search;
        $categories = Category::where('name_category', 'like', "%$search%")->get();

        return view('category.index', compact('categories', 'search'));
    }
}
