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
use App\Http\Requests\CustomerRequest;
use App\Services\CustomerService;

class CustomerController extends Controller
{

    protected $customerService;

    public function __construct(CustomerService $customerService)
    {
        $this->customerService = $customerService;
    }

    public function store(CustomerRequest $request)
    {
        try {
            $profile = $this->customerService->createProfile($request);
            return response()->json([
                'status' => 'Tạo mới thông tin cá nhân thành công',
                'profile' => $profile
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'Tạo mới thông tin cá nhân thất bại',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function showProfile()
    {
        $userId = auth()->id();
        $profile = Profile::where('id_user', $userId)->first();

        if (!$profile) {
            return response()->json(['error' => 'không tìm thấy profile'], 404);
        }
        return response()->json([$profile]);
    }


    public function update(Request $request)
    {
        try {
            $profile = $this->customerService->updateProfile($request);

            if ($profile) {
                return response()->json(['success' => true, 'message' => 'Cập nhật thông tin profile thành công']);
            } else {
                return response()->json(['success' => false, 'message' => 'Cập nhật thông tin profile thất bại']);
            }
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Cập nhật thông tin profile thất bại', 'error' => $e->getMessage()], 500);
        }
    }





}






//   public function update_(Request $request)
// {
//     var_dump($request->all());
//     // if (auth()->check()) {
//         $user = auth()->user();

//         $request->validate([
//             'name' => 'required|string',
//             'gender' => 'required|string',
//             'birthday' => 'required|string',
//             'phone' => 'required|string',
//             'address' => 'required|string',
//             'image' => 'nullable|image',
//         ]);

//         // Lấy thông tin từ hồ sơ cần cập nhật
//         $profile = $user->profile;

//         if ($request->hasFile('image')) {
//             $image = $request->file('image');
//             $extension = $image->getClientOriginalExtension();
//             $imageName = time() . '_' . uniqid() . '.' . $extension;
//             $image->move('uploads/avt', $imageName);
//             $profile->image = $imageName;
//         }

//         // Cập nhật thông tin
//         $profile->name = $request->input('name');
//         $profile->gender = $request->input('gender');
//         $profile->birthday = $request->input('birthday');
//         $profile->phone = $request->input('phone');
//         $profile->address = $request->input('address');

//         $profile->save();

//         return response()->json($profile, 201);
//         // } else {
//     //     return response()->json(['status' => 'error', 'message' => 'Please log in to update your profile.']);
//     // }
// }

// public function add(Request $request)
//     {
//         return view('profile.add');
//     }

//     public function edit(Request $request)
//     {
//         return view('profile.edit');
    // }
    // public function store(Request $request)
    // {
    //     if (auth()->check()) {
    //         $user = auth()->user();
    //         $validatedData = $request->validate([
    //             'id_user' => 'required|integer',
    //             'name' => 'required|string',
    //             'gender' => 'required|string',
    //             'birthday' => 'required|string',
    //             'phone' => 'required|string',
    //             'address' => 'required|string',
    //             'image' => 'nullable|image',
    //         ]);

    //         $existingProfile = Profile::where('id_user', $validatedData['id_user'])->first();

    //         if ($existingProfile) {
    //             return response()->json(['message' => 'Người dùng đã tạo mới profile trước đó.'], 400);
    //         }

            // if ($request->hasFile('image')) {
            //     $image = $request->file('image');
            //     $extension = $image->getClientOriginalExtension();
            //     $imageName = time() . '_' . uniqid() . '.' . $extension;
            //     $image->move('uploads/avt/', $imageName);
            //     $validatedData['image'] = $imageName;
            // } else {
            //     $validatedData['image'] = null;
            // }

    //         $profile = new Profile();
    //         $profile->id_user = $validatedData['id_user']; // Sử dụng id_user của người dùng đã đăng nhập
    //         $profile->name = $validatedData['name'];
    //         $profile->gender = $validatedData['gender'];
    //         $profile->birthday = $validatedData['birthday'];
    //         $profile->phone = $validatedData['phone'];
    //         $profile->address = $validatedData['address'];
    //         $profile->image = $validatedData['image'];
    //         $profile->save();

    //         return response()->json($profile, 201);
    //     }
    //     return response()->json(['status' => 'error', 'message' => 'Đăng nhập để tạo mới thông tin cá nhân']);
    // }
