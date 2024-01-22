<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $table = 'profile';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'id_user',
        'name',
        'adress',
        'gender',
        'phone',
        'birthday',
        'emergency',

    ];

    /*
    định nghĩa mối quan hệ belongsTo
    giữa model hiện tại và model Users
    Mỗi bản ghi trong bảng profile
    là 1 bản ghi trong bảng users
    */
    public function user() {
        return $this->belongsTo(Users::class, 'id_user');
    }
}
