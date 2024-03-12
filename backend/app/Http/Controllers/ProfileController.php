<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index() {
        $profile = Profile::paginate(5);
        return view('profile.index', compact('profile'));
    }

    public function show(string $id){
        $profile = Profile::find($id);
        return view('profile.show', ['profile'=>$profile]);
    }
}
