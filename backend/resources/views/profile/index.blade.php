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
                <div class="card">
                    <div class="card-header">
                        <h3>Tài khoản của tôi
                        </h3>
                    </div>

                    <div class="card-body">
                        <table class="table table-stripped">

                            <tbody>
                                <div class="column main">
                                    <div class="block-title">
                                        <strong>Thông tin tài khoản</strong>
                                    </div>
                                    <div class="block-content">
                                        <div class="account-form form-wrap">
                                            <?php $getInfo = \App\Models\User::where('id', 5)->first(); ?>
                                            {{-- @php
                                                dd($getInfo);
                                            @endphp --}}

                                            <div class="row mb-4">
                                                <div class="col-md-3 col-xs-6">
                                                    {{-- <img src="{{ url('public/upload/avt') . '/' . $getInfo->image }}"
                                                         alt="" style="max-width: 100%; padding: 0px 20px 20px 0;"> --}}
                                                </div>
                                                <div class="col-md-9 col-xs-6">
                                                <div class="row">
                                                <div class="form-group col-xs-12 col-md-6">
                                                    <label>Họ tên</label>
                                                    <div class="data">{{ $getInfo->name }}</div>
                                                </div>
                                                <div class="form-group col-xs-12 col-md-6">
                                                    <label>Số điện thoại</label>
                                                    <div class="data">{{ $getInfo->phone }}</div>
                                                </div>
                                                <div class="form-group col-xs-12 col-md-6">
                                                    <label>Email</label>
                                                    {{-- <?php $user = 5 ?> --}}
                                                    <div class="data">{{ $getInfo->email }}</div>
                                                </div>
                                                <div class="form-group col-xs-12 col-md-6">
                                                    <label>Giới tính</label>
                                                    <div class="data">{{ $getInfo->gender }}</div>
                                                </div>
                                                <div class="form-group col-xs-12 col-md-6">
                                                    <label>Ngày sinh</label>
                                                    <div class="data">{{ $getInfo->birthday }}</div>
                                                </div>

                                                <div class="form-group col-xs-12 col-md-6">
                                                    <label>Địa chỉ</label>
                                                    <div class="data">{{ $getInfo->address }}</div>
                                                </div>

                                                <div class="btn-edit">

                                                    <a href="{{ route('profile.edit')}}"
                                                        class="btn btn-primary">Edit</a>

                                                </div>
                                            </div>
                                            </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
