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
            reader.onload = function() {
                var output = document.getElementById('preview');
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    </script>

    <script>
        function previewImage360(event) {
            var reader = new FileReader();
            reader.onload = function() {
                var output = document.getElementById('preview360');
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
                    <h5 class="alert alert-success">{{ session('status') }}</h5>
                @endif
                <div class="card">
                    <div class="card-header">
                        <h3>Chỉnh sửa danh mục
                            <a href="{{ route('category.all') }}" class="btn btn-danger float-end">Quay lại
                            </a>
                        </h3>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('category.update', ['id' => $category->id]) }}" method="POST"
                            enctype="multipart/form-data">
                            @csrf
                            <div class="form-group mb-3">
                                <label for="">Tên danh mục:</label>
                                <input type="text" name="name_category" id=""
                                    value="{{ $category->name_category }}" class="form-control">
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Ảnh danh mục:</label>
                                <input type="file" name="image" id="image" class="form-control"
                                    onchange="previewImage(event)">
                                <img src="{{ asset('uploads/category/' . $category->image) }}" width="70px"
                                    height="70px" alt="Ảnh hiển tại">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Xem trước ảnh mới:</label>
                                <img id="preview" src="{{ asset('uploads/category/' . $category->image) }}"
                                    alt="Preview Image" style="max-width: 200px;">
                            </div>


                            <div class="form-group mb-3">
                                <label for="">Ảnh 360 danh mục:</label>
                                <input type="file" name="image360" id="image360" class="form-control"
                                    onchange="previewImage360(event)">
                                <img src="{{ asset('uploads/category360/' . $category->image) }}" width="70px"
                                    height="70px" alt="Ảnh hiển tại">
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Xem trước ảnh360 mới:</label>
                                <img id="preview360" src="{{ asset('uploads/category360/' . $category->image360) }}"
                                    alt="Preview Image" style="max-width: 200px;">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Trạng thái</label>
                                <input type="text" name="status" id="" value="{{ $category->status }}"
                                    class="form-control">
                            </div>



                            <div class="form-group mb-3">
                                <button type="submit" class="btn btn-primary">
                                    Cập nhật
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
