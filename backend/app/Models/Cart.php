<?php

namespace App\Models;

use App\Http\Controllers\ProductController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $table = 'gio_hang';
    public $timestamps = false;
    protected $fillable = [
        'id_product',
        'id_user'
    ];

    public function product() {
        return $this->belongsTo(ProductController::class, 'id_product');
    }
}
