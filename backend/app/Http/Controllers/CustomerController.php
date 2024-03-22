<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Profile;
use Illuminate\Support\Facades\File;
use App\Models\Product;


class CustomerController extends Controller
{
    // public function showProfile() {
    //     if (Auth::check()) {
    //         return view('frontend.user.user_account');
    //     }
    //     return redirect('template');
    // }

    // public function edit(Request $request) {
    //     $customer = Profile::where('id_user', Auth::user()->id)->get()->first();
    //     if ($request->isMethod('POST')) {
    //         if ($request->has('file_upload')) {
    //             if ($customer->image != 'no-image.jpg') {
    //                 $oldFile = public_path('uploads/avatar').'/'.$customer->image;
    //                 if (File::exists($oldFile)) {
    //                     File::delete($oldFile);
    //                 }
    //             }
    //             $file = $request->file('file_upload');
    //             $file_name = time() . '_' . $file->getClientOriginalName();
    //             $file->move(public_path('uploads/avatar'), $file_name);
    //             $request->merge(['image'=>$file_name]);
    //         } else {
    //             $file_name = $customer->image;
    //             $request->merge(['image' => $file_name]);
    //         }
    //         $profile = $customer->update([
    //             'id_user' => Auth::user()->id,
    //             'name' => $request->name,
    //             'gender' => $request->gender,
    //             'birthday' => $request->birthday,
    //             'phone' => $request->phone,
    //             'address' => $request->address,
    //             'image' => $file_name,
    //             'education' => $request->education,
    //             'job' => $request->job,
    //             'language' => $request->language,
    //         ]);
    //         if ($profile) {
    //             return redirect()->route('user.user_account')->with('success','Cập nhật thành công');
    //         }
    //     }
    //     return view('frontend.user.user_account_update');
    // }

    public function detail($id) {
        $product = Product::find($id);
        return view('customer.customerhome', compact('product'));
    }
}
