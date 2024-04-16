<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function index()
    {
        $users = User::paginate(5);
        return response()->json($users);
    }

    public function store(Request $request)
{
    if ($request->isMethod('POST')) {
        $validated = $request->validate([
            'name' => 'required|unique:users',
            'email' => 'required|unique:users|email',
            'password' => 'required',
        ]);

        $user = User::create($request->all());

        // Trả về dữ liệu người dùng mới tạo dưới dạng JSON
        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
        ], 201); // Mã trạng thái 201 là "Created"
    }

    // Nếu không phải phương thức POST, trả về view create-user
    return response()->json([
        'message' => 'Method not allowed'
    ], 405); // Mã trạng thái 405 là "Method Not Allowed"
}

    public function show(string $id)
    {
        $user_item = User::find($id);
        return view('admin.user.user-detail', compact('user_item'));
    }

    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        if ($request->isMethod('POST')) {
            $validator = Validator::make($request->all(), [
                'name' => [
                    'required',
                    'string',
                    Rule::unique('users')->ignore($id),
                ],
                'email' => [
                    'required',
                    'email',
                    Rule::unique('users')->ignore($id),
                ],
            ]);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }
            $result = $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            if ($result) {
                return redirect()->route('admin.user.users')->with('success', 'Cập nhật tài khoản thành công');
            }
        }
        return view('admin.user.user-update', compact('user'));
    }
}
