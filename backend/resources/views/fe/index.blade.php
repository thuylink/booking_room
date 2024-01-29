<!DOCTYPE html>
<html lang="en">


<!-- Mirrored from portotheme.com/html/porto_ecommerce/demo8.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 27 Jan 2024 11:56:33 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Porto - Bootstrap eCommerce Template</title>

    <meta name="keywords" content="HTML5 Template" />
    <meta name="description" content="Porto - Bootstrap eCommerce Template">
    <meta name="author" content="SW-THEMES">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{asset('fe-asset')}}/assets/images/icons/favicon.png">

    <script>
        WebFontConfig = {
            google: {
                families: ['Open+Sans:300,400,600,700,800', 'Poppins:300,400,500,600,700']
            }
        };
        (function(d) {
            var wf = d.createElement('script'),
                s = d.scripts[0];
            wf.src = '{{asset('fe-asset')}}/assets/js/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
        })(document);
    </script>

    <!-- Plugins CSS File -->
    <link rel="stylesheet" href="{{asset('fe-asset')}}/assets/css/bootstrap.min.css">

    <!-- Main CSS File -->
    <link rel="stylesheet" href="{{asset('fe-asset')}}/assets/css/demo8.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('fe-asset')}}/assets/css/animate.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('fe-asset')}}/assets/vendor/fontawesome-free/css/all.min.css">
</head>

<body>
    <div class="page-wrapper">
        <header class="header">
            <div class="pre-header">
                <div>
                    <div class="container">
                        Get Up to <b>40% OFF</b> New Furniture Deals <small>* Limited time only.</small>
                    </div>
                    <button class="mfp-close"></button>
                </div>
            </div>

            <div class="header-top">
                <div class="header-row container">
                    <div class="header-left">
                        <div class="header-dropdown">
                            <a href="#" class="pl-0">USD</a>
                            <div class="header-menu">
                                <ul>
                                    <li><a href="#">EUR</a></li>
                                    <li><a href="#">USD</a></li>
                                </ul>
                            </div>
                            <!-- End .header-menu -->
                        </div>

                        <div class="header-dropdown mr-auto mr-sm-3 mr-md-0">
                            <a href="#"><i class="flag-us flag"></i>ENG</a>
                            <div class="header-menu">
                                <ul>
                                    <li><a href="#"><i class="flag-us flag mr-2"></i>ENG</a>
                                    </li>
                                    <li><a href="#"><i class="flag-fr flag mr-2"></i>FRA</a></li>
                                </ul>
                            </div>
                            <!-- End .header-menu -->
                        </div>
                    </div>
                    <div class="header-right">
                        <div class="wel-msg text-uppercase d-none d-lg-block">FREE Returns. Standard Shipping Orders $99+
                        </div>
                        <span class="separator d-none d-xl-block"></span>
                        <ul class="top-links mega-menu show-arrow d-none d-sm-inline-block">
                            <li class="item-menu narrow"><a href="dashboard.html">My Account</a></li>
                            <li class="item-menu narrow"><a href="demo8-about.html">About Us</a></li>
                            <li class="item-menu narrow"><a href="blog.html">Blog</a></li>
                            <li class="item-menu narrow"><a href="cart.html">Cart</a></li>
                            <li class="item-menu">
                                <a class="login" href="{{route('logout')}}">Logout</a>
                            </li>
                        </ul>
                        <span class="separator d-none d-xl-block"></span>
                        <div class="share-links d-none d-xl-block">
                            <a target="_blank" rel="nofollow" class="share-facebook icon-facebook" href="#" title="Facebook"></a>
                            <a target="_blank" rel="nofollow" class="share-twitter icon-twitter" href="#" title="Twitter"></a>
                            <a target="_blank" rel="nofollow" class="share-instagram icon-instagram" href="#" title="Instagram"></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-middle sticky-header" data-sticky-options="{'mobile': true}">
                <div class="container">
                    <div class="header-left d-lg-block d-none">
                        <div class="header-contact d-none d-lg-flex align-items-center pl-1 mr-lg-5 pr-xl-2">
                            <i class="icon-phone-2"></i>
                            <h6>Call us now<a href="tel:#" class="text-dark font1">+123 5678 890</a></h6>
                        </div>
                    </div>
                    <!-- End .header-left -->

                    <div class="header-center">
                        <button class="mobile-menu-toggler" type="button">
                            <i class="fas fa-bars"></i>
                        </button>
                        <a href="demo8.html" class="logo">
                            <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/logo_red.png" alt="Porto Logo" width="104" height="41" />
                        </a>
                    </div>
                    <!-- End .headeer-center -->

                    <div class="header-right">
                        {{-- <a href="login.html" class="header-icon header-icon-user"><i class="icon-user-2"></i></a> --}}
                        @if(Auth::check())
                            <a href="" class="header-icon header-icon-user"><i class="icon-user-2"></i>{{Auth::user()->name}}</a>
                        @else
                        <a href="{{route('login')}}" class="header-icon header-icon-user"><i class="icon-user-2"></i>Login</a>
                        @endif
                        <div class="header-search header-search-popup header-search-category d-none d-sm-block">
                            <a href="#" class="search-toggle" role="button"><i class="icon-magnifier"></i></a>
                            <form action="#" method="get">
                                <div class="header-search-wrapper">
                                    <input type="search" class="form-control" name="q" id="q" placeholder="I'm searching for..." required="">
                                    <div class="select-custom">
                                        <select id="cat" name="cat">
                                            <option value="">All Categories</option>
                                            <option value="4">Fashion</option>
                                            <option value="12">- Women</option>
                                            <option value="13">- Men</option>
                                            <option value="66">- Jewellery</option>
                                            <option value="67">- Kids Fashion</option>
                                            <option value="5">Electronics</option>
                                            <option value="21">- Smart TVs</option>
                                            <option value="22">- Cameras</option>
                                            <option value="63">- Games</option>
                                            <option value="7">Home &amp; Garden</option>
                                            <option value="11">Motors</option>
                                            <option value="31">- Cars and Trucks</option>
                                            <option value="32">- Motorcycles &amp; Powersports</option>
                                            <option value="33">- Parts &amp; Accessories</option>
                                            <option value="34">- Boats</option>
                                            <option value="57">- Auto Tools &amp; Supplies</option>
                                        </select>
                                    </div>
                                    <!-- End .select-custom -->
                                    <button class="btn icon-search-3" type="submit"></button>
                                </div>
                                <!-- End .header-search-wrapper -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-bottom sticky-header d-none d-lg-flex" data-sticky-options="{'mobile': false}">
                <div class="container">
                    <nav class="main-nav w-100">
                        <ul class="menu w-100">
                            <li class="active">
                                <a href="demo8.html">Home</a>
                            </li>
                            <li>
                                <a href="demo8-shop.html">Categories</a>
                                <div class="megamenu megamenu-fixed-width megamenu-3cols">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <a href="#" class="nolink">VARIATION 1</a>
                                            <ul class="submenu">
                                                <li><a href="category.html">Fullwidth Banner</a></li>
                                                <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a>
                                                </li>
                                                <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a>
                                                </li>
                                                <li><a href="category.html">Left Sidebar</a></li>
                                                <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                                <li><a href="category-off-canvas.html">Off Canvas Filter</a></li>
                                                <li><a href="category-horizontal-filter1.html">Horizontal Filter1</a>
                                                </li>
                                                <li><a href="category-horizontal-filter2.html">Horizontal Filter2</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4">
                                            <a href="#" class="nolink">VARIATION 2</a>
                                            <ul class="submenu">
                                                <li><a href="category-list.html">List Types</a></li>
                                                <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll</a>
                                                </li>
                                                <li><a href="category.html">3 Columns Products</a></li>
                                                <li><a href="category-4col.html">4 Columns Products</a></li>
                                                <li><a href="category-5col.html">5 Columns Products</a></li>
                                                <li><a href="category-6col.html">6 Columns Products</a></li>
                                                <li><a href="category-7col.html">7 Columns Products</a></li>
                                                <li><a href="category-8col.html">8 Columns Products</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4 p-0">
                                            <div class="menu-banner">
                                                <figure>
                                                    <img src="{{asset('fe-asset')}}/assets/images/menu-banner.jpg" width="192" height="313" alt="Menu banner">
                                                </figure>
                                                <div class="banner-content">
                                                    <h4>
                                                        <span class="">UP TO</span><br />
                                                        <b class="">50%</b>
                                                        <i>OFF</i>
                                                    </h4>
                                                    <a href="category.html" class="btn btn-sm btn-dark">SHOP NOW</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End .megamenu -->
                            </li>
                            <li>
                                <a href="demo8-product.html">Products</a>
                                <div class="megamenu megamenu-fixed-width">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <a href="#" class="nolink">PRODUCT PAGES</a>
                                            <ul class="submenu">
                                                <li><a href="product.html">SIMPLE PRODUCT</a></li>
                                                <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                                                <li><a href="product.html">SALE PRODUCT</a></li>
                                                <li><a href="product.html">FEATURED & ON SALE</a></li>
                                                <li><a href="product-custom-tab.html">WITH CUSTOM TAB</a></li>
                                                <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a></li>
                                                <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a></li>
                                                <li><a href="product-addcart-sticky.html">ADD CART STICKY</a></li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-4">
                                            <a href="#" class="nolink">PRODUCT LAYOUTS</a>
                                            <ul class="submenu">
                                                <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a></li>
                                                <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                                                <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                                                <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                                                <li><a href="product-sticky-both.html">LEFT & RIGHT STICKY</a></li>
                                                <li><a href="product-transparent-image.html">TRANSPARENT IMAGE</a></li>
                                                <li><a href="product-center-vertical.html">CENTER VERTICAL</a></li>
                                                <li><a href="#">BUILD YOUR OWN</a></li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-4 p-0">
                                            <div class="menu-banner menu-banner-2">
                                                <figure>
                                                    <img src="{{asset('fe-asset')}}/assets/images/menu-banner-1.jpg" alt="Menu banner" class="product-promo">
                                                </figure>
                                                <i>OFF</i>
                                                <div class="banner-content">
                                                    <h4>
                                                        <span class="">UP TO</span><br />
                                                        <b class="">50%</b>
                                                    </h4>
                                                </div>
                                                <a href="category.html" class="btn btn-sm btn-dark">SHOP NOW</a>
                                            </div>
                                        </div>
                                        <!-- End .col-lg-4 -->
                                    </div>
                                    <!-- End .row -->
                                </div>
                                <!-- End .megamenu -->
                            </li>
                            <li>
                                <a href="#">Pages</a>
                                <ul>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="cart.html">Shopping Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="dashboard.html">Dashboard</a></li>
                                    <li><a href="demo8-about.html">About Us</a></li>
                                    <li><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="single.html">Blog Post</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="demo8-contact.html">Contact Us</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="forgot-password.html">Forgot Password</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="#">Elements</a>
                                <ul class="custom-scrollbar">
                                    <li><a href="element-accordions.html">Accordion</a></li>
                                    <li><a href="element-alerts.html">Alerts</a></li>
                                    <li><a href="element-animations.html">Animations</a></li>
                                    <li><a href="element-banners.html">Banners</a></li>
                                    <li><a href="element-buttons.html">Buttons</a></li>
                                    <li><a href="element-call-to-action.html">Call to Action</a></li>
                                    <li><a href="element-countdown.html">Count Down</a></li>
                                    <li><a href="element-counters.html">Counters</a></li>
                                    <li><a href="element-headings.html">Headings</a></li>
                                    <li><a href="element-icons.html">Icons</a></li>
                                    <li><a href="element-info-box.html">Info box</a></li>
                                    <li><a href="element-posts.html">Posts</a></li>
                                    <li><a href="element-products.html">Products</a></li>
                                    <li><a href="element-product-categories.html">Product Categories</a></li>
                                    <li><a href="element-tabs.html">Tabs</a></li>
                                    <li><a href="element-testimonial.html">Testimonials</a></li>
                                </ul>
                            </li>
                            <li><a href="demo8-contact.html">Contact Us</a></li>
                            <li class="float-right"><a href="https://1.envato.market/DdLk5" class="pl-5 m-0 pr-0" target="_blank">Buy Porto!</a></li>
                            <li class="float-right"><a href="#" class="pl-5">Special Offer!</a></li>
                        </ul>
                    </nav>
                </div>
                <!-- End .container -->
            </div>
            <!-- End .header-bottom -->
        </header>
        <!-- End .header -->

        <main class="main">
            <div class="container">
                <div class="home-slider-container">
                    <div class="home-slider owl-carousel owl-theme owl-theme-light nav-outer show-nav-hover slide-animate" data-owl-options="{
                            'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ]
                            }">
                        <div class="home-slide">
                            <figure style="background-color: #d7b697;">
                                <img class="slide-bg" src="{{asset('fe-asset')}}/assets/images/demoes/demo8/slider/slide-1.jpg" width="1180" height="569" alt="Home Banner" />
                            </figure>
                            <!-- End .slide-bg -->
                            <div class="home-slide-content sale-banner">
                                <div class="row no-gutter bg-primary appear-animate" data-animation-name="fadeInLeftShorter">
                                    <div class="col-auto col-md-6 d-flex flex-column justify-content-center col-1">
                                        <h4 class="align-left text-uppercase mb-0 appear-animate" data-animation-name="slideInRight" data-animation-delay="400">Furniture &amp; Garden</h4>
                                        <h3 class="text-white mb-0 align-left text-uppercase appear-animate" data-animation-name="slideInRight" data-animation-delay="400">Huge Sale
                                        </h3>
                                    </div>

                                    <div class="col-auto col-md-6 col-2 appear-animate" data-animation-name="slideInLeft" data-animation-delay="400">
                                        <h2 class="text-white mb-0 position-relative align-left">
                                            50<small>%<ins>OFF</ins></small>
                                        </h2>
                                    </div>
                                </div>
                                <div class="mb-0 text-right">
                                    <a href="demo8-shop.html" class="btn btn-lg btn-dark appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="600">Shop
                                        Now!</a>
                                </div>
                            </div>
                        </div>
                        <!-- End .home-slide -->

                        <div class="home-slide home-slide-left">
                            <figure style="background-color: #ceb49d;">
                                <img class="slide-bg" src="{{asset('fe-asset')}}/assets/images/demoes/demo8/slider/slide-2.jpg" width="1180" height="569" alt="Home Banner" />
                            </figure>
                            <!-- End .slide-bg -->
                            <div class="home-slide-content slide-content-dark sale-banner">
                                <div class="row no-gutter bg-secondary appear-animate" data-animation-name="fadeInRightShorter">
                                    <div class="col-auto col-md-6 d-flex flex-column justify-content-center col-1">
                                        <h4 class="align-left text-uppercase mb-0 appear-animate" data-animation-name="slideInRight" data-animation-delay="300">Home office sale
                                        </h4>
                                        <h3 class="text-white mb-0 align-left text-uppercase appear-animate" data-animation-name="slideInRight" data-animation-delay="300">mega off
                                        </h3>
                                    </div>

                                    <div class="col-auto col-md-6 col-2 appear-animate" data-animation-name="slideInLeft" data-animation-delay="300">
                                        <h2 class="text-white mb-0 position-relative align-left">
                                            50<small>%<ins>OFF</ins></small>
                                        </h2>
                                    </div>
                                </div>
                                <div class="mb-0">
                                    <a href="demo8-shop.html" class="btn btn-lg btn-primary appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="600">Shop
                                        Now!</a>
                                </div>
                            </div>
                            <!-- End .home-slide-content -->
                        </div>
                        <!-- End .home-slide -->
                    </div>
                    <!-- End .home-slider -->
                </div>
                <!-- End .home-slider-container -->
            </div>
            <!-- End .container -->

            <div class="container banner-container">
                <div class="row justify-content-center">
                    <div class="col-md-4 col-sm-6 mt-3 mt-md-0 appear-animate" data-animation-name="fadeInRightShorter" data-y="200">
                        <h3 class="subtitle">SHOP LIVING ROOM</h3>
                        <div class="heading-spacer"></div>
                        <div class="banner banner-image">
                            <a href="#">
                                <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/banners/banner-living.jpg" style="background-color: #e4ddd7;" width="360" height="270" alt="banner" />
                            </a>
                            <div class="banner-meta">
                                <a href="#">LIVING ROOM </a>

                                <span class="banner-price">Starting at <strong>$999</strong></span>
                            </div>
                            <!-- End .banner-meta -->
                        </div>
                        <!-- End .banner -->
                    </div>
                    <!-- End .col-md-4 -->

                    <div class="col-md-4 col-sm-6 mt-3 mt-md-0 appear-animate" data-animation-duration="1500">
                        <h3 class="subtitle">SHOP DINNING ROOM</h3>
                        <div class="heading-spacer"></div>
                        <div class="banner banner-image">
                            <a href="#">
                                <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/banners/banner-dining.jpg" style="background-color: #e4ddd7;" alt="banner" width="360" height="270" />
                            </a>
                            <div class="banner-meta">
                                <a href="#" class="white-nowrap">DINNING ROOM </a>

                                <span class="banner-price white-nowrap">Starting at <strong>$899</strong></span>
                            </div>
                            <!-- End .banner-meta -->
                        </div>
                        <!-- End .banner -->
                    </div>
                    <!-- End .col-md-4 -->

                    <div class="col-md-4 col-sm-6 mt-3 mt-md-0 appear-animate" data-animation-name="fadeInLeftShorter">
                        <h3 class="subtitle">SHOP BEDROOM</h3>
                        <div class="heading-spacer"></div>
                        <div class="banner banner-image">
                            <a href="#">
                                <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/banners/banner-bedroom.jpg" style="background-color: #e4ddd7;" alt="banner" width="360" height="270" />
                            </a>
                            <div class="banner-meta">
                                <a href="#">BEDROOM</a>

                                <span class="banner-price">Starting at <strong>$799</strong></span>
                            </div>
                            <!-- End .banner-meta -->
                        </div>
                        <!-- End .banner -->
                    </div>
                    <!-- End .col-md-4 -->
                </div>
                <!-- End .row -->
            </div>
            <!-- End .container -->

            <div class="mb-3"></div>
            <!-- margin -->

            <div class="container feature-container">
                <h2 class="subtitle text-center">FEATURED PRODUCTS</h2>
                <div class="heading-spacer"></div>
                <div class="row">
                    <div class="col-6 col-sm-4 col-md-3 appear-animate" data-animation-delay="100" data-animation-duration="1500">
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-2.jpg" alt="product" width="300" height="300" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-8.jpg" alt="product" width="300" height="300" />
                                </a>
                                <div class="btn-icon-group">
                                    <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                            class="icon-shopping-cart"></i></a>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="demo8-shop.html" class="product-category">Electronics</a>,
                                        <a href="demo8-shop.html" class="product-category">Fashion</a>,
                                        <a href="demo8-shop.html" class="product-category">watches</a>
                                    </div>
                                    <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                            class="icon-heart"></i></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="demo8-product.html">Porto Brown Chair</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$101.00 – $111.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 appear-animate" data-animation-delay="100" data-animation-duration="1500">
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-21.jpg" alt="product" width="300" height="300" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-12.jpg" alt="product" width="300" height="300" />
                                </a>
                                <div class="btn-icon-group">
                                    <a href="demo8-product.html" class="btn-icon btn-add-cart"><i
                                            class="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="demo8-shop.html" class="product-category">Fashion</a>,
                                        <a href="demo8-shop.html" class="product-category">Shoes</a>,
                                        <a href="demo8-shop.html" class="product-category">Toys</a>
                                    </div>
                                    <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                            class="icon-heart"></i></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="demo8-product.html">Porto Both Sticky Info</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:80%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$39.00 – $108.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 appear-animate" data-animation-delay="100" data-animation-duration="1500">
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-9.jpg" alt="product" width="300" height="300" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-13.jpg" alt="product" width="300" height="300" />
                                </a>
                                <div class="btn-icon-group">
                                    <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                            class="icon-shopping-cart"></i></a>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="demo8-shop.html" class="product-category">T-shirts</a>,
                                        <a href="demo8-shop.html" class="product-category">Toys</a>,
                                        <a href="demo8-shop.html" class="product-category">Trousers</a>
                                    </div>
                                    <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                            class="icon-heart"></i></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="demo8-product.html">Porto Sports Shoes</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$101.00 – $111.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 appear-animate" data-animation-delay="100" data-animation-duration="1500">
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-10.jpg" alt="product" width="300" height="300" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-14.jpg" alt="product" width="300" height="300" />
                                </a>
                                <div class="label-group">
                                    <span class="product-label label-sale">-23%</span>
                                </div>
                                <div class="btn-icon-group">
                                    <a href="demo8-product.html" class="btn-icon btn-add-cart"><i
                                            class="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="demo8-shop.html" class="product-category">Fashion</a>
                                    </div>
                                    <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                            class="icon-heart"></i></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="demo8-product.html">Brown Leather Sofa</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$199.00 – $209.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 appear-animate" data-animation-delay="100" data-animation-duration="1500">
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-22.jpg" alt="product" width="300" height="300" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-15.jpg" alt="product" width="300" height="300" />
                                </a>
                                <div class="btn-icon-group">
                                    <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                            class="icon-shopping-cart"></i></a>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="demo8-shop.html" class="product-category">Dress</a>,
                                        <a href="demo8-shop.html" class="product-category">T-Shirts</a>,
                                        <a href="demo8-shop.html" class="product-category">Watches</a>
                                    </div>
                                    <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                            class="icon-heart"></i></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="demo8-product.html">Headphone Black</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$299.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 appear-animate" data-animation-delay="100" data-animation-duration="1500">
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-11.jpg" alt="product" width="300" height="300" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-16.jpg" alt="product" width="300" height="300" />
                                </a>
                                <div class="label-group">
                                    <span class="product-label label-sale">-15%</span>
                                </div>
                                <div class="btn-icon-group">
                                    <a href="demo8-product.html" class="btn-icon btn-add-cart"><i
                                            class="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="demo8-shop.html" class="product-category">Fashion</a>,
                                        <a href="demo8-shop.html" class="product-category">watches</a>
                                    </div>
                                    <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                            class="icon-heart"></i></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="demo8-product.html">Sofa</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="old-price">$1,999.00</span>
                                    <span class="product-price">$1,699.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 appear-animate" data-animation-delay="100" data-animation-duration="1500">
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-23.jpg" alt="product" width="300" height="300" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-17.jpg" alt="product" width="300" height="300" />
                                </a>
                                <div class="btn-icon-group">
                                    <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                            class="icon-shopping-cart"></i></a>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="demo8-shop.html" class="product-category">Dress</a>,
                                        <a href="demo8-shop.html" class="product-category">Shoes</a>,
                                        <a href="demo8-shop.html" class="product-category">T-Shirts</a>
                                    </div>
                                    <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                            class="icon-heart"></i></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="demo8-product.html">Leather Chair</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$55.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 appear-animate" data-animation-delay="100" data-animation-duration="1500">
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-24.jpg" alt="product" width="300" height="300" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-18.jpg" alt="product" width="300" height="300" />
                                </a>
                                <div class="btn-icon-group">
                                    <a href="demo8-product.html" class="btn-icon btn-add-cart"><i
                                            class="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="demo8-shop.html" class="product-category">Caps</a>,
                                        <a href="demo8-shop.html" class="product-category">Fashion</a>,
                                        <a href="demo8-shop.html" class="product-category">watches</a>
                                    </div>
                                    <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                            class="icon-heart"></i></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="demo8-product.html">Simple Chair</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$299.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End .container -->

            <div class="sale-banner banner appear-animate" data-animation-delay="100" data-animation-duration="1500">
                <div class="container banner-content">
                    <div class="row no-gutter bg-secondary">
                        <div class="col-auto col-md-4 d-flex flex-column justify-content-center col-1">
                            <h4 class="align-left text-uppercase mb-0">Furniture &amp; Garden</h4>
                            <h3 class="text-white mb-0 align-left text-uppercase">Huge Sale</h3>
                        </div>
                        <div class="col-auto col-md-4 col-2">
                            <h5 class="text-white mb-0 position-relative align-left">50<small>%<ins>OFF</ins></small>
                            </h5>
                        </div>
                        <div class="mb-0 col-md-4 col-3 col-auto">
                            <a href="demo8-shop.html" class="btn btn-lg btn-primary">Shop Now!</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="product-widgets row pt-1">
                    <div class="col-md-4 col-sm-6 pb-5 appear-animate" data-animation-name="fadeInRightShorter">
                        <h4 class="subtitle text-left text-uppercase">Top Rated Products</h4>
                        <div class="heading-spacer"></div>
                        <div class="product-default left-details product-widget mb-2">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-8.jpg" width="175" height="175" alt="product" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-1.jpg" width="175" height="175" alt="product" />
                                </a>
                            </figure>
                            <div class="product-details">
                                <div class="category-list">
                                    <a href="demo8-shop.html" class="product-category">caps</a>,
                                    <a href="demo8-shop.html" class="product-category">fashion</a>,
                                    <a href="demo8-shop.html" class="product-category">t-shirts</a>
                                </div>
                                <h3 class="product-title"> <a href="demo8-product.html">Porto Arm Chair</a> </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:100%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$69.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                        <div class="product-default left-details product-widget mb-2">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-21.jpg" width="175" height="175" alt="product" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-6.jpg" width="175" height="175" alt="product" />
                                </a>
                            </figure>
                            <div class="product-details">
                                <div class="category-list">
                                    <a href="demo8-shop.html" class="product-category">Fashion</a>,
                                    <a href="demo8-shop.html" class="product-category">Shoes</a>,
                                    <a href="demo8-shop.html" class="product-category">Toys</a>
                                </div>
                                <h3 class="product-title"> <a href="demo8-product.html">Porto Both Sticky Info</a> </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:80%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top">4.00</span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$39.00 – $108.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                        <div class="product-default left-details product-widget mb-2">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-13.jpg" width="175" height="175" alt="product" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-23.jpg" width="175" height="175" alt="product" />
                                </a>
                            </figure>
                            <div class="product-details">
                                <div class="category-list">
                                    <a href="demo8-shop.html" class="product-category">Accessories</a>,
                                    <a href="demo8-shop.html" class="product-category">Caps</a>,
                                    <a href="demo8-shop.html" class="product-category">Dress</a>,
                                    <a href="demo8-shop.html" class="product-category">Electronics</a>
                                </div>
                                <h3 class="product-title"> <a href="demo8-product.html">Red Chair</a> </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$299.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 pb-5 appear-animate" data-animation-delay="100" data-animation-duration="1500">
                        <h4 class="subtitle text-left text-uppercase">Best Selling Products</h4>
                        <div class="heading-spacer"></div>
                        <div class="product-default left-details product-widget mb-2">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-19.jpg" width="175" height="175" alt="product" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-9.jpg" width="175" height="175" alt="product" />
                                </a>
                            </figure>
                            <div class="product-details">
                                <div class="category-list">
                                    <a href="demo8-shop.html" class="product-category">Fashion</a>
                                </div>
                                <h3 class="product-title"> <a href="demo8-product.html">Brown Leather Sofa</a> </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$199.00 – $209.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                        <div class="product-default left-details product-widget mb-2">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-4.jpg" width="175" height="175" alt="product" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-11.jpg" width="175" height="175" alt="product" />
                                </a>
                            </figure>
                            <div class="product-details">
                                <div class="category-list">
                                    <a href="demo8-shop.html" class="product-category">Accessories</a>,
                                    <a href="demo8-shop.html" class="product-category">Caps</a>,
                                    <a href="demo8-shop.html" class="product-category">Dress</a>,
                                    <a href="demo8-shop.html" class="product-category">Electronics</a>
                                </div>
                                <h3 class="product-title"> <a href="demo8-product.html">Product Extended</a> </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$105.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                        <div class="product-default left-details product-widget mb-2">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-9.jpg" width="175" height="175" alt="product" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-24.jpg" width="175" height="175" alt="product" />
                                </a>
                            </figure>
                            <div class="product-details">
                                <div class="category-list">
                                    <a href="demo8-shop.html" class="product-category">T-shirts</a>,
                                    <a href="demo8-shop.html" class="product-category">Toys</a>,
                                    <a href="demo8-shop.html" class="product-category">Trousers</a>
                                </div>
                                <h3 class="product-title"> <a href="demo8-product.html">Porto Sports Shoes</a> </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$101.00 – $111.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 pb-5 appear-animate" data-animation-name="fadeInLeftShorter">
                        <h4 class="subtitle text-left text-uppercase">Latest Products</h4>
                        <div class="heading-spacer"></div>
                        <div class="product-default left-details product-widget mb-2">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-25.jpg" width="175" height="175" alt="banner" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-5.jpg" width="175" height="175" alt="product" />
                                </a>
                            </figure>
                            <div class="product-details">
                                <div class="category-list">
                                    <a href="demo8-shop.html" class="product-category">Accessories</a>,
                                    <a href="demo8-shop.html" class="product-category">Caps</a>,
                                    <a href="demo8-shop.html" class="product-category">Dress</a>,
                                    <a href="demo8-shop.html" class="product-category">Electronics</a>
                                </div>
                                <h3 class="product-title"> <a href="demo8-product.html">Product Left Sidebar</a> </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$101.00 – $111.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                        <div class="product-default left-details product-widget mb-2">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-26.jpg" width="175" height="175" alt="product" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-8.jpg" width="175" height="175" alt="product" />
                                </a>
                            </figure>
                            <div class="product-details">
                                <div class="category-list">
                                    <a href="demo8-shop.html" class="product-category">Accessories</a>,
                                    <a href="demo8-shop.html" class="product-category">Caps</a>,
                                    <a href="demo8-shop.html" class="product-category">Dress</a>,
                                    <a href="demo8-shop.html" class="product-category">Electronics</a>
                                </div>
                                <h3 class="product-title"> <a href="demo8-product.html">Porto Evolution Headset</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$69.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                        <div class="product-default left-details product-widget mb-2">
                            <figure>
                                <a href="demo8-product.html">
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-13.jpg" width="175" height="175" alt="product" />
                                    <img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/products/product-19.jpg" width="175" height="175" alt="product" />
                                </a>
                            </figure>
                            <div class="product-details">
                                <div class="category-list">
                                    <a href="demo8-shop.html" class="product-category">Electronics</a>,
                                    <a href="demo8-shop.html" class="product-category">Fashion</a>,
                                    <a href="demo8-shop.html" class="product-category">Watches</a>
                                </div>
                                <h3 class="product-title"> <a href="demo8-product.html">Porto Brown Chair</a> </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:0%"></span>
                                        <!-- End .ratings -->
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    <!-- End .product-ratings -->
                                </div>
                                <!-- End .product-container -->
                                <div class="price-box">
                                    <span class="product-price">$101.00 – $111.00</span>
                                </div>
                                <!-- End .price-box -->
                            </div>
                            <!-- End .product-details -->
                        </div>
                    </div>
                </div>
                <!-- End .product-widgets -->
            </div>

            <div class="container">
                <div class="brands-section appear-animate" data-animation-delay="200" data-animation-name="fadeIn" data-animation-duration="1000">
                    <div class="brands-slider images-center owl-carousel owl-theme nav-outer show-nav-hover" data-owl-options="{
                        'margin': 0,
                        'nav': true
                    }">
                        <img src="{{asset('fe-asset')}}/assets/images/brands/small/brand1.png" width="140" height="60" alt="brand">
                        <img src="{{asset('fe-asset')}}/assets/images/brands/small/brand2.png" width="140" height="60" alt="brand">
                        <img src="{{asset('fe-asset')}}/assets/images/brands/small/brand3.png" width="140" height="60" alt="brand">
                        <img src="{{asset('fe-asset')}}/assets/images/brands/small/brand4.png" width="140" height="60" alt="brand">
                        <img src="{{asset('fe-asset')}}/assets/images/brands/small/brand5.png" width="140" height="60" alt="brand">
                        <img src="{{asset('fe-asset')}}/assets/images/brands/small/brand6.png" width="140" height="60" alt="brand">
                        <img src="{{asset('fe-asset')}}/assets/images/brands/small/brand4.png" width="140" height="60" alt="brand">
                    </div>
                    <!-- End .brands-slider -->
                </div>
            </div>

            <div class="instagram-section appear-animate">
                <h3 class="subtitle text-uppercase">Follow On Instagram</h3>
                <div class="heading-spacer"></div>
                <div class="owl-carousel owl-theme instagram-feed-carousel instagram-feed-list">
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/1.jpg" width="197" height="150" alt="Feed"></a>
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/2.jpg" width="197" height="150" alt="Feed"></a>
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/3.jpg" width="197" height="150" alt="Feed"></a>
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/4.jpg" width="197" height="150" alt="Feed"></a>
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/5.jpg" width="197" height="150" alt="Feed"></a>
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/6.jpg" width="197" height="150" alt="Feed"></a>
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/7.jpg" width="197" height="150" alt="Feed"></a>
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/8.jpg" width="197" height="150" alt="Feed"></a>
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/9.jpg" width="197" height="150" alt="Feed"></a>
                    <a href="#"><img src="{{asset('fe-asset')}}/assets/images/demoes/demo8/instagram/10.jpg" width="197" height="150" alt="Feed"></a>
                </div>
                <!-- End .instagram-feed-carousel -->
            </div>
            <!-- End .instagram-section -->
        </main>
        <!-- End .main -->

        <footer class="footer appear-animate">
            <div class="footer-middle">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="row row-sm">
                                <div class="col-sm-4">
                                    <div class="widget">
                                        <h4 class="widget-title">CONTACT INFO</h4>
                                        <ul class="contact-info mb-3">
                                            <li>
                                                <span class="contact-info-label">Phone:</span>Toll Free <a href="tel:">(123) 456-7890</a>
                                            </li>
                                            <li>
                                                <span class="contact-info-label">Email:</span> <a href="https://portotheme.com/cdn-cgi/l/email-protection#8ce1ede5e0cce9f4ede1fce0e9a2efe3e1"><span class="__cf_email__" data-cfemail="6805090104280d10090518040d460b0705">[email&#160;protected]</span></a>
                                            </li>

                                        </ul>
                                        <div class="social-icons">
                                            <a href="#" class="social-icon social-facebook icon-facebook"></a>
                                            <a href="#" class="social-icon social-twitter icon-twitter"></a>
                                            <a href="#" class="social-icon social-linkedin fab fa-linkedin-in"></a>
                                        </div>

                                    </div>
                                    <!-- End .widget -->
                                </div>
                                <!-- End .col-md-3 -->
                                <div class="col-sm-4">
                                    <div class="widget pl-sm-1">
                                        <h4 class="widget-title">CUSTOMER SERVICE</h4>

                                        <ul class="links">
                                            <li><a href="demo8-about.html">About Us</a></li>
                                            <li><a href="demo8-contact.html">Contact Us</a></li>
                                            <li><a href="dashboard.html">My Account</a></li>
                                            <li><a href="#">Orders history</a></li>
                                            <li><a href="#">Advanced search</a></li>
                                        </ul>
                                    </div>
                                    <!-- End .widget -->
                                </div>
                                <!-- End .col-md-5 -->

                                <div class="col-sm-4">
                                    <div class="widget pl-sm-2">
                                        <h4 class="widget-title">ABOUT US</h4>
                                        <ul class="links">
                                            <li><a href="demo8-about.html">Super Fast HTML Template</a></li>
                                            <li><a href="demo8-contact.html">Top Rated Theme in Themeforest</a></li>
                                            <li><a href="https://www.portotheme.com/html/porto_ecommerce/my-account.html">33 Unique Shop Demos</a></li>
                                            <li><a href="#">Powerful Admin Panel</a></li>
                                            <li><a href="#">Mobile & Retina Optimized</a></li>
                                        </ul>
                                    </div>
                                    <!-- End .widget -->
                                </div>
                                <!-- End .col-md-5 -->


                            </div>
                            <!-- End .row -->
                        </div>
                        <!-- End .col-lg-8 -->

                        <div class="col-lg-3">
                            <div class="widget widget-newsletter">
                                <h4 class="widget-title">Subscribe newsletter</h4>
                                <p>Get all the latest information on events, sales and offers. Sign up for newsletter:
                                </p>
                                <form action="#">
                                    <input type="email" class="form-control" placeholder="Email address" required>

                                    <input type="submit" class="btn" value="Go!">
                                </form>
                            </div>
                            <!-- End .widget -->
                        </div>
                        <!-- End .col-lg-4 -->
                    </div>
                    <!-- End .row -->
                </div>
                <!-- End .container -->
            </div>
            <!-- End .footer-middle -->

            <div class="container">
                <div class="footer-bottom d-sm-flex align-items-center">
                    <div class="footer-left">
                        <span class="footer-copyright">© copyright 2021. All Rights Reserved.</span>
                    </div>

                    <div class="footer-right ml-auto mt-1 mt-sm-0">
                        <div class="payment-icons mr-0">
                            <span class="payment-icon visa" style="background-image: url({{asset('fe-asset')}}/assets/images/payments/payment-visa.svg)"></span>
                            <span class="payment-icon paypal" style="background-image: url({{asset('fe-asset')}}/assets/images/payments/payment-paypal.svg)"></span>
                            <span class="payment-icon stripe" style="background-image: url({{asset('fe-asset')}}/assets/images/payments/payment-stripe.png)"></span>
                            <span class="payment-icon verisign" style="background-image:  url({{asset('fe-asset')}}/assets/images/payments/payment-verisign.svg)"></span>
                        </div>
                    </div>
                </div>
                <!-- End .footer-bottom -->
            </div>
            <!-- End .containr -->
        </footer>
        <!-- End .footer -->
    </div>
    <!-- End .page-wrapper -->

    <div class="loading-overlay">
        <div class="bounce-loader">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>

    <div class="mobile-menu-overlay"></div>
    <!-- End .mobil-menu-overlay -->

    <div class="mobile-menu-container">
        <div class="mobile-menu-wrapper">
            <span class="mobile-menu-close"><i class="fa fa-times"></i></span>
            <nav class="mobile-nav">
                <ul class="mobile-menu">
                    <li><a href="demo8.html">Home</a></li>
                    <li>
                        <a href="demo8-shop.html">Categories</a>
                        <ul>
                            <li><a href="category.html">Full Width Banner</a></li>
                            <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                            <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                            <li><a href="https://www.portotheme.com/html/porto_ecommerce/category-sidebar-left.html">Left Sidebar</a></li>
                            <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                            <li><a href="category-off-canvas.html">Off Canvas Filter</a></li>
                            <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                            <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                            <li><a href="#">List Types</a></li>
                            <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll<span
                                        class="tip tip-new">New</span></a></li>
                            <li><a href="category.html">3 Columns Products</a></li>
                            <li><a href="category-4col.html">4 Columns Products</a></li>
                            <li><a href="category-5col.html">5 Columns Products</a></li>
                            <li><a href="category-6col.html">6 Columns Products</a></li>
                            <li><a href="category-7col.html">7 Columns Products</a></li>
                            <li><a href="category-8col.html">8 Columns Products</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="demo8-product.html">Products</a>
                        <ul>
                            <li>
                                <a href="#" class="nolink">PRODUCT PAGES</a>
                                <ul>
                                    <li><a href="product.html">SIMPLE PRODUCT</a></li>
                                    <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                                    <li><a href="product.html">SALE PRODUCT</a></li>
                                    <li><a href="product.html">FEATURED & ON SALE</a></li>
                                    <li><a href="product-sticky-info.html">WIDTH CUSTOM TAB</a></li>
                                    <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a></li>
                                    <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a></li>
                                    <li><a href="product-addcart-sticky.html">ADD CART STICKY</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="nolink">PRODUCT LAYOUTS</a>
                                <ul>
                                    <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a></li>
                                    <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                                    <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                                    <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                                    <li><a href="product-sticky-both.html">LEFT & RIGHT STICKY</a></li>
                                    <li><a href="product-transparent-image.html">TRANSPARENT IMAGE</a></li>
                                    <li><a href="product-center-vertical.html">CENTER VERTICAL</a></li>
                                    <li><a href="#">BUILD YOUR OWN</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Pages<span class="tip tip-hot">Hot!</span></a>
                        <ul>
                            <li>
                                <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                                <a href="cart.html">Shopping Cart</a>
                            </li>
                            <li>
                                <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                                <a href="dashboard.html">Dashboard</a>
                            </li>
                            <li>
                                <a href="login.html">Login</a>
                            </li>
                            <li>
                                <a href="forgot-password.html">Forgot Password</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="blog.html">Blog</a></li>
                    <li>
                        <a href="#">Elements</a>
                        <ul class="custom-scrollbar">
                            <li><a href="element-accordions.html">Accordion</a></li>
                            <li><a href="element-alerts.html">Alerts</a></li>
                            <li><a href="element-animations.html">Animations</a></li>
                            <li><a href="element-banners.html">Banners</a></li>
                            <li><a href="element-buttons.html">Buttons</a></li>
                            <li><a href="element-call-to-action.html">Call to Action</a></li>
                            <li><a href="element-countdown.html">Count Down</a></li>
                            <li><a href="element-counters.html">Counters</a></li>
                            <li><a href="element-headings.html">Headings</a></li>
                            <li><a href="element-icons.html">Icons</a></li>
                            <li><a href="element-info-box.html">Info box</a></li>
                            <li><a href="element-posts.html">Posts</a></li>
                            <li><a href="element-products.html">Products</a></li>
                            <li><a href="element-product-categories.html">Product Categories</a></li>
                            <li><a href="element-tabs.html">Tabs</a></li>
                            <li><a href="element-testimonial.html">Testimonials</a></li>
                        </ul>
                    </li>
                </ul>

                <ul class="mobile-menu mt-2 mb-2">
                    <li class="border-0">
                        <a href="#">
                            Special Offer!
                        </a>
                    </li>
                    <li class="border-0">
                        <a href="https://1.envato.market/DdLk5" target="_blank">
                            Buy Porto!
                            <span class="tip tip-hot">Hot</span>
                        </a>
                    </li>
                </ul>

                <ul class="mobile-menu">
                    <li><a href="login.html">My Account</a></li>
                    <li><a href="demo8-contact.html">Contact Us</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="wishlist.html">My Wishlist</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="{{route('logout')}}" class="login-link">Logout</a></li>
                </ul>
            </nav>
            <!-- End .mobile-nav -->

            <form class="search-wrapper mb-2" action="#">
                <input type="text" class="form-control mb-0" placeholder="Search..." required />
                <button class="btn icon-search text-white bg-transparent p-0" type="submit"></button>
            </form>

            <div class="social-icons">
                <a href="#" class="social-icon social-facebook icon-facebook" target="_blank">
                </a>
                <a href="#" class="social-icon social-twitter icon-twitter" target="_blank">
                </a>
                <a href="#" class="social-icon social-instagram icon-instagram" target="_blank">
                </a>
            </div>
        </div>
        <!-- End .mobile-menu-wrapper -->
    </div>
    <!-- End .mobile-menu-container -->

    <div class="sticky-navbar">
        <div class="sticky-info">
            <a href="demo8.html">
                <i class="icon-home"></i>Home
            </a>
        </div>
        <div class="sticky-info">
            <a href="demo8-shop.html" class="">
                <i class="icon-bars"></i>Categories
            </a>
        </div>
        <div class="sticky-info">
            <a href="wishlist.html" class="">
                <i class="icon-wishlist-2"></i>Wishlist
            </a>
        </div>
        <div class="sticky-info">
            <a href="login.html" class="">
                <i class="icon-user-2"></i>Account
            </a>
        </div>
        <div class="sticky-info">
            <a href="cart.html" class="">
                <i class="icon-shopping-cart position-relative">
                    <span class="cart-count badge-circle">3</span>
                </i>Cart
            </a>
        </div>
    </div>


    <!-- End .newsletter-popup -->

    <a id="scroll-top" href="#top" title="Top" role="button"><i class="icon-angle-up"></i></a>

    <!-- Plugins JS File -->
    <script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="{{asset('fe-asset')}}/assets/js/jquery.min.js"></script>
    <script src="{{asset('fe-asset')}}/assets/js/bootstrap.bundle.min.js"></script>
    <script src="{{asset('fe-asset')}}/assets/js/plugins.min.js"></script>
    <script src="{{asset('fe-asset')}}/assets/js/jquery.appear.min.js"></script>
    <!-- Main JS File -->
    <script src="{{asset('fe-asset')}}/assets/js/main.min.js"></script>
</body>


<!-- Mirrored from portotheme.com/html/porto_ecommerce/demo8.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 27 Jan 2024 11:57:12 GMT -->
</html>
