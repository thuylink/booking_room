<?php

namespace App\Services;
use App\Http\Repositories\ProductRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log; // Import the Log facade

class ProductService {
    /**
     * @var $productRepository
     */
    protected $productRepository;

    /**
     * @param ProductRepository $productRepository
     */

     public function __construct(ProductRepository $productRepository) {
        $this->productRepository = $productRepository;
     }
/**
 * biến request là validatedData nên bỏ dòng validatedData
 *
 */
public function createProduct($request)
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
            $image->move('uploads/product/', $imageName);
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

    $imageJson = json_encode($imageNames);
    $image360Json = json_encode($image360Base64s);

    $product = $this->productRepository->createProduct([
        'id_category' => $request->id_category,
        'privacy_type' => $request->privacy_type,
        'location' => $request->location,
        'capacity' => $request->capacity,
        'amenities' => $request->amenities,
        'image' => $imageJson,
        'image360' => $image360Json,
        'title' => $request->title,
        'description'=>$request->description,
        'price'=>$request->price,
    ]);
    return $product;
}

public function updateProduct($id, $request)
{
    // Khởi tạo mảng để lưu tên ảnh và ảnh360
    $imageNames = [];
    $image360Base64s = [];

    if ($request->hasFile('image')) {
        $images = $request->file('image');

        foreach ($images as $image) {
            $extension = $image->getClientOriginalExtension();
            $imageName = time() . '_' . uniqid() . '.' . $extension;
            $image->move('uploads/product/', $imageName);
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

    $imageJson = json_encode($imageNames);
    $image360Json = json_encode($image360Base64s);

    $product = $this->productRepository->updateProduct($id, [
        'id_category' => $request->id_category,
        'privacy_type' => $request->privacy_type,
        'location' => $request->location,
        'capacity' => $request->capacity,
        'amenities' => $request->amenities,
        'image' => $imageJson,
        'image360' => $image360Json,
        'title' => $request->title,
        'description'=>$request->description,
        'price'=>$request->price,
    ]);
    return $product;
}

public function deleteProduct($id) {
    $this->productRepository->deleteProduct($id);
    return ['status' => 'Xóa nhà thành công'];
}

}
