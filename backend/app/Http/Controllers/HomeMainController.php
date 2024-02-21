<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class HomeMainController extends Controller
{
    public function index() {
        // return view('home');
        $data = User::all();
        return view("home",compact('data'));

    }

    public function index_host() {
        // return view('home');
        $data = User::all();
        return view("host",compact('data'));

    }

    public function redirects() {
        $data = User::all();
        $usertype = Auth()->user()->usertype;
        if ($usertype == '1') {
            return view('customer.customerhome');
        } else {
            return view('home', compact('data'));
        }
    }
}
