<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chatting extends Model
{
    use HasFactory;
    protected $table = 'chatting';

    protected $fillable = [
        'sender_id',
        'receiver_id',
        'content',
    ];
}
