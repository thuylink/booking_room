<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    use HasFactory;
    protected $table = 'home';
    protected $guarded = [''];

    public $timestamps = false;

    protected $fillable = [
        'id_home',
        'name',
        'description',
        'id_category',
        'image',
        'file',
        'location',
        'price',
        'host_name',
        'map',
        'created_at',
        'updateed_at'
    ];
}
