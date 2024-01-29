<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeMainController extends Controller
{
    public function index() {
        return view('fe.home');
    }
}
