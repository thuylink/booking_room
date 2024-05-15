<?php

namespace App\Http\Repositories;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;


class ProductRepository {
    /**
     *
     * @var Product
     */
    protected $product;

    /**
     * @param Product $product
     */

     public function __construct(Product $product) {
        $this->product=$product;
     }
     /**
     * Create a new category
     *
     * @param Request $request
     * @return Product
     * @throws \Exception
     */

     public function createProduct($data)
     {
         $product = $this->product->create([
             'id_category' => $data['id_category'],
             'privacy_type' => $data['privacy_type'],
             'location' => $data['location'],
             'capacity' => $data['capacity'],
             'amenities' => $data['amenities'],
             'image' => $data['image'],
             'image360' => $data['image360'],
             'title' => $data['title'],
             'description' => $data['description'],
             'price' => $data['price'],
         ]);

         return $product;
     }


     public function updateProduct($id, $data)
     {
         $product = $this->product->findOrFail($id);
         $product->update([
            'id_category' => $data['id_category'],
            'privacy_type' => $data['privacy_type'],
            'location' => $data['location'],
            'capacity' => $data['capacity'],
            'amenities' => $data['amenities'],
             'image' => $data['image'],
             'image360' => $data['image360'],
             'title' => $data['title'],
             'description' => $data['description'],
             'price' => $data['price'],
         ]);
         return $product;
     }


     public function deleteProduct($id) {
        $product = $this->product->find($id);

        if ($product) {
            $this->deleteImage($product->image);
            $this->deleteImage($product->image360);
            $product->delete();
        }
    }

    protected function deleteImage($imagePath) {
        if ($imagePath && File::exists($imagePath)) {
            File::delete($imagePath);
        }
    }
}

