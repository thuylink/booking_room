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
    <form method="post" action="{{ route('cart.add') }}">
        @csrf

        <button type="submit" class="btn btn-primary">
            <input type="hidden" name="id_product" value="{{ $product->id }}">

            {{-- {{var_dump($product->id)}} --}}

            {{-- <input type="hidden" name="price"> --}}
            <i class="fa fa-shopping-cart"></i>
            Thêm vào giỏ hàng
        </button>

    </form>
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
                        <h1>Đánh giá</h1>
                        <div class="card">
                            <div class="row">
                                <div class="col-2">
                                    <img src="https://i.imgur.com/xELPaag.jpg" width="70" class="rounded-circle mt-2">
                                </div>
                                <div class="col-10">
                                    <div class="comment-box ml-2">
                                        <h4>Add a comment</h4>
                                        <form id="ratingForm" method="post" action="{{ route('rating.add') }}">
                                            @csrf
                                            <input type="hidden" name="id_user" value="2">
                                            <input type="hidden" name="id_product" value="{{ $product->id }}">
                                            <div class="rating">
                                                <input type="radio" name="star" value="5" id="star5"><label for="star5">☆</label>
                                                <input type="radio" name="star" value="4" id="star4"><label for="star4">☆</label>
                                                <input type="radio" name="star" value="3" id="star3"><label for="star3">☆</label>
                                                <input type="radio" name="star" value="2" id="star2"><label for="star2">☆</label>
                                                <input type="radio" name="star" value="1" id="star1"><label for="star1">☆</label>
                                            </div>
                                            <div class="comment-area">
                                                <textarea name="cmt" class="form-control" placeholder="what is your view?" rows="4"></textarea>
                                            </div>
                                            <div class="comment-btns mt-2">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="pull-left">
                                                            <button type="submit" class="btn btn-success btn-sm" onclick="cancel()">Cancel</button>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="pull-right">
                                                            <button type="submit" class="btn btn-success send btn-sm" onclick="sendRating()">Send <i class="fa fa-long-arrow-right ml-1"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

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


<style>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap');

    html,
    body {
        height: 100%
    }

    body {
        display: grid;
        place-items: center;
        font-family: 'Manrope', sans-serif;
        background: red;

    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        padding: 20px;
        width: 450px;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border-radius: 6px;
        -moz-box-shadow: 0px 0px 5px 0px rgba(212, 182, 212, 1)
    }

    .comment-box {

        padding: 5px;
    }



    .comment-area textarea {
        resize: none;
        border: 1px solid #ad9f9f;
    }


    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #ffffff;
        outline: 0;
        box-shadow: 0 0 0 1px rgb(255, 0, 0) !important;
    }

    .send {
        color: #fff;
        background-color: #ff0000;
        border-color: #ff0000;
    }

    .send:hover {
        color: #fff;
        background-color: #f50202;
        border-color: #f50202;
    }


    .rating {
        display: flex;
        margin-top: -10px;
        flex-direction: row-reverse;
        margin-left: -4px;
        float: left;
    }

    .rating>input {
        display: none
    }

    .rating>label {
        position: relative;
        width: 19px;
        font-size: 25px;
        color: #ff0000;
        cursor: pointer;
    }

    .rating>label::before {
        content: "\2605";
        position: absolute;
        opacity: 0
    }

    .rating>label:hover:before,
    .rating>label:hover~label:before {
        opacity: 1 !important
    }

    .rating>input:checked~label:before {
        opacity: 1
    }

    .rating:hover>input:checked~label:before {
        opacity: 0.4
    }
</style>


