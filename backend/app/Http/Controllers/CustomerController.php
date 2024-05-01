<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class CustomerController extends Controller
{

    public function add(Request $request)
    {
        return view('profile.add');
    }

    public function edit(Request $request)
    {
        return view('profile.edit');
    }



    public function showProfile()
    {
        $userId = auth()->id();
        $profile = Profile::where('id_user', $userId)->first();
        // $profile = Profile::where('id_user', 2);

        if (!$profile) {
            return response()->json(['error' => 'không tìm thấy profile'], 404);
        }
        return response()->json([$profile]);
    }

    //     public function store(Request $request)
// {
//     if (auth()->check()) {
//         $user = auth()->user();
//         $validatedData = $request->validate([
//             'name' => 'required|string',
//             'gender' => 'required|string',
//             'birthday' => 'required|date',
//             'phone' => 'required|string',
//             'address' => 'required|string',
//             'image' => 'nullable|image', // Thêm nullable ở đây để cho phép trường image có thể là null
//         ]);

    //         // Kiểm tra xem có ảnh được tải lên hay không
//         if ($request->hasFile('image')) {
//             $image = $request->file('image');
//             $extension = $image->getClientOriginalExtension();
//             $imageName = time() . '_' . uniqid() . '.' . $extension;
//             $image->move('uploads/avt/', $imageName);
//             $validatedData['image'] = $imageName;
//         } else {
//             // Nếu không có ảnh, trường image sẽ là null
//             $validatedData['image'] = null;
//         }

    //         // Tạo mới profile với dữ liệu đã xác nhận
//         $profile = Profile::create($validatedData);

    //         // Trả về phản hồi JSON với thông tin profile đã tạo
//         return response()->json([
//             'status' => 'Tạo mới danh mục thành công',
//             'profile' => $profile
//         ], 201);
//     } else {
//         // Trả về phản hồi JSON nếu người dùng chưa đăng nhập
//         return response()->json(['status' => 'error', 'message' => 'Đăng nhập để tạo mới thông tin cá nhân']);
//     }
// }


    public function store(Request $request)
    {
        // Kiểm tra xem người dùng đã đăng nhập chưa
        if (auth()->check()) {
            $user = auth()->user();
            $validatedData = $request->validate([
                'id_user' => 'required|integer',
                'name' => 'required|string',
                'gender' => 'required|string',
                'birthday' => 'required|string',
                'phone' => 'required|string',
                'address' => 'required|string',
                'image' => 'nullable|image',
            ]);

            // Lấy id_user của người dùng đang đăng nhập
            // $id_user = auth()->id();

            // Kiểm tra xem đã tồn tại profile cho người dùng này chưa
            $existingProfile = Profile::where('id_user', $validatedData['id_user'])->first();

            if ($existingProfile) {
                return response()->json(['message' => 'Người dùng đã tạo mới profile trước đó.'], 400);
            }

            if ($request->hasFile('image')) {
                // Xử lý và lưu trữ ảnh
                $image = $request->file('image');
                $extension = $image->getClientOriginalExtension();
                $imageName = time() . '_' . uniqid() . '.' . $extension;
                $image->move('uploads/avt/', $imageName);
                $validatedData['image'] = $imageName;
            } else {
                $validatedData['image'] = null;
            }

            // Tạo mới profile cho người dùng
            $profile = new Profile();
            $profile->id_user = $validatedData['id_user']; // Sử dụng id_user của người dùng đã đăng nhập
            $profile->name = $validatedData['name'];
            $profile->gender = $validatedData['gender'];
            $profile->birthday = $validatedData['birthday'];
            $profile->phone = $validatedData['phone'];
            $profile->address = $validatedData['address'];
            $profile->image = $validatedData['image'];
            $profile->save();

            return response()->json($profile, 201);
        }


        // Nếu người dùng chưa đăng nhập, trả về thông báo lỗi
        return response()->json(['status' => 'error', 'message' => 'Đăng nhập để tạo mới thông tin cá nhân']);
    }




    // public function update_(Request $request)
    // {
    //     var_dump($request->all());

    //     $customer = Profile::where('id_user', Auth::user()->id)->get()->first();

    //     if ($request->isMethod('POST')) {
    //         if ($request->has('file_upload')) {
    //             if ($customer->image != 'no-image.jpg') {
    //                 $oldFile = public_path('public/avt') . '/' . $customer->image;
    //                 if (File::exists($oldFile)) {
    //                     File::delete($oldFile);
    //                 }
    //             }
    //             $file = $request->file('file_upload');
    //             $file_name = time() . '_' . $file->getClientOriginalName();
    //             $file->move(public_path('public/uploads/avt'), $file_name);
    //             $request->merge(['image' => $file_name]);
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
    //         ]);
    //         if ($profile) {
    //             return redirect()->route('user.user_account')->with('success', 'Cập nhật thành công');
    //         }
    //     }
    //     return view('frontend.user.user_account_update', compact('customer'));
    // }

    public function update(Request $request)
{
    var_dump($request->all());
    // if (auth()->check()) {
        $user = auth()->user();

        $request->validate([
            'name' => 'required|string',
            'gender' => 'required|string',
            'birthday' => 'required|string',
            'phone' => 'required|string',
            'address' => 'required|string',
            'image' => 'nullable|image',
        ]);

        // Lấy thông tin từ hồ sơ cần cập nhật
        $profile = $user->profile;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $imageName = time() . '_' . uniqid() . '.' . $extension;
            $image->move('uploads/avt', $imageName);
            $profile->image = $imageName;
        }

        // Cập nhật thông tin
        $profile->name = $request->input('name');
        $profile->gender = $request->input('gender');
        $profile->birthday = $request->input('birthday');
        $profile->phone = $request->input('phone');
        $profile->address = $request->input('address');

        $profile->save();

        return response()->json(['status' => 'profile-updated']);
    // } else {
    //     return response()->json(['status' => 'error', 'message' => 'Please log in to update your profile.']);
    // }
}


}
