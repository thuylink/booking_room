<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return view('customer.customerhome');
    }

    public function indexHost()
    {
        return view('host.hosthome');
    }
}
