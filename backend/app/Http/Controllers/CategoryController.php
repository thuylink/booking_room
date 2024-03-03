<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\File;

class CategoryController extends Controller
{
    public function index_()
    {
        $categories = Category::all();
        return view('category.index', compact('categories'));
    }

    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
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
            $image360Names = [];

            foreach ($image360s as $image360) {
                $extension = $image360->getClientOriginalExtension();
                $image360Name = time() . '_' . uniqid() . '.' . $extension;
                $image360->move('uploads/category/', $image360Name);
                $image360Names[] = $image360Name;
            }

            $validatedData['image360'] = json_encode($image360Names);
        }

        $category = Category::create($validatedData);

        return response()->json(['status' => 'Tạo mới danh mục thành công'], 201);
    }


    //create
    public function add(Request $request)
    {
        return view('category.add');
    }

    //update
    public function edit($id)
    {
        $category = Category::find($id);
        return view('category.edit', compact('category'));
    }

    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->name_category = $request->input('name_category');
        if ($request->hasFile('image')) {
            /**nếu có file trong form update thì tìm file cũ và xóa đi */
            $oldImage = 'uploads/categogy/' . $category->image;
            if (File::exists($oldImage)) {
                File::delete($oldImage);
            }
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/category', $filename);
            $category->image = $filename;
        }
        $category->status = $request->input('status');
        $category->update();
        return redirect()->back()->with('status', 'Đã cập nhật danh mục thành công');
        // return view('category.edit', compact('category'));
    }

    //delete
    public function delete($id)
    {
        $category = Category::find($id);
        $image = 'uploads/category/' . $category->image;
        if (File::exists($image)) {
            File::delete($image);
        }
        $category->delete();
        return redirect()->back()->with('status', 'Đã xóa 1 danh mục');
    }

    //read - show
    public function show($id)
    {
        $category = Category::find($id);
        return view('category.show', compact('category'));
    }
}
