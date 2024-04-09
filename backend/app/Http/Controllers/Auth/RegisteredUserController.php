<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Middleware\MiddleWareCheckUserType;


class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        // var_dump($request->usertype);die;
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'usertype' => $request->usertype,
        ]);

        // event(new Registered($user));

        // Auth::login($user);


        if ($request->usertype == 0) {
            return redirect()->route('login');
        }
        return redirect()->route('host.login-host');
    }

    public function login()
    {
        return view('login');
    }

    public function register()
    {
        return view('register');
    }


public function postLogin(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $user = Auth::user();

        if ($user->usertype == 1) {
            Auth::logout(); // Đăng xuất người dùng
            abort(403); // Từ chối đăng nhập

        }

        // var_dump($user->usertype);

        // Đăng nhập thành công, thực hiện hành động tiếp theo
        // return redirect()->route('customerhome');
    }

    // Đăng nhập không thành công
    // return redirect()->back()->with('error', 'Sai mật khẩu hoặc email');
}

    public function loginHost()
    {
        return view('host.login-host');
    }

    public function registerHost()
    {
        return view('host.register-host');
    }
//     public function postRegisterHost(Request $request)
//     {
//         $request->merge(['password' => Hash::make($request->password)]);
//         try {
//             User::create($request->all());
//         } catch (\Throwable $th) {
//             // dd($th);
//         }
//         return redirect()->route('host.login-host');
//     }

public function postLoginHost(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $user = Auth::user();

        if ($user->usertype == 0) {
            Auth::logout(); // Đăng xuất người dùng
            abort(403);
            // return redirect()->route('login')->with('error', 'Không thể đăng nhập'); // Chuyển hướng và truyền thông báo
        }

        // Đăng nhập thành công, thực hiện hành động tiếp theo
        // return redirect()->route('customerhome');
    }

    // return redirect()->route('login')->with('error', 'Sai mật khẩu hoặc email'); // Chuyển hướng và truyền thông báo
}

public function index() {
    $users = User::all();
    return response()->json($users);
}


}
