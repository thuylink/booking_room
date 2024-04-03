'use client'

import React, { useEffect, useState } from 'react'
import { useProduct, getProductById } from '../../../../hooks/product'
import { useCart } from '../../../../hooks/cart'
// import { useCategory } from '../../../hooks/category'
import { useCategory } from '@/hooks/category'
import '../show_product_css.scss'
import { Pannellum } from 'pannellum-react'
import Image from 'next/image'
import Input from '@/components/Input'

import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import { Navbar, NavbarContent, Link } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { NavbarBrand, NavbarItem } from '@nextui-org/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export const ProductDetailWithPannellum = () => {
    const id = window.location.pathname.split('/').pop()
    const { getProductById, error } = useProduct()

    const { product, error2 } = useProduct()

    const [product2, setProduct2] = useState(null)
    const [showImage360, setShowImage360] = useState(false)
    const [showImageGallery, setShowImageGallery] = useState(false)
    const { addToCart } = useCart()
    const { category } = useCategory()

    const handleAddToCart = async (id_product) => {
        try {
            await addToCart(id_product); // Gọi hàm addToCart từ hook useCart để thêm sản phẩm vào giỏ hàng
            console.log('Đã thêm sản phẩm vào giỏ hàng');
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
        }
    };
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductById(id)
                setProduct2(response)
                if (response.image360) {
                    setShowImage360(true)
                }
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchProduct()
    }, [])

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!product2) {
        return <div>Loading...</div>
    }
    if (category && category.length > 0) {
        const found = category[0].find(item => item.id === product2.id_category)
        product2.name_category = found.name_category;
    }

    const productFields = Object.keys(product2)

    return (
        <div className="container">
            <Navbar className="nav">
                <NavbarBrand>
                    <p className="font-bold text-inherit">LOGO AIRBNB</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center">
                    <NavbarItem>
                        <Link
                            color="foreground"
                            href="#"
                            onClick={() => setShowImageGallery(true)}>
                            Ảnh
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Thông tin chi tiết và đặt phòng
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Đánh giá
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end"></NavbarContent>
            </Navbar>
            <div className="left-section">
                <div>
                    <Button color="primary" className="title">
                        {' '}
                        {product2.title}
                    </Button>

                    {productFields.map(field => (
                        <p key={field}></p>
                    ))}
                </div>
            </div>
            <div className="container flex items-center justify-center">
                <Card className="py-4 lg:w-3/4 xl:w-1/2">
                    <CardBody className="overflow-visible py-2">
                        <div className="flex flex-col-reverse gap-6">
                            <div className="right">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="container">
                                        <div className="image-section">
                                            {product2.image &&
                                                Array.isArray(
                                                    JSON.parse(product2.image),
                                                ) && (
                                                    <Slider slidesToShow={2}>
                                                        {JSON.parse(
                                                            product2.image,
                                                        ).map(
                                                            (image, index) => {
                                                                const cleanedImagePath = image.replace(
                                                                    /[\[\]"]/g,
                                                                    '',
                                                                )
                                                                const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`

                                                                return (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="rounded-lg mb-4"
                                                                        style={{
                                                                            marginRight:
                                                                                '10px',
                                                                        }}>
                                                                        <img
                                                                            src={
                                                                                imagePath
                                                                            }
                                                                            alt="Image"
                                                                            width="400px"
                                                                            height="370px"
                                                                            className="rounded-lg"
                                                                        />
                                                                    </div>
                                                                )
                                                            },
                                                        )}
                                                    </Slider>
                                                )}
                                        </div>

                                        <div className="content-section">
                                            <div className="flex-1">
                                                {product2.image360 &&
                                                    Array.isArray(
                                                        JSON.parse(
                                                            product2.image360,
                                                        ),
                                                    ) && (
                                                        <Slider>
                                                            {JSON.parse(
                                                                product2.image360,
                                                            ).map(
                                                                (
                                                                    image360,
                                                                    index,
                                                                ) => {
                                                                    const cleanedImage360Path = image360.replace(
                                                                        /[\[\]"]/g,
                                                                        '',
                                                                    )
                                                                    const image360Path = `data:image/png;base64,${cleanedImage360Path}`
                                                                    return (
                                                                        showImage360 && (
                                                                            <div
                                                                                key={
                                                                                    index
                                                                                }
                                                                                className="rounded-lg mb-4"
                                                                                style={{
                                                                                    marginRight:
                                                                                        '10px',
                                                                                }}>
                                                                                <Pannellum
                                                                                    width="620px"
                                                                                    height="350px"
                                                                                    image={
                                                                                        image360Path
                                                                                    }
                                                                                    pitch={
                                                                                        10
                                                                                    }
                                                                                    yaw={
                                                                                        180
                                                                                    }
                                                                                    hfov={
                                                                                        110
                                                                                    }
                                                                                    autoLoad
                                                                                    alt="image360"
                                                                                    className="rounded-lg" // Thêm lớp CSS rounded-lg ở đây
                                                                                />
                                                                            </div>
                                                                        )
                                                                    )
                                                                },
                                                            )}
                                                        </Slider>
                                                    )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rightCol">
                                        <table className="info-table">
                                            <tbody>
                                                <tr>
                                                    <th className="pink-cell">
                                                        <span className="text-lg1 text-black cursor-pointer active:opacity-50">
                                                            Mô tả
                                                        </span>
                                                    </th>

                                                    <td>
                                                        <div className="highlighted-box">
                                                            {product2.description.replace(
                                                                /<\/?p>/g,
                                                                '',
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Địa chỉ
                                                    </th>
                                                    <td>
                                                        <div className="highlighted-box">
                                                            {product2.location}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Chi phí
                                                    </th>

                                                    <td>
                                                        <div className="highlighted-box">
                                                            {product2.price}{' '}
                                                            VNĐ/ngày đêm
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Sức chứa
                                                    </th>
                                                    <td>
                                                        <div className="highlighted-box">
                                                            {product2.capacity}{' '}
                                                            Người
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Kiểu kiến trúc
                                                    </th>
                                                    <td>
                                                        <div className="highlighted-box">
                                                            {
                                                                product2.name_category
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Phạm vi sử dụng
                                                    </th>
                                                    <td>
                                                        <div className="highlighted-box">
                                                            {
                                                                product2.privacy_type
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Tiện ích
                                                    </th>
                                                    <td>
                                                        <div className="highlighted-box">
                                                            {product2.amenities
                                                                .split(',')
                                                                .map(
                                                                    (
                                                                        amenity,
                                                                        index,
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="highlighted-value">
                                                                            {
                                                                                amenity
                                                                            }
                                                                        </div>
                                                                    ),
                                                                )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="mt-6 flex gap-6">
                                            <Button
                                                className="custom-button"
                                                onClick={() =>
                                                    handleAddToCart(product2.id)
                                                }>
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                    className="heart-icon"
                                                />
                                                <span className="button-text">
                                                    Thêm vào yêu thích
                                                </span>
                                            </Button>
                                            
                                            <Link href={`/rating`} passHref>
                                                <Button className="yeu bg-pink-500">
                                                    <span className="yeu1 text-white cursor-pointer active:opacity-50">
                                                        Đánh giá
                                                    </span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <div className="container">
                                        <form
                                            className="book"
                                            method="post"
                                            id="myform">
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="event_date">
                                                        Nhận phòng:
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="date"
                                                        noValidate="novalidate"
                                                        name="event_date"
                                                        id="event_date"
                                                    />
                                                </div>

                                                <div className="col-sm-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="event_date">
                                                        Trả phòng:
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="date"
                                                        noValidate="novalidate"
                                                        name="event_date"
                                                        id="event_date"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="phone">
                                                        Số khách:
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="phone"
                                                        id="phone"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <Link
                                                    href={`/show-product/${product.id}`}
                                                    className="underline-none text-sm hover:text-gray-900">
                                                    <Button className="ml-4 bg-pink-500">
                                                        <span className="text-lg1 text-white cursor-pointer active:opacity-50">
                                                            Đặt phòng
                                                        </span>
                                                    </Button>
                                                </Link>
                                                <div className="col-sm-6"></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="container bootdey flex-grow-1 container-p-y">
                                <div class="bg-white p-4 ">
                                    <div class="infor">
                                        <div class="media align-items-center py-3 mb-3">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                alt=""
                                                class="d-block ui-w-100 rounded-circle"
                                            />
                                            <div class="media-body contact2">
                                                <div className="mail">
                                                    <h4 class="font-weight-bold mb-0">
                                                        John Doe{' '}
                                                        <span class="text-muted font-weight-normal">
                                                            @johndoe
                                                        </span>
                                                    </h4>
                                                    <div class="text-muted mb-2">
                                                        ID: 3425433
                                                    </div>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="btn btn-default btn-sm icon-btn">
                                                        <i class="fa fa-mail"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card mb-4">
                                            <div class="card-body">
                                                <table class="table1 user-view-table m-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>Tên:</td>
                                                            <td>
                                                                <span class="fa fa-check text-primary"></span>
                                                                &nbsp; Yes
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tham gia:</td>
                                                            <td>01/23/2017</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ngày sinh:</td>
                                                            <td>
                                                                01/23/2018 (14
                                                                days ago)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Giới tính:</td>
                                                            <td>
                                                                01/23/2018 (14
                                                                days ago)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Điện thoại:</td>
                                                            <td>1234567890</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Địa chỉ:</td>
                                                            <td>
                                                                <span class="badge badge-outline-success">
                                                                    huhuhuhu
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="border-light m-0"></div>
                                            <div class="table-responsive"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className="cmt">
                                    <div class="container mt-5">
                                        <div class="row  d-flex justify-content-center">
                                            <div class="col-md-8">
                                                <div class="card p-3">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="user d-flex flex-row align-items-center">
                                                            <span>
                                                                <small class="font-weight-bold text-primary">
                                                                    james_olesenn
                                                                </small>{' '}
                                                                <small class="font-weight-bold">
                                                                    Hmm, This
                                                                    poster looks
                                                                    cool
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <small>
                                                            2 days ago
                                                        </small>
                                                    </div>
                                                    <div class="action d-flex justify-content-between mt-2 align-items-center">
                                                        <div class="icons align-items-center">
                                                            <i class="fa fa-star text-warning"></i>
                                                            <i class="fa fa-check-circle-o check-icon"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="inputcmt">
                            <div className="row">
                                <div className="col-10">
                                    <div className="comment-box ml-2">
                                        <h4>Add a comment</h4>
                                        <div className="rating">
                                            <input
                                                type="radio"
                                                name="rating"
                                                value="5"
                                                id="5"
                                            />
                                            <label for="5">☆</label>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value="4"
                                                id="4"
                                            />
                                            <label for="4">☆</label>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value="3"
                                                id="3"
                                            />
                                            <label for="3">☆</label>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value="2"
                                                id="2"
                                            />
                                            <label for="2">☆</label>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value="1"
                                                id="1"
                                            />
                                            <label for="1">☆</label>
                                        </div>
                                        <div className="comment-area">
                                            <textarea
                                                className="form-control"
                                                placeholder="what is your view?"
                                                rows="4"></textarea>
                                        </div>
                                        <div className="comment-btns mt-2">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="pull-left">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success btn-sm">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="pull-right">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success send btn-sm">
                                                            Send{' '}
                                                            <i className="fa fa-long-arrow-right ml-1"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ProductDetailWithPannellum
