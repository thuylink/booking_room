<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function getLoginInfo()
    {
        $message = urlencode('Please log in to verify your email.');
        $redirectUrl = "http://localhost:3000/login?message=$message";
        Log::debug('Verification URL: chưa verify');
        echo "<script>
            setTimeout(function() {
                alert('Please login and click once again on the email address link you provided during registration to verify your email.');
                window.location.href = '$redirectUrl';
            }, 3000); // 5 seconds delay
        </script>";

        exit();
    }

    /*hàm sau dùng để xử lý yêu cầu đăng nhập của người dùng
        - gọi authenticate() để xác thực thông tin đăng nhập
    */
    public function store(LoginRequest $request): Response
    {
        $request->authenticate();

        $request->session()->regenerate();

        return response()->noContent();
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
