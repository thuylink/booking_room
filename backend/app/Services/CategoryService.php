<?php

namespace App\Services;
use App\Http\Repositories\CategoryRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log; // Import the Log facade

class CategoryService {
    /**
     * @var $categoryRepository
     */
    protected $categoryRepository;

    /**
     * @param CategoryRepository $categoryRepository
     */

     public function __construct(CategoryRepository $categoryRepository) {
        $this->categoryRepository = $categoryRepository;
     }
/**
 * biến request là validatedData nên bỏ dòng validatedData
 *
 */
public function createCategory($request)
{
    Log::info("message");

    // Khởi tạo mảng để lưu tên ảnh và ảnh360
    $imageNames = [];
    $image360Base64s = [];

    if ($request->hasFile('image')) {
        $images = $request->file('image');

        foreach ($images as $image) {
            $extension = $image->getClientOriginalExtension();
            $imageName = time() . '_' . uniqid() . '.' . $extension;
            $image->move('uploads/category/', $imageName);
            $imageNames[] = $imageName;
        }
    }

    if ($request->hasFile('image360')) {
        $image360s = $request->file('image360');

        foreach ($image360s as $image360) {
            $image360Contents = file_get_contents($image360->getPathname());
            $image360Base64 = base64_encode($image360Contents);
            $image360Base64s[] = $image360Base64;
        }
    }

    // Chuyển đổi mảng ảnh và ảnh360 thành chuỗi JSON trước khi truyền vào phương thức createCategory
    $imageJson = json_encode($imageNames);
    $image360Json = json_encode($image360Base64s);

    // Gọi phương thức createCategory của CategoryRepository và truyền dữ liệu vào
    $category = $this->categoryRepository->createCategory([
        'name_category' => $request->name_category,
        'image' => $imageJson,
        'image360' => $image360Json,
        'status' => $request->status,
    ]);
    return $category;
}

public function updateCategory($id, $request)
{
    // Khởi tạo mảng để lưu tên ảnh và ảnh360
    $imageNames = [];
    $image360Base64s = [];

    if ($request->hasFile('image')) {
        $images = $request->file('image');

        foreach ($images as $image) {
            $extension = $image->getClientOriginalExtension();
            $imageName = time() . '_' . uniqid() . '.' . $extension;
            $image->move('uploads/category/', $imageName);
            $imageNames[] = $imageName;
        }
    }

    if ($request->hasFile('image360')) {
        $image360s = $request->file('image360');

        foreach ($image360s as $image360) {
            $image360Contents = file_get_contents($image360->getPathname());
            $image360Base64 = base64_encode($image360Contents);
            $image360Base64s[] = $image360Base64;
        }
    }

    // Chuyển đổi mảng ảnh và ảnh360 thành chuỗi JSON trước khi truyền vào phương thức updateCategory
    $imageJson = json_encode($imageNames);
    $image360Json = json_encode($image360Base64s);

    // Gọi phương thức updateCategory của CategoryRepository và truyền dữ liệu vào
    $category = $this->categoryRepository->updateCategory($id, [
        'name_category' => $request->name_category,
        'image' => $imageJson,
        'image360' => $image360Json,
        'status' => $request->status,
    ]);
    return $category;
}

public function deleteCategory($id) {
    $this->categoryRepository->deleteCategory($id);
    return ['status' => 'Xóa danh mục thành công'];
}



}
