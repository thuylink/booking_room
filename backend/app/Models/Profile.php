<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $table = 'profile';
    public $timestamps = true;
    protected $fillable = [
        'name',
        'gender',
        'birthday',
        'phone',
        'address',
        'id_user',
        'image',
        // 'education',
        // 'job',
        // 'language'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'id_user');
    }
}
