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


    <script>
        function previewImage(event) {
            var reader = new FileReader();
            reader.onload = function(){
                var output = document.getElementById('preview');
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    </script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                @if (session('status'))
                    <h5 class="alert alert-success">{{session('status')}}</h5>
                @endif
                <div class="card">
                    <div class="card-header">
                        <h3>Thêm danh mục
                                <a href="{{route('category.all')}}" class="btn btn-danger float-end">Quay lại
                                </a>
                        </h3>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('category.store')}}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group mb-3">
                                <label for="">Tên danh mục:</label>
                                <input type="text" name="name_category" id="" class="form-control">
                            </div>

                            {{-- upload 1 ảnh --}}
                            {{-- <div class="form-group mb-3">
                                <label for="">Ảnh danh mục:</label>
                                <input type="file" name="image" id="image" class="form-control" onchange="previewImage(event)">
                            </div> --}}

                            {{-- upload nhiều ảnh --}}
                            <div class="form-group mb-3">
                                <label for="">Ảnh danh mục:</label>
                                <input type="file" name="image[]" id="image" class="form-control" multiple onchange="previewImage(event)">
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Xem trước ảnh:</label>
                                <img id="preview" src="" alt="Preview Image" style="max-width: 200px;">
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Trạng thái</label>
                                <input type="text" name="status" id="" class="form-control">
                            </div>



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
