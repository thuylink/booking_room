@extends('layout')

@section('content')
<div>
    <h6>sau khi khách tìm nhà đăng nhập thành công, đi vào trang Trang Home dành cho khách thuê nhà. </h6>
    <h6>
        khách thuê nhà tìm kiếm phòng tại đây
    </h6>
</div>

@endsection
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
                            <a href="{{route('product.add')}}" class="btn btn-primary float-end">Thêm nhà</a>
                        </h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-stripped" >
                            <thead>
                                <th>Kiểu kiến trúc: </th>
                                <th>Ảnh nhà: </th>
                                <th>Ảnh 360: </th>
                                <th>Giá: </th>
                                <th>Thao tác: </th>

                            </thead>

                            <tbody>
                                @foreach ($products as $product)
                                    <tr>
                                        <td>{{$product->id_category}}</td>
                                        <td>
                                            @if ($product->image && is_string($product->image) && is_array(json_decode($product->image)))
                                                @foreach (json_decode($product->image) as $image)
                                                    <img src="{{asset('uploads/product/'.$image)}}"
                                                        alt=""
                                                        width="70px"
                                                        height="70px"
                                                        alt="Image">
                                                @endforeach
                                            @endif
                                        </td>

                                        <td>
                                            @if ($product->image360 && is_string($product->image360) && is_array(json_decode($product->image360)))
                                                @foreach (json_decode($product->image360) as $image360)
                                                    <img src="{{asset('uploads/product360/'.$image360)}}"
                                                        alt=""
                                                        width="70px"
                                                        height="70px"
                                                        alt="Image360">
                                                @endforeach
                                            @endif
                                        </td>
                                        <td>{{$product->price}}</td>

                                        <td>
                                            <a href="{{route('product.edit', ['id' => $product->id])}}" class="btn btn-primary">Edit</a>
                                            <a href="{{route('product.show', ['id' =>$product->id])}}" class="btn btn-danger">Show</a>
                                        </td>
                                        <td>
                                            <form action="{{ route('product.delete', ['id'=>$product->id])}}" method="post">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
