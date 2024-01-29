<!DOCTYPE html>
<html lang="en">


<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->


<body>
    <div class="page-wrapper">
        <header class="header home">
            <div class="header-top bg-primary text-uppercase">
                <div class="container">
                    <div class="header-right header-dropdowns ml-0 ml-sm-auto">
                        <div class="header-dropdown dropdown-expanded mr-3">
                            <a href="#">Links</a>
                            <div class="header-menu">
                                <ul>
                                    <li><a href="{{route('logout')}}" >Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        <span class="separator"></span>
                    </div>
                </div>
            </div>

            <div class="header-middle text-dark sticky-header">
                <div class="container">
                    <div class="header-left col-lg-2 w-auto pl-0">
                        <button class="mobile-menu-toggler mr-2" type="button">
                            <i class="fas fa-bars"></i>
                        </button>
                        <a href="demo1.html" class="logo">
                            <img src="{{asset('fe-asset')}}/assets//images/logo.png" width="111" height="44" alt="Porto Logo">
                        </a>
                    </div>

                    <div class="header-right w-lg-max pl-2">
                        @if(Auth::check())
                            <a href="" class="header-icon header-icon-user"><i class="icon-user-2"></i>{{Auth::user()->name}}</a>
                        @else
                        <a href="{{route('login')}}" class="header-icon header-icon-user"><i class="icon-user-2"></i>Login</a>
                        @endif
                    </div>
                </div>
            </div>
        </header>
    </div>
    <div class="mobile-menu-overlay"></div>




</body>


</html>
