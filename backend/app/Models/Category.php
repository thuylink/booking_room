<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table='category'; //tên bảng
    protected $guarded = [''];

    public $timestamps = false;

    /*
    định nghĩa rằng danh sách các trường trong CSDL mà laravel sẽ không cho phép
    cập nhật trực tiếp thông qua phương thức fill() hoặc create()
    Trong TH này, danh sách được đặt là ['']
    tức là không có trường nào được bảo vệ (guarded)
    và cho phép cập nhật đầy đủ thông tin
    */

    protected $fillable = [
        'id',
        'name_category',
        'image',
        'description',
        'created_at',
        'updated_at',
    ];
    public function homes() {
        return $this->hasMany(Home::class,'id_category','id');
    }

    /*
    home() là phương thức định nghĩa mối quan hệ hasMany giữa
    Category và Home.
    mỗi đối tượng Category có nhiều đối tượng Home liên quan thông
    qua khóa ngoại id_category trong bảng home và khóa chính
    id trong bảng category
    */
}
