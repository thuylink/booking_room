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
    ];
}
