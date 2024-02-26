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


        // if ($request->usertype == 0) {
        //     return redirect()->route('dashboard');
        // }
        // return redirect()->route('dashboard-host');


        // return response()->noContent();
    }





    public function login()
    {
        return view('login');
    }

    public function register()
    {
        return view('register');
    }

//     public function postRegister(Request $request)
//     {
//         $request->merge(['password' => Hash::make($request->password)]);
//         try {
//             User::create($request->all());
//         } catch (\Throwable $th) {
//             // dd($th);
//         }
//         return redirect()->route('login');
//     }

    public function postLogin(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return redirect()->route('customerhome');
        }
        return redirect()->back()->with('error','Sai mật khẩu hoặc email');
    }

//     public function logout()
//     {
//         Auth::logout();
//         return redirect()->back();
//     }




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
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return redirect()->route('hosthome');
        }
        return redirect()->back()->with('error','Sai mật khẩu hoặc email');
    }
}
