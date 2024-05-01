<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index() {
        $profiles = Profile::paginate(5);
        return view('profile.index', compact('profiles'));
    }

    public function show(string $id){
        $profile = Profile::find($id);
        return view('profile.show', ['profile'=>$profile]);
    }
}
