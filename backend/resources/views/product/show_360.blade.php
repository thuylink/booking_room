@extends('layouts.app')

@section('content')
    <h1>Thông tin sản phẩm</h1>

    <div>
        <h2>Tiêu đề: {{ $product->title }}</h2>
        <!-- Hiển thị các thông tin khác của sản phẩm -->
        <!-- ... -->
    </div>

    <h2>Ảnh 360 độ</h2>
    <div id="image360Container"></div>

    <script>
        // Dùng một thư viện JavaScript để hiển thị ảnh 360 độ
        // Ví dụ: Three.js, A-Frame, hoặc một thư viện khác
        // Đặt mã JavaScript tại đây để tạo và hiển thị ảnh 360 độ
    </script>
@endsection
