<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\File;

class CategoryController extends Controller
{
    //liệt kê
    public function index() {
        $categories = Category::all();
        return view('category.index', compact('categories'));
    }

    public function store(Request $request){
        $category = new Category;
        $category->name_category = $request->input('name_category'); //name_category là cột trong bảng, ten là name="ten" trong form
        // dd($request->all());
        // $category->image = $request->input('anh');
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); //lấy tên mở rộng .jpg .png ...
            $filename = time().'.'.$extension;
            $file->move('uploads/category/', $filename); //upload lên thư mục upload/category
            $category->image = $filename;
        }
        $category->status = $request->input('status');
        $category->created_at = Carbon::now();
        // dd($request->all());

        $category->save();
        return redirect()->back()->with('status', 'Đã thêm mới 1 danh mục');
    }
    //create
    public function add(Request $request){
        return view('category.add');
    }

    //update
    public function edit($id) {
        $category = Category::find($id);
        return view('category.edit', compact('category'));
    }

    public function update(Request $request, $id) {
        $category = Category::find($id);
        $category->name_category = $request->input('name_category');
        if ($request->hasFile('image')) {
            /**nếu có file trong form update thì tìm file cũ và xóa đi */
            $oldImage = 'uploads/categogy/'.$category->image;
            if (File::exists($oldImage)) {
                File::delete($oldImage);
            }
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename= time().'.'.$extension;
            $file->move('uploads/category',$filename);
            $category->image=$filename;
        }
        $category->status = $request->input('status');
        $category->update();
        return redirect()->back()->with('status','Đã cập nhật danh mục thành công');
        // return view('category.edit', compact('category'));
    }

    //delete
    public function delete($id) {
        $category = Category::find($id);
        $image = 'uploads/category/' . $category->image;
        if (File::exists($image)) {
            File::delete($image);
        }
        $category->delete();
        return redirect()->back()->with('status', 'Đã xóa 1 danh mục');
    }

    //read - show
    public function show ($id) {
        $category = Category::find($id);
        return view('category.show', compact('category'));
    }
}
