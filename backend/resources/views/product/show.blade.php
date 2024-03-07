<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>
    <style>
        #panorama {
            width: 600px;
            height: 600px;
            image-rendering: crisp-edges;
    object-fit: cover;
        }
    </style>
</head>

<body>



    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3>LARAVEL CRUD Product
                            <a href="{{ route('product.all') }}" class="btn btn-primary float-end">Quay lại</a>
                        </h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-stripped">
                            <thead>
                                <th>Kiểu kiến trúc: </th>
                                <th>Phạm vi sử dụng: </th>
                                <th>Địa chỉ: </th>
                                <th>Sức chứa: </th>
                                <th>Tiện ích: </th>
                                <th>Ảnh: </th>
                                <th>Ảnh 360: </th>
                                <th>Tiêu đề: </th>
                                <th>Mô tả: </th>
                                <th>Chi phí: </th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{{ $product->id_category }}</td>
                                    <td>{{ $product->privacy_type }}</td>
                                    <td>{{ $product->location }}</td>
                                    <td>{{ $product->capacity }}</td>
                                    <td>{{ $product->amenities }}</td>
                                    <td>
                                        @if ($product->image && is_string($product->image) && is_array(json_decode($product->image)))
                                            @foreach (json_decode($product->image) as $image)
                                                <img src="{{ asset('uploads/product/' . $image) }}" alt=""
                                                    width="170px" height="170px" alt="Image">
                                            @endforeach
                                        @else
                                            <img src="{{ asset('uploads/product/' . $product->image) }}" alt=""
                                                width="170px" height="170px" alt="Image">
                                        @endif
                                    </td>

                                    <td>
                                        <div id="panorama"></div>
                                        <?php
                                        $image360 = $product->image360;

                                        if (isset($image360)) {
                                            $image360 = str_replace(['["', '"]', '&amp;quot;'], '', $image360);
                                        } else {
                                            $image360 = 'default.jpg';
                                        }
                                        ?>

                                        <script>
                                            pannellum.viewer('panorama', {
                                                "type": "equirectangular",
                                                "panorama": "{{ asset('uploads/product360/' . $image360) }}"
                                            });
                                        </script>
                                    </td>
                                    <td>{{ $product->title }}</td>
                                    <td>{{ $product->description }}</td>
                                    <td>{{ $product->price }}</td>
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
<style>
    #panorama {
    image-rendering: crisp-edges;
    object-fit: cover;

}
</style>
