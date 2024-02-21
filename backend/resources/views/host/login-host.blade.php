@extends('layout')
@section('title', 'Login')
@section('content')
    <div class="container">
        <h3>Đăng nhập cho chủ nhà tại vị trí host/login-host</h3>
        <form action="{{route('host.login-host')}}" method="POST" class="ms-auto me-auto mt-auto" style="width:500px">
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
@endsection
