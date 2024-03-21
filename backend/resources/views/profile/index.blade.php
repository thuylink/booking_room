<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3>LARAVEL CRUD Profile
                            {{-- <a href="{{ route('profile.add') }}" class="btn btn-primary float-end">Thêm danh mục</a> --}}
                        </h3>
                    </div>
                    @csrf
                    <div class="input-group input-group" style="width: 250px;">
                        <input type="text" name="search" class="form-control float-right" placeholder="Search"
                            value=" {{ isset($search) ? $search : ' ' }}">

                        <div class="input-group-append">
                            <button type="submit" class="btn btn-default" style="color: aqua">
                                <i class="fas fa-search" style="color: rgb(13, 17, 241)"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-stripped">
                            <thead>
                                <th>Email: </th>
                                <th>Username</th>
                                <th>Thao tác:</th>
                            </thead>
                            <tbody>
                                @foreach ($userss as $users)
                                    <tr>
                                        <td>{{ $users->email }}</td>
                                        <td>{{ $users->name }}</td>
                                        <td>
                                            <a href="{{ route('profile.edit', ['id' => $profile->id]) }}"
                                                class="btn btn-primary">Edit</a>
                                            <a href="{{ route('profile.show', ['id' => $profile->id]) }}"
                                                class="btn btn-danger">Show</a>
                                            <form action="{{ route('profile.delete', ['id' => $profile->id]) }}"
                                                method="post">
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
