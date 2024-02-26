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
                        <h3>LARAVEL CRUD Category
                            <a href="{{route('category.add')}}" class="btn btn-primary float-end">Thêm danh mục</a>
                        </h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-stripped" >
                            <thead>
                                <th>Tên danh mục: </th>
                                <th>Ảnh danh mục: </th>
                                <th>Trạng thái: </th>
                                <th>Thao tác: </th>

                            </thead>

                            <tbody>
                                @foreach ($categories as $category)
                                    <tr>
                                        <td>{{$category->name_category}}</td>
                                        <td><img src="{{asset('uploads/category/'.$category->image)}}"
                                            alt=""
                                            width="70px"
                                            height="70px"
                                            alt="Image"></td>
                                        <td>{{$category->status}}</td>
                                        <td>
                                            <a href="{{route('category.edit', ['id' => $category->id])}}" class="btn btn-primary">Edit</a>
                                            {{-- <a href="{{route('category.delete', ['id' =>$category->id])}}" class="btn btn-danger">Delete</a> --}}
                                        </td>
                                        <td>
                                            <a href="{{route('category.show', ['id' =>$category->id])}}" class="btn btn-danger">Show</a>

                                        </td>
                                        <td>
                                            <form action="{{ route('category.delete', ['id'=>$category->id])}}" method="post">
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
