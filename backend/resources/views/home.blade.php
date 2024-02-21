<!DOCTYPE html>
<html>
<head>
    <title>Trang chủ</title>
</head>
<body>
    <h1>Chào mừng đến với trang chủ!</h1>

    <div>
        <h2>Nếu là người đi thuê nhà </h2>
        <a class="button" href="{{route('register')}}">Đăng ký</a>

        <a class="button" href="{{route('login')}}">Đăng nhập</a>

    </div>

    <div>
        <h2>Nếu là chủ nhà</h2>
        <a class="button" href="{{route('host')}}">Cho thuê nhà</a>

    </div>


    @yield('content')
</body>

</html>
