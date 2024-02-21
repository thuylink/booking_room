<!DOCTYPE html>
<html>
<head>
    <title>Đăng nhập</title>
</head>
<body>
    <h1>Đăng nhập</h1>
    <form method="POST" action="{{ route('login') }}">
        @csrf
        <!-- Các trường đăng nhập -->
    </form>
</body>
</html>
