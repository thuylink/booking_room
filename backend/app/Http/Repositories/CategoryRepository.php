<?php

namespace App\Http\Repositories;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;


class CategoryRepository {
    /**
     *
     * @var Category
     */
    protected $category;

    /**
     * @param Category $category
     */

     public function __construct(Category $category) {
        $this->category=$category;
     }
     /**
     * Create a new category
     *
     * @param Request $request
     * @return Category
     * @throws \Exception
     */

     public function createCategory($data)
     {
         $category = $this->category->create([
             'name_category' => $data['name_category'],
             'image' => $data['image'],
             'image360' => $data['image360'],
             'status' => $data['status'],
         ]);

         return $category;
     }

     public function updateCategory($id, $data)
     {
         $category = $this->category->findOrFail($id);
         $category->update([
             'name_category' => $data['name_category'],
             'image' => $data['image'],
             'image360' => $data['image360'],
             'status' => $data['status'],
         ]);
         return $category;
     }


     public function deleteCategory($id) {
        $category = $this->category->find($id);

        if ($category) {
            $this->deleteImage($category->image);
            $this->deleteImage($category->image360);
            $category->delete();
        }
    }

    protected function deleteImage($imagePath) {
        if ($imagePath && File::exists($imagePath)) {
            File::delete($imagePath);
        }
    }

}

