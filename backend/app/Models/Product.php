<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'product';
    public $timestamps = false;
    protected $fillable = [
        'name_product',
        'description',
        'price',
        'id_category',
        'status',
        'location',
        'image'
    ];
}
