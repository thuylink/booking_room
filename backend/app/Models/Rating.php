<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    protected $table = 'rating';

    public $timestamps = true;

    protected $fillable = [
        'id_product',
        'id_user',
        'start',
        'cmt'
    ];
}
