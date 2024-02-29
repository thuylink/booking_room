<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'category';
    public $timestamps = true;
    protected $fillable = [
        'name_category',
        'image',
        'image360',
        'status'
    ];

    public function products() {
        return $this->hasMany(Product::class, 'id_category', 'id');
    }
}
