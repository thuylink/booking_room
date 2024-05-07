'use client'

import React, { useEffect, useState } from 'react'
import{ useRef } from 'react';
import { useProduct } from '../../../../hooks/product'
import { useCart } from '../../../../hooks/cart'
import { useCategory } from '@/hooks/category'
import '../show_product_css.scss'
import { Pannellum } from 'pannellum-react'
import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import { Navbar, NavbarContent, Link } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { NavbarBrand, NavbarItem } from '@nextui-org/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRating } from '@/hooks/rating'
import { useAuth } from '@/hooks/auth'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addDays } from 'date-fns'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import { getRelatedProducts } from '../../../../hooks/product'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const ProductDetailWithPannellum = () => {
    const { user } = useAuth({ middleware: 'guest' })
    console.log('userrrr', user)
    const id = window.location.pathname.split('/').pop()
    const { getProductById, error } = useProduct()
    const {users} = useAuth()

    console.log("all users", users)
    const { product } = useProduct()
    const [product2, setProduct2] = useState(null)
    const [showImage360, setShowImage360] = useState(false)
    const [showImageGallery, setShowImageGallery] = useState(false)
    const { addToCart } = useCart()
    const { category } = useCategory()
    
    const [ratings, setRatings] = useState(0)
    const [comment, setComment] = useState('')
    const { addRating } = useRating()
    const { rating } = useRating()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)
    const variants = ['bordered']
    const [relatedProducts, setRelatedProducts] = useState([])

    localStorage.setItem('startDate', JSON.stringify(startDate));
    localStorage.setItem('endDate', JSON.stringify(endDate));

    const handleViewDetail = id_category => {
        const productsInSameCategory = relatedProducts.filter(
            product => product.id_category == id_category,
        )
        setRelatedProducts(productsInSameCategory)
    }

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            const products = await getRelatedProducts(id)
            setRelatedProducts(products)
        }
        fetchRelatedProducts()
    }, [id])

    const [selectedImage, setSelectedImage] = useState(null) // State để lưu trữ URL của ảnh được chọn
    const [selectedImage360, setSelectedImage360] = useState(null)

    const handleImageClick = imagePath => {
        setSelectedImage(imagePath) // Cập nhật state với URL của ảnh được chọn
    }

    const handleImage360Click = image360Path => {
        setSelectedImage360(image360Path)
    }

    const handleStartDateChange = date => {
        setStartDate(date)

        if (!endDate || date.getTime() > endDate.getTime()) {
            // Nếu ngày kết thúc không được đặt hoặc ngày bắt đầu sau ngày kết thúc
            setEndDate(addDays(date, 1)) // Đặt ngày kết thúc sau ngày bắt đầu ít nhất 1 ngày
        }
    }

    const handleEndDateChange = date => {
        setEndDate(date)
    }

    const starCounts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    }
    let comments = []
    if (rating && rating.length > 0) {
        rating.forEach(item => {
            if (item.id_product === parseInt(id)) {
                comments.push(item)
            }
        })
    }
    comments.forEach(comment => {
        starCounts[comment.star]++
    })

    comments.map(rating => {
        console.log('Id của rating:', rating.id) // Log id của mỗi rating
        return (
            <div key={rating.id} className="rating-item">
                {/* Nội dung bình luận */}
            </div>
        )
    })

    const totalReviews =
        starCounts[1] +
        starCounts[2] +
        starCounts[3] +
        starCounts[4] +
        starCounts[5]
    const totalStars =
        starCounts[1] * 1 +
        starCounts[2] * 2 +
        starCounts[3] * 3 +
        starCounts[4] * 4 +
        starCounts[5] * 5
    const averageRating = totalStars / totalReviews

    const totalComments = totalReviews //tổng số lượt bình luận

    const percentage5Stars = [starCounts[5] / totalComments] * 100
    const percentage4Stars = [starCounts[4] / totalComments] * 100
    const percentage3Stars = [starCounts[3] / totalComments] * 100
    const percentage2Stars = [starCounts[2] / totalComments] * 100
    const percentage1Star = [starCounts[1] / totalComments] * 100

    const calculateNumberOfNights = (startDate, endDate) => {
        // Chuyển đổi ngày nhận và trả thành đối tượng Date
        const start = new Date(startDate)
        const end = new Date(endDate)

        // Kiểm tra ngày trả hợp lệ không
        if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
            const difference = end.getTime() - start.getTime() // Tính số milliseconds giữa hai ngày
            const numberOfNights = Math.floor(
                difference / (1000 * 60 * 60 * 24), // Chuyển đổi số milliseconds thành số ngày và làm tròn xuống
            )

            return numberOfNights
        } else {
            // Ngày không hợp lệ, trả về 0 hoặc giá trị mặc định khác
            return 0
        }
    }

    const numberOfNights = calculateNumberOfNights(startDate, endDate)
    console.log('Số ngày:', numberOfNights)

    const BarContainer = styled.div`
        .bar-5 {
            width: ${props => props.percentage5Stars}%;
        }

        .bar-4 {
            width: ${props => props.percentage4Stars}%;
        }

        .bar-3 {
            width: ${props => props.percentage3Stars}%;
        }

        .bar-2 {
            width: ${props => props.percentage2Stars}%;
        }

        .bar-1 {
            width: ${props => props.percentage1Star}%;
        }
    `

    const handleAddToCart = async id_product => {
        try {
            await addToCart(id_product)
            console.log('Đã thêm sản phẩm vào giỏ hàng')
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error)
        }
    }

    const handleRatingsChange = event => {
        setRatings(parseInt(event.target.value))
    }

    const handleCommentChange = event => {
        setComment(event.target.value)
    }
    const handleSubmit = async () => {
        try {
            await addRating(id, user.id, ratings, comment)
            console.log('Đánh giá thành công')
        } catch (error) {
            console.error('Lỗi khi gửi đánh giá:', error)
        }
    }
    const sliderRef = useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

      
    useEffect(() => {
        if (id) {
            // Kiểm tra xem id có giá trị mới hay không
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
        }
    }, [id]) // Đặt id vào trong dependency array để effect chỉ chạy khi id thay đổi

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!product2) {
        return <div>Loading...</div>
    }
    
    console.log ('arr category',category)
    console.log('arr user', user )

    if (category && category.length > 0) {
        const found = category[0].find(item => item.id === product2.id_category)
        product2.name_category = found.name_category
    }

    if (rating && rating.length > 0) {
        rating.forEach((item) => {
            const found = users.find(item2 => item2.id === item.id_user);
            if (found) {
                item['name'] = found.name; // thêm thuộc tính vào object
            }
        })

            // rating.name = found.name;
    }
    console.log('rating', rating)
    

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
                            href="#image-section"
                            onClick={() => setShowImageGallery(true)}>
                            Ảnh
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#book-section" passHref aria-current="page">
                            Thông tin chi tiết và đặt phòng
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#rate-section" passHref>
                            Phản hồi
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end"></NavbarContent>
            </Navbar>

            <div class="center">
                <div style={{ width: '75%' }}>
                    <span
                        style={{
                            color: 'rgb(200, 200, 230)',
                            // fontFamily: 'Quicksand',
                        }}></span>
                </div>
            </div>

            <div className="left-section">
                <div>
                    <div className="flex flex-col flex-wrap gap-4">
                        {variants.map(variant => (
                            <Breadcrumbs key={variant} variant={variant}>
                                import Link from 'next/link';
                                <BreadcrumbItem>
                                    <Link href="/dashboard">
                                        <span>Trang chủ</span>
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    Xem chi tiết {product2.title}
                                </BreadcrumbItem>
                            </Breadcrumbs>
                        ))}
                    </div>

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
                                            <>
                                                {selectedImage && (
                                                    <div className="popup">
                                                        <img
                                                            src={selectedImage}
                                                            alt="Selected Image"
                                                            style={{
                                                                width: '600px', // Kích thước width mong muốn
                                                                minHeight:
                                                                    '350px',
                                                                minWidth:
                                                                    '600px',
                                                                maxHeight:
                                                                    '350px',
                                                                maxWidth:
                                                                    '600px',
                                                                height: '350px', // Kích thước height mong muốn
                                                                overflow:
                                                                    'hidden', // Tránh tràn ra nếu ảnh quá lớn
                                                            }}
                                                        />
                                                        <button
                                                            className="close-button"
                                                            onClick={() =>
                                                                setSelectedImage(
                                                                    null,
                                                                )
                                                            }>
                                                            <FontAwesomeIcon
                                                                icon={faTimes}
                                                                className="times-icon"
                                                            />
                                                        </button>
                                                    </div>
                                                )}

                                                {product2.image &&
                                                    Array.isArray(
                                                        JSON.parse(
                                                            product2.image,
                                                        ),
                                                    ) && (
                                                        <Slider
                                                            slidesToShow={6}>
                                                            {JSON.parse(
                                                                product2.image,
                                                            ).map(
                                                                (
                                                                    image,
                                                                    index,
                                                                ) => {
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
                                                                                width:
                                                                                    '50px', // Kích thước width mong muốn
                                                                                minHeight:
                                                                                    '50px',
                                                                                minWidth:
                                                                                    '50px',
                                                                                maxHeight:
                                                                                    '50px',
                                                                                maxWidth:
                                                                                    '50px',
                                                                                height:
                                                                                    '50px', // Kích thước height mong muốn
                                                                                overflow:
                                                                                    'hidden', // Tránh tràn ra nếu ảnh quá lớn
                                                                            }}>
                                                                            <img
                                                                                src={
                                                                                    imagePath
                                                                                }
                                                                                alt="Image"
                                                                                width="100%"
                                                                                height="100%"
                                                                                className="rounded-lg"
                                                                                style={{
                                                                                    marginRight:
                                                                                        '10px',
                                                                                    width:
                                                                                        '50px', // Kích thước width mong muốn
                                                                                    minHeight:
                                                                                        '100px',
                                                                                    minWidth:
                                                                                        '100px',
                                                                                    maxHeight:
                                                                                        '100px',
                                                                                    maxWidth:
                                                                                        '100px',
                                                                                    height:
                                                                                        '100px', // Kích thước height mong muốn
                                                                                    overflow:
                                                                                        'hidden', // Tránh tràn ra nếu ảnh quá lớn
                                                                                    cursor:
                                                                                        'pointer',
                                                                                    objectFit:
                                                                                        'cover', // Đảm bảo ảnh điều chỉnh kích thước mà vẫn giữ tỷ lệ khung hình
                                                                                }}
                                                                                onClick={() =>
                                                                                    handleImageClick(
                                                                                        imagePath,
                                                                                    )
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                                },
                                                            )}
                                                        </Slider>
                                                    )}
                                            </>
                                        </div>

                                        <div className="content-section">
                                            <div className="flex-1">
                                                <>
                                                    {selectedImage360 && (
                                                        <div className="popup-overlay">
                                                            <div className="popup-content">
                                                                <Pannellum
                                                                    width="800px"
                                                                    minHeight="500px"
                                                                    minWidth="800px"
                                                                    maxHeight="500px"
                                                                    maxWidth="800px"
                                                                    height="500px"
                                                                    image={
                                                                        selectedImage360
                                                                    }
                                                                    autoLoad
                                                                    alt="Selected Image 360"
                                                                    className="rounded-lg"
                                                                />
                                                                <button
                                                                    className="close-button"
                                                                    onClick={() =>
                                                                        setSelectedImage360(
                                                                            null,
                                                                        )
                                                                    }>
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faTimes
                                                                        }
                                                                        className="times360-icon"
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {product2.image360 &&
                                                        Array.isArray(
                                                            JSON.parse(
                                                                product2.image360,
                                                            ),
                                                        ) && (
                                                            <Slider
                                                                slidesToShow={
                                                                    3
                                                                }>
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
                                                                            <div
                                                                                key={
                                                                                    index
                                                                                }
                                                                                className="rounded-lg mb-4"
                                                                                style={{
                                                                                    marginRight:
                                                                                        '10px',
                                                                                }}
                                                                                onClick={() =>
                                                                                    handleImage360Click(
                                                                                        image360Path,
                                                                                    )
                                                                                } // Gọi hàm khi click vào ảnh
                                                                            >
                                                                                <Pannellum
                                                                                    width="200px" // Kích thước width mong muốn
                                                                                    height="100px" // Kích thước height mong muốn
                                                                                    image={
                                                                                        image360Path
                                                                                    }
                                                                                    pitch={
                                                                                        10
                                                                                    }
                                                                                    autoLoad
                                                                                    alt="image360"
                                                                                    className="rounded-lg"
                                                                                />
                                                                            </div>
                                                                        )
                                                                    },
                                                                )}
                                                            </Slider>
                                                        )}
                                                </>
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

                                            <Link
                                                href="#comment-section"
                                                passHref>
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

                        <div id="book-section">
                            <div>
                                <div>
                                    <div className="container">
                                        <form
                                            className="book"
                                            method="post"
                                            id="myform">
                                            <div className="row mb-3">
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="event_date">
                                                            Nhận phòng{' '}
                                                        </label>
                                                        <DatePicker
                                                            className="form-control"
                                                            type="date"
                                                            noValidate="novalidate"
                                                            name="event_date"
                                                            id="event_date"
                                                            selected={startDate}
                                                            onChange={
                                                                handleStartDateChange
                                                            }
                                                            dateFormat="dd/MM/yyyy"
                                                            minDate={new Date()}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <label
                                                            className="label-tra-phong"
                                                            htmlFor="event_date">
                                                            Trả phòng{' '}
                                                        </label>
                                                        <DatePicker
                                                            className="form-control-tra-phong"
                                                            type="date"
                                                            noValidate="novalidate"
                                                            name="event_date"
                                                            id="event_date"
                                                            selected={endDate}
                                                            dateFormat="dd/MM/yyyy"
                                                            minDate={
                                                                startDate
                                                                    ? addDays(
                                                                          startDate,
                                                                          1,
                                                                      )
                                                                    : new Date()
                                                            }
                                                            onChange={
                                                                handleEndDateChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <Link
                                                    href={`/booking-form`}
                                                    className="underline-none text-sm hover:text-gray-900">
                                                    <Button className="ml-4 bg-pink-500">
                                                        <span className="text-lg1 text-white cursor-pointer active:opacity-50">
                                                            Đặt phòng
                                                        </span>
                                                    </Button>
                                                </Link>
                                                <div className="col-sm-6"></div>
                                            </div>

                                            <div className="col">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                Chi phí:
                                                            </th>
                                                            <td className="tt">
                                                                {product2.price}{' '}
                                                                / Ngày đêm
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Thời gian:
                                                            </th>
                                                            <td className="tt">
                                                                {endDate
                                                                    ? numberOfNights +
                                                                      1
                                                                    : 0}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Tổng tiền:
                                                            </th>
                                                            <td className="tt">
                                                                {endDate
                                                                    ? (numberOfNights +
                                                                          1) *
                                                                      product2.price
                                                                    : 0}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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

                        <div id="rate-section">
                            <div className="container">
                                <div className="scrollable-container">
                                    <div className="cmt">
                                        <div class="container mt-5">
                                            <h1 className="tieude">
                                                Phản hồi từ khách hàng
                                            </h1>
                                            <div class="row  d-flex justify-content-center">
                                                <div class="col-md-8">
                                                    <div class="card p-3">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div class="user d-flex flex-row align-items-center">
                                                                <div className="grid grid-cols-1 gap-1">
                                                                    {' '}
                                                                    {comments?.map(
                                                                        rating => (
                                                                            <div
                                                                                key={
                                                                                    rating.id
                                                                                }
                                                                                className="rating-item">
                                                                                <div className="container">
                                                                                    <div className="row justify-content-center">
                                                                                        <div className="col-md-8">
                                                                                            <div className="card p-3 mb-4">
                                                                                                <div className="d-flex justify-content-between align-items-center">
                                                                                                    <div className="user d-flex flex-row align-items-center">
                                                                                                        <span>
                                                                                                            <small class="font-weight-bold text-primary">
                                                                                                                {
                                                                                                                    rating.name 
                                                                                                                }
                                                                                                            </small>
                                                                                                            <small className="d-flex align-items-center">
                                                                                                                <div>
                                                                                                                    {Array.from(
                                                                                                                        {
                                                                                                                            length:
                                                                                                                                rating.star,
                                                                                                                        },
                                                                                                                        (
                                                                                                                            _,
                                                                                                                            i,
                                                                                                                        ) => (
                                                                                                                            <FontAwesomeIcon
                                                                                                                                icon={
                                                                                                                                    faStar
                                                                                                                                }
                                                                                                                                key={
                                                                                                                                    i
                                                                                                                                }
                                                                                                                                className="text-pink-500"
                                                                                                                            />
                                                                                                                        ),
                                                                                                                    )}
                                                                                                                </div>
                                                                                                            </small>
                                                                                                            <small className="font-weight-bold">
                                                                                                                {
                                                                                                                    rating.cmt
                                                                                                                }
                                                                                                            </small>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ),
                                                                    )}
                                                                </div>
                                                            </div>
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
                        </div>

                        <div id="comment-section">
                            <div class="container bootdey flex-grow-1 container-p-y">
                                <div class="bg-white p-4 ">
                                    <div class="infor">
                                        <div class="media align-items-center py-3 mb-3">
                                            <div className="container">
                                                <div className="inputcmt">
                                                    <div className="row">
                                                        <div className="col-10">
                                                            <div className="comment-box">
                                                                <div className="rating">
                                                                    {[
                                                                        ...Array(
                                                                            5,
                                                                        ),
                                                                    ].map(
                                                                        (
                                                                            _,
                                                                            index,
                                                                        ) => (
                                                                            <React.Fragment
                                                                                key={
                                                                                    index
                                                                                }>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating"
                                                                                    value={
                                                                                        5 -
                                                                                        index
                                                                                    }
                                                                                    id={
                                                                                        5 -
                                                                                        index
                                                                                    }
                                                                                    onChange={
                                                                                        handleRatingsChange
                                                                                    }
                                                                                />
                                                                                <label
                                                                                    htmlFor={
                                                                                        5 -
                                                                                        index
                                                                                    }>
                                                                                    ☆
                                                                                </label>
                                                                            </React.Fragment>
                                                                        ),
                                                                    )}
                                                                </div>
                                                                <div className="comment-area">
                                                                    <textarea
                                                                        className="my-view"
                                                                        placeholder="Viết phản hồi sau khi trải nghiệm nơi ở của bạn ... "
                                                                        rows="4"
                                                                        value={
                                                                            comment
                                                                        }
                                                                        onChange={
                                                                            handleCommentChange
                                                                        }></textarea>
                                                                </div>
                                                                <div className="comment-btns mt-2">
                                                                    <div className="mt-6 flex gap-6">
                                                                        <Button
                                                                            className="custom-button"
                                                                            onClick={
                                                                                handleSubmit
                                                                            }>
                                                                            <span className="button-text">
                                                                                Đánh
                                                                                giá
                                                                            </span>
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="heading-section" className="class1">
                            <div className="number-star">
                                <span className="class1">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="text-pink-500"
                                    />
                                    {averageRating.toFixed(1)}
                                </span>
                                <br />
                                <span className="class1">
                                    <FontAwesomeIcon
                                        icon={faComment}
                                        className="text-pink-500"
                                    />
                                    {totalReviews}{' '}
                                </span>
                            </div>
                        </div>

                        <div id="stars-section" className="class2">
                            <div className="container bootdey flex-grow-1 container-p-y">
                                <div className="bg-white p-4 ">
                                    <div className="stars">
                                        <div className="media align-items-center py-3 mb-3">
                                            <div className="container">
                                                <div className="stars2">
                                                    <div className="line-star">
                                                        <div className="col-10">
                                                            <div className="all-stars">
                                                                <div className="rightside">
                                                                    <div className="col-md-7">
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    5
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage5Stars={
                                                                                        percentage5Stars
                                                                                    }>
                                                                                    <div className="bar-5"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[5]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    4
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage4Stars={
                                                                                        percentage4Stars
                                                                                    }>
                                                                                    <div className="bar-4"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[4]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    3
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage3Stars={
                                                                                        percentage3Stars
                                                                                    }>
                                                                                    <div className="bar-3"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[3]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    2
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage2Stars={
                                                                                        percentage2Stars
                                                                                    }>
                                                                                    <div className="bar-2"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[2]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    1
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage1Star={
                                                                                        percentage1Star
                                                                                    }>
                                                                                    <div className="bar-1"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[1]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

  <div className="related-products">
  <div className="slider-container">
      <div className="slider-wrapper">
          <Slider {...settings} ref={sliderRef}>
              {Array.isArray(relatedProducts) &&
                  relatedProducts.map((product) => (
                      <div key={product.id} className="product-card">
                          <div className="wrapper">
                              <div className="product-img">
                                  {product.image &&
                                      Array.isArray(JSON.parse(product.image)) && (
                                          <>
                                              {JSON.parse(product.image)
                                                  .slice(0, 1)
                                                  .map((image, index) => {
                                                      const cleanedImagePath = image.replace(/[\[\]"]/g, '');
                                                      const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`;

                                                      return (
                                                          <a href={`/show-product/${product.id}`} key={index}>
                                                              <img
                                                                  src={imagePath}
                                                                  alt="Image"
                                                                  className="rounded-image"
                                                                  height="420"
                                                                  width="327"
                                                              />
                                                          </a>
                                                      );
                                                  })}
                                          </>
                                      )}
                              </div>
                              <div className="product-info">
                                  <div className="product-text">
                                  </div>
                                  <div className="product-price-btn">
                                  <div style={{ color: '#0070f0' }}>
                                   {product.price } VNĐ
                                  </div>
                                    <br />
                                    {product.location}
                                     <br />

                                     <div style={{ color: '#ff385c' }}>
                                     {product.description.replace(/<\/?p>/g, '').split('.').shift()}                                  </div>

                                     </div>
                              </div>
                          </div>
                      </div>
                  ))}
          </Slider>
      </div>
      <div className="custom-arrows">
          <a className="prev" onClick={goToPrev}>
              <FontAwesomeIcon icon={faAngleLeft} />
          </a>
          <a className="next" onClick={goToNext}>
              <FontAwesomeIcon icon={faAngleRight} />
          </a>
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

//  <div id="book-section">
//                             <div>
//                                 <div>
//                                     <div className="container">
//                                         <form
//                                             className="book"
//                                             method="post"
//                                             id="myform">
//                                             <div className="row mb-3">
//                                                 <div className="row mb-3">
//                                                     <div className="col-sm-3">
//                                                         <label
//                                                             className="form-label"
//                                                             htmlFor="event_date">
//                                                             Nhận phòng{' '}
//                                                         </label>
//                                                         <DatePicker
//                                                             className="form-control"
//                                                             type="date"
//                                                             noValidate="novalidate"
//                                                             name="event_date"
//                                                             id="event_date"
//                                                             selected={startDate}
//                                                             onChange={
//                                                                 handleStartDateChange
//                                                             }
//                                                             dateFormat="dd/MM/yyyy"
//                                                             minDate={new Date()}
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div className="row mb-3">
//                                                     <div className="col-sm-3">
//                                                         <label
//                                                             className="label-tra-phong"
//                                                             htmlFor="event_date">
//                                                             Trả phòng{' '}
//                                                         </label>
//                                                         <DatePicker
//                                                             className="form-control-tra-phong"
//                                                             type="date"
//                                                             noValidate="novalidate"
//                                                             name="event_date"
//                                                             id="event_date"
//                                                             selected={endDate}
//                                                             dateFormat="dd/MM/yyyy"
//                                                             minDate={
//                                                                 startDate
//                                                                     ? addDays(
//                                                                           startDate,
//                                                                           1,
//                                                                       )
//                                                                     : new Date()
//                                                             }
//                                                             onChange={
//                                                                 handleEndDateChange
//                                                             }
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="row mb-3">
//                                                 <Link
//                                                     href={`/booking-form`}
//                                                     className="underline-none text-sm hover:text-gray-900">
//                                                     <Button className="ml-4 bg-pink-500">
//                                                         <span className="text-lg1 text-white cursor-pointer active:opacity-50">
//                                                             Đặt phòng
//                                                         </span>
//                                                     </Button>
//                                                 </Link>
//                                                 <div className="col-sm-6"></div>
//                                             </div>

//                                             <div className="col">
//                                                 <table className="table">
//                                                     <tbody>
//                                                         <tr>
//                                                             <th scope="row">
//                                                                 Chi phí:
//                                                             </th>
//                                                             <td className="tt">
//                                                                 {product2.price}{' '}
//                                                                 / Ngày đêm
//                                                             </td>
//                                                         </tr>
//                                                         <tr>
//                                                             <th scope="row">
//                                                                 Thời gian:
//                                                             </th>
//                                                             <td className="tt">
//                                                                 {endDate
//                                                                     ? numberOfNights +
//                                                                       1
//                                                                     : 0}
//                                                             </td>
//                                                         </tr>
//                                                         <tr>
//                                                             <th scope="row">
//                                                                 Tổng tiền:
//                                                             </th>
//                                                             <td className="tt">
//                                                                 {endDate
//                                                                     ? (numberOfNights +
//                                                                           1) *
//                                                                       product2.price
//                                                                     : 0}
//                                                             </td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div class="container bootdey flex-grow-1 container-p-y">
//                                 <div class="bg-white p-4 ">
//                                     <div class="infor">
//                                         <div class="media align-items-center py-3 mb-3">
//                                             <img
//                                                 src="https://bootdey.com/img/Content/avatar/avatar1.png"
//                                                 alt=""
//                                                 class="d-block ui-w-100 rounded-circle"
//                                             />
//                                             <div class="media-body contact2">
//                                                 <div className="mail">
//                                                     <h4 class="font-weight-bold mb-0">
//                                                         John Doe{' '}
//                                                         <span class="text-muted font-weight-normal">
//                                                             @johndoe
//                                                         </span>
//                                                     </h4>
//                                                     <div class="text-muted mb-2">
//                                                         ID: 3425433
//                                                     </div>
//                                                     <a
//                                                         href="javascript:void(0)"
//                                                         class="btn btn-default btn-sm icon-btn">
//                                                         <i class="fa fa-mail"></i>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div class="card mb-4">
//                                             <div class="card-body">
//                                                 <table class="table1 user-view-table m-0">
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>Tên:</td>
//                                                             <td>
//                                                                 <span class="fa fa-check text-primary"></span>
//                                                                 &nbsp; Yes
//                                                             </td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>Tham gia:</td>
//                                                             <td>01/23/2017</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>Ngày sinh:</td>
//                                                             <td>
//                                                                 01/23/2018 (14
//                                                                 days ago)
//                                                             </td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>Giới tính:</td>
//                                                             <td>
//                                                                 01/23/2018 (14
//                                                                 days ago)
//                                                             </td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>Điện thoại:</td>
//                                                             <td>1234567890</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>Địa chỉ:</td>
//                                                             <td>
//                                                                 <span class="badge badge-outline-success">
//                                                                     huhuhuhu
//                                                                 </span>
//                                                             </td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                             <div class="border-light m-0"></div>
//                                             <div class="table-responsive"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div id="rate-section">
//                             <div className="container">
//                                 <div className="scrollable-container">
//                                     <div className="cmt">
//                                         <div class="container mt-5">
//                                             <h1 className="tieude">
//                                                 Phản hồi từ khách hàng
//                                             </h1>
//                                             <div class="row  d-flex justify-content-center">
//                                                 <div class="col-md-8">
//                                                     <div class="card p-3">
//                                                         <div class="d-flex justify-content-between align-items-center">
//                                                             <div class="user d-flex flex-row align-items-center">
//                                                                 <div className="grid grid-cols-1 gap-1">
//                                                                     {' '}
//                                                                     {comments?.map(
//                                                                         rating => (
//                                                                             <div
//                                                                                 key={
//                                                                                     rating.id
//                                                                                 }
//                                                                                 className="rating-item">
//                                                                                 <div className="container">
//                                                                                     <div className="row justify-content-center">
//                                                                                         <div className="col-md-8">
//                                                                                             <div className="card p-3 mb-4">
//                                                                                                 <div className="d-flex justify-content-between align-items-center">
//                                                                                                     <div className="user d-flex flex-row align-items-center">
//                                                                                                         <span>
//                                                                                                             <small class="font-weight-bold text-primary">
//                                                                                                                 {
//                                                                                                                     user.name
//                                                                                                                 }
//                                                                                                             </small>
//                                                                                                             <small className="d-flex align-items-center">
//                                                                                                                 <div>
//                                                                                                                     {Array.from(
//                                                                                                                         {
//                                                                                                                             length:
//                                                                                                                                 rating.star,
//                                                                                                                         },
//                                                                                                                         (
//                                                                                                                             _,
//                                                                                                                             i,
//                                                                                                                         ) => (
//                                                                                                                             <FontAwesomeIcon
//                                                                                                                                 icon={
//                                                                                                                                     faStar
//                                                                                                                                 }
//                                                                                                                                 key={
//                                                                                                                                     i
//                                                                                                                                 }
//                                                                                                                                 className="text-pink-500"
//                                                                                                                             />
//                                                                                                                         ),
//                                                                                                                     )}
//                                                                                                                 </div>
//                                                                                                             </small>
//                                                                                                             <small className="font-weight-bold">
//                                                                                                                 {
//                                                                                                                     rating.cmt
//                                                                                                                 }
//                                                                                                             </small>
//                                                                                                         </span>
//                                                                                                     </div>
//                                                                                                 </div>
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         ),
//                                                                     )}
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="action d-flex justify-content-between mt-2 align-items-center">
//                                                             <div class="icons align-items-center">
//                                                                 <i class="fa fa-star text-warning"></i>
//                                                                 <i class="fa fa-check-circle-o check-icon"></i>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div id="comment-section">
//                             <div class="container bootdey flex-grow-1 container-p-y">
//                                 <div class="bg-white p-4 ">
//                                     <div class="infor">
//                                         <div class="media align-items-center py-3 mb-3">
//                                             <div className="container">
//                                                 <div className="inputcmt">
//                                                     <div className="row">
//                                                         <div className="col-10">
//                                                             <div className="comment-box">
//                                                                 <div className="rating">
//                                                                     {[
//                                                                         ...Array(
//                                                                             5,
//                                                                         ),
//                                                                     ].map(
//                                                                         (
//                                                                             _,
//                                                                             index,
//                                                                         ) => (
//                                                                             <React.Fragment
//                                                                                 key={
//                                                                                     index
//                                                                                 }>
//                                                                                 <input
//                                                                                     type="radio"
//                                                                                     name="rating"
//                                                                                     value={
//                                                                                         5 -
//                                                                                         index
//                                                                                     }
//                                                                                     id={
//                                                                                         5 -
//                                                                                         index
//                                                                                     }
//                                                                                     onChange={
//                                                                                         handleRatingsChange
//                                                                                     }
//                                                                                 />
//                                                                                 <label
//                                                                                     htmlFor={
//                                                                                         5 -
//                                                                                         index
//                                                                                     }>
//                                                                                     ☆
//                                                                                 </label>
//                                                                             </React.Fragment>
//                                                                         ),
//                                                                     )}
//                                                                 </div>
//                                                                 <div className="comment-area">
//                                                                     <textarea
//                                                                         className="my-view"
//                                                                         placeholder="Viết phản hồi sau khi trải nghiệm nơi ở của bạn ... "
//                                                                         rows="4"
//                                                                         value={
//                                                                             comment
//                                                                         }
//                                                                         onChange={
//                                                                             handleCommentChange
//                                                                         }></textarea>
//                                                                 </div>
//                                                                 <div className="comment-btns mt-2">
//                                                                     <div className="mt-6 flex gap-6">
//                                                                         <Button
//                                                                             className="custom-button"
//                                                                             onClick={
//                                                                                 handleSubmit
//                                                                             }>
//                                                                             <span className="button-text">
//                                                                                 Đánh
//                                                                                 giá
//                                                                             </span>
//                                                                         </Button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div id="heading-section" className="class1">
//                             <div className="number-star">
//                                 <span className="class1">
//                                     <FontAwesomeIcon
//                                         icon={faStar}
//                                         className="text-pink-500"
//                                     />
//                                     {averageRating.toFixed(1)}
//                                 </span>
//                                 <br />
//                                 <span className="class1">
//                                     <FontAwesomeIcon
//                                         icon={faComment}
//                                         className="text-pink-500"
//                                     />
//                                     {totalReviews}{' '}
//                                 </span>
//                             </div>
//                         </div>

//                         <div id="stars-section" className="class2">
//                             <div className="container bootdey flex-grow-1 container-p-y">
//                                 <div className="bg-white p-4 ">
//                                     <div className="stars">
//                                         <div className="media align-items-center py-3 mb-3">
//                                             <div className="container">
//                                                 <div className="stars2">
//                                                     <div className="line-star">
//                                                         <div className="col-10">
//                                                             <div className="all-stars">
//                                                                 <div className="rightside">
//                                                                     <div className="col-md-7">
//                                                                         <div className="row-stars">
//                                                                             <div class="side">
//                                                                                 <div>
//                                                                                     5
//                                                                                     star
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="middle">
//                                                                                 <BarContainer
//                                                                                     percentage5Stars={
//                                                                                         percentage5Stars
//                                                                                     }>
//                                                                                     <div className="bar-5"></div>
//                                                                                 </BarContainer>
//                                                                             </div>
//                                                                             <div class="side right">
//                                                                                 <div>
//                                                                                     {
//                                                                                         starCounts[5]
//                                                                                     }
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row-stars">
//                                                                             <div class="side">
//                                                                                 <div>
//                                                                                     4
//                                                                                     star
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="middle">
//                                                                                 <BarContainer
//                                                                                     percentage4Stars={
//                                                                                         percentage4Stars
//                                                                                     }>
//                                                                                     <div className="bar-4"></div>
//                                                                                 </BarContainer>
//                                                                             </div>
//                                                                             <div class="side right">
//                                                                                 <div>
//                                                                                     {
//                                                                                         starCounts[4]
//                                                                                     }
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row-stars">
//                                                                             <div class="side">
//                                                                                 <div>
//                                                                                     3
//                                                                                     star
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="middle">
//                                                                                 <BarContainer
//                                                                                     percentage3Stars={
//                                                                                         percentage3Stars
//                                                                                     }>
//                                                                                     <div className="bar-3"></div>
//                                                                                 </BarContainer>
//                                                                             </div>
//                                                                             <div class="side right">
//                                                                                 <div>
//                                                                                     {
//                                                                                         starCounts[3]
//                                                                                     }
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row-stars">
//                                                                             <div class="side">
//                                                                                 <div>
//                                                                                     2
//                                                                                     star
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="middle">
//                                                                                 <BarContainer
//                                                                                     percentage2Stars={
//                                                                                         percentage2Stars
//                                                                                     }>
//                                                                                     <div className="bar-2"></div>
//                                                                                 </BarContainer>
//                                                                             </div>
//                                                                             <div class="side right">
//                                                                                 <div>
//                                                                                     {
//                                                                                         starCounts[2]
//                                                                                     }
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row-stars">
//                                                                             <div class="side">
//                                                                                 <div>
//                                                                                     1
//                                                                                     star
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="middle">
//                                                                                 <BarContainer
//                                                                                     percentage1Star={
//                                                                                         percentage1Star
//                                                                                     }>
//                                                                                     <div className="bar-1"></div>
//                                                                                 </BarContainer>
//                                                                             </div>
//                                                                             <div class="side right">
//                                                                                 <div>
//                                                                                     {
//                                                                                         starCounts[1]
//                                                                                     }
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
