<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                @if (session('status'))
                    <h5 class="alert alert-success">{{ session('status') }}</h5>
                @endif
                <div class="card">
                    <div class="card-header">
                        <h3>Đặt phòng đi hí hí

                        </h3>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('booking.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <input type="hidden" name="id_user" value="2">
                            <input type="hidden" name="id_product" value="34">

                            <label for="start_date">Ngày nhận phòng:</label>
                            <input type="date" name="start_date" id="start_date" class="form-control">

                            <label for="end_date">Ngày trả phòng:</label>
                            <input type="date" name="end_date" id="end_date" class="form-control" required>

                            <label for="price">Giá phòng:</label>
                            <input type="text" name="price" id="price" class="form-control" required>

                            <label for="guest_number">Số lượng khách:</label>
                            <input type="text" name="guest_number" id="guest_number" class="form-control" required>

                            <label for="guest_name">Tên khách hàng:</label>
                            <input type="text" name="guest_name" id="guest_name" class="form-control" required>

                            <label for="phone">Số điện thoại:</label>
                            <input type="text" name="phone" id="phone" class="form-control" required>

                            <label for="email">Email:</label>
                            <input type="email" name="email" id="email" class="form-control" required>

                            <label for="message">Tin nhắn:</label>
                            <textarea name="message" id="message" class="form-control"></textarea>

                            <div class="form-group mb-3">
                                <button type="submit" class="btn btn-primary">
                                    Lưu
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
