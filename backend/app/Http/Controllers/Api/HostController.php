<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HostController extends Controller
{
    public function registerHost() {
        return view('host.register-host');
    }

    public function loginHost() {
        return view('host.login-host');
    }
}
