<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3>LARAVEL CRUD Product
                            <a href="{{route('category.all')}}" class="btn btn-primary float-end">Quay lại</a>
                        </h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-stripped">
                            <thead>
                                <th>Tên danh mục: </th>
                                <th>Ảnh: </th>
                                <th>Ảnh 360: </th>
                                <th>Trạng thái: </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{$category->name_category}}</td>
                                    <td>
                                        @if ($category->image && is_string($category->image) && is_array(json_decode($category->image)))
                                            @foreach (json_decode($category->image) as $image)
                                                <img src="{{asset('uploads/category/'.$image)}}"
                                                    alt=""
                                                    width="70px"
                                                    height="70px"
                                                    alt="Image">
                                            @endforeach
                                        @else
                                            <img src="{{asset('uploads/category/'.$category->image)}}"
                                                alt=""
                                                width="70px"
                                                height="70px"
                                                alt="Image">
                                        @endif
                                    </td>

                                    <td>
                                        @if ($category->image360 && is_string($category->image360) && is_array(json_decode($category->image360)))
                                            @foreach (json_decode($category->image360) as $image360)
                                                <img src="{{asset('uploads/category360/'.$image360)}}"
                                                    alt=""
                                                    width="70px"
                                                    height="70px"
                                                    alt="Image360">
                                            @endforeach
                                        @else
                                            <img src="{{asset('uploads/category360/'.$category->image360)}}"
                                                alt=""
                                                width="70px"
                                                height="70px"
                                                alt="Image360">
                                        @endif
                                    </td>

                                    <td>{{$category->status}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
