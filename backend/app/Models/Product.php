<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'product';
    public $timestamps = true;
    protected $fillable = [
        'id_category',
        'privacy_type',
        'location',
        'capacity',
        'amenities',
        'image',
        'image360',
        'title',
        'description',
        'price',
        'id_owner'
    ];

    /**mqh belongsTo giữa Product và Category
     * mỗi product thuộc về một category
    */
    public function category () {
        return $this->belongsTo(Category::class, 'id_category');
    }

    public function cart() {
        return $this->belongsTo(Cart::class);
    }
}
