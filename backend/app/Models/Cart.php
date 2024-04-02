<?php

namespace App\Models;

use App\Http\Controllers\ProductController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Cart extends Model
{
    use HasFactory;
    protected $table = 'gio_hang';
    public $timestamps = true;
    protected $fillable = [
        'id_product',
        'id_user'
    ];

    // public function products(): HasMany {
    //     return $this->hasMany(Product::class);
    // }


    public function product()
    {
        return $this->belongsTo(ProductController::class, 'id_product');
    }
}
