<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $table = 'booking';

    public $timestamps = true;
    protected $fillable = [
        'id_user',
        'id_product',
        'checkin',
        'checkout',
        'price',
        'guestNumber',
        'guestName',
        'phone',
        'email',
        'message',
    ];

    //định nghĩa quan hệ Booking với User và Product
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function product() {
        return $this->belongsTo(Product::class);
    }
}
