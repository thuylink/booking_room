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
                @if (session('status'))
                    <h5 class="alert alert-success">{{session('status')}}</h5>
                @endif
                <div class="card">
                    <div class="card-header">
                        <h3>Chỉnh sửa nhà
                                <a href="{{route('product.all')}}" class="btn btn-danger float-end">Quay lại
                                </a>
                        </h3>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('product.update', ['id'=>$product->id]) }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group mb-3">
                                <label for="">Loại kiến trúc:</label>
                                <select name="id_category" id="id_category" class="form-control">
                                    <?php $categories = App\Models\Category::where('status',1)->get();?>
                                    @foreach ($categories as $category)
                                        <option value="{{$category->id}}">{{$category->name_category}}</option>
                                    @endforeach
                                </select>
                            </div>

                            {{-- <div class="form-group mb-3">
                                <label for="">Quyền riêng tư, khách có thể sử dụng:</label>
                                <div>
                                    <label for="">
                                        <input type="radio" name="privacy_type" value="toan_bo_can_nha">
                                        Toàn bộ căn nhà
                                    </label>
                                </div>

                                <div>
                                    <label for="">
                                        <input type="radio" name="privacy_type" value="mot_can_phong">
                                        Một căn phòng
                                    </label>
                                </div>

                                <div>
                                    <label for="">
                                        <input type="radio" name="privacy_type" value="phong_chung">
                                        Phòng chung
                                    </label>
                                </div>
                            </div> --}}

                            <div class="form-group mb-3">
                                <label for="">Quyền riêng tư, khách có thể sử dụng:</label>
                                <div>
                                    <label for="">
                                        <input type="radio" name="privacy_type" value="toan_bo_can_nha">
                                        Toàn bộ căn nhà
                                    </label>
                                </div>

                                <div>
                                    <label for="">
                                        <input type="radio" name="privacy_type" value="mot_can_phong">
                                        Một căn phòng
                                    </label>
                                </div>

                                <div>
                                    <label for="">
                                        <input type="radio" name="privacy_type" value="phong_chung">
                                        Phòng chung
                                    </label>
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Địa chỉ:</label>
                                <input type="text" name="location" id="" class="form-control">
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Sức chứa:</label>
                                <input type="number" name="capacity" id="" class="form-control">
                                {{-- <div class="capacity-item">
                                    <label for="guests">Khách:</label>
                                    <div class="counter">
                                        <button class="minus">-</button>
                                        <input type="text" id="guests" value="1">
                                        <button class="plus">+</button>
                                    </div>
                                </div>
                                <div class="capacity-item">
                                    <label for="bedrooms">Phòng ngủ:</label>
                                    <div class="counter">
                                        <button class="minus">-</button>
                                        <input type="text" id="bedrooms" value="1">
                                        <button class="plus">+</button>
                                    </div>
                                </div>
                                <div class="capacity-item">
                                    <label for="beds">Giường:</label>
                                    <div class="counter">
                                        <button class="minus">-</button>
                                        <input type="text" id="beds" value="1">
                                        <button class="plus">+</button>
                                    </div>
                                </div> --}}
                            </div>

                            {{-- <div class="form-group mb-3">
                                <label for="">Tiện ích:</label>
                                <input type="number" name="price" id="" class="form-control">
                            </div> --}}

                            <div class="form-group mb-3">
                                <label for="">Tiện ích:</label>
                                <ul id="amenities-list">
                                    <li>
                                        <label for="amenity1">
                                            <input type="checkbox" id="" name="amenities" value="amenity1">
                                            Wifi
                                        </label>
                                    </li>
                                    <li>
                                        <label for="amenity2">
                                            <input type="checkbox" id="" name="amenities" value="amenity2">
                                            Bếp
                                        </label>
                                    </li>
                                    <li>
                                        <label for="amenity3">
                                            <input type="checkbox" id="" name="amenities" value="amenity3">
                                            TV
                                        </label>
                                    </li>
                                    <li>
                                        <label for="amenity3">
                                            <input type="checkbox" id="" name="amenities" value="amenity3">
                                            Máy giặt
                                        </label>
                                    </li>
                                    <li>
                                        <label for="amenity3">
                                            <input type="checkbox" id="" name="amenities" value="amenity3">
                                            Nơi để xe miễn phí
                                        </label>
                                    </li>
                                    <li>
                                        <label for="amenity3">
                                            <input type="checkbox" id="" name="amenities" value="amenity3">
                                            Điều hòa
                                        </label>
                                    </li>
                                    <li>
                                        <label for="amenity3">
                                            <input type="checkbox" id="" name="amenities" value="amenity3">
                                            Bể bơi
                                        </label>
                                    </li>
                                </ul>
                            </div>


                            <div class="form-group mb-3">
                                <label for="">Ảnh nhà:</label>
                                <input type="file" name="image" id="" class="form-control">
                                <img src="{{asset('uploads/product/'.$product->image)}}"
                                    width="70px"
                                            height="70px"
                                            alt="Image">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Tiêu đề:</label>
                                <input type="text" name="title" id="" class="form-control">
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Mô tả:</label>
                                <input type="text" name="description" id="" class="form-control">
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Giá tiền:</label>
                                <input type="number" name="price" id="" class="form-control">
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
