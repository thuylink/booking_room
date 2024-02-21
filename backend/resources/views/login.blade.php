{{-- @extends('layout')
@section('title', 'Đăng nhập cho khách thuê nhà')
@section('content')
    <div class="container">
        <h3>đây là trang đăng nhập views/login.blade/php</h3>
        <form action="{{route('login')}}" method="POST" class="ms-auto me-auto mt-auto" style="width:500px">
            @csrf
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" name="email">
              </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" name="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
@endsection --}}




@extends('layout')

@section('content')
<h3>đây là trang đăng nhập views/login.blade.php</h3>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Đăng nhập cho khách thuê nhà') }}</div>

                    <div class="card-body">
                        <form action="{{route('login')}}" method="POST" class="ms-auto me-auto mt-auto" style="width:500px">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email">
                        </div>
                        <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" name="password">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
