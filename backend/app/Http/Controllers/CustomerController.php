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




    public function update(Request $request)
{
    // dd($request->all());
    $customer = Profile::where('id_user', 2)->first();
    if ($request->isMethod('POST')) {
        if ($request->hasFile('image')) {
            // Xóa hình ảnh cũ
            $oldImage = 'uploads/avt/' .  $customer->image;
            if (File::exists($oldImage)) {
                File::delete($oldImage);
            }
            // Tải lên hình ảnh mới
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/avt', $filename);
            $request->merge(['image' => $filename]);
        } else {
            $filename = $customer->image;
        }
        // Cập nhật thông tin profile
        $profile = $customer->update([
            'name' => $request->name,
            'gender' => $request->gender,
            'birthday' => $request->birthday,
            'phone' => $request->phone,
            'address' => $request->address,
            'image' => $filename,
        ]);
        if ($profile) {
            // Trả về phản hồi JSON thành công
            return response()->json(['success' => true, 'message' => 'Cập nhật thông tin profile thành công']);
        } else {
            // Trả về phản hồi JSON thất bại
            return response()->json(['success' => false, 'message' => 'Cập nhật thông tin profile thất bại']);
        }
    }
}


    public function update_(Request $request)
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

        return response()->json($profile, 201);
        // } else {
    //     return response()->json(['status' => 'error', 'message' => 'Please log in to update your profile.']);
    // }
}


}
