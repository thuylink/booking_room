'use client'

import React, { useEffect, useState } from 'react'
import { useProduct } from '../../../../hooks/product'
import { useCart } from '../../../../hooks/cart'
import { useCategory } from '@/hooks/category'
import '../a-home.scss'
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
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const ProductDetailWithPannellum = () => {
    const { user } = useAuth({ middleware: 'guest' })
    const id = window.location.pathname.split('/').pop()
    const { getProductById, error } = useProduct()

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

    const [selectedImage, setSelectedImage] = useState(null) // State để lưu trữ URL của ảnh được chọn

    const handleImageClick = imagePath => {
        setSelectedImage(imagePath) // Cập nhật state với URL của ảnh được chọn
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
    // if (category && category.length > 0) {
    //     const found = category[0].find(item => item.id === product2.id_category)
    //     product2.name_category = found.name_category
    // }

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
                                        <>
                                        {selectedImage && (
                                            <div className="popup">
                                                <img
                                                    src={selectedImage}
                                                    alt="Selected Image"
                                                    style={{
                                                        width: '600px', // Kích thước width mong muốn
                                                        minHeight: '350px',
                                                        minWidth: '600px',
                                                        maxHeight: '350px',
                                                        maxWidth: '600px',
                                                        height: '350px', // Kích thước height mong muốn
                                                        overflow: 'hidden', // Tránh tràn ra nếu ảnh quá lớn
                                                    }}
                                                />
                                                <button className="close-button" onClick={() => setSelectedImage(null)}>   
                                                <FontAwesomeIcon icon={faTimes} 
                                                className="times-icon"
                                                />
                                                </button>
                                            </div>
                                        )}
                                    
                                        {product2.image &&
                                            Array.isArray(JSON.parse(product2.image)) && (
                                                <Slider slidesToShow={5}>
                                                    {JSON.parse(product2.image).map((image, index) => {
                                                        const cleanedImagePath = image.replace(/[\[\]"]/g, '');
                                                        const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`;
                                    
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="rounded-lg mb-4"
                                                                style={{
                                                                    marginRight: '10px',
                                                                    width: '50px', // Kích thước width mong muốn
                                                                    minHeight: '50px',
                                                                    minWidth: '50px',
                                                                    maxHeight: '50px',
                                                                    maxWidth: '50px',
                                                                    height: '50px', // Kích thước height mong muốn
                                                                    overflow: 'hidden', // Tránh tràn ra nếu ảnh quá lớn
                                                                }}
                                                            >
                                                            <img
                                                            src={imagePath}
                                                            alt="Image"
                                                            width="100%"
                                                            height="100%"
                                                            className="rounded-lg"
                                                            style={{
                                                                marginRight: '10px',
                                                            width: '50px', // Kích thước width mong muốn
                                                            minHeight:'100px',
                                                            minWidth:'100px',
                                                            maxHeight:'100px',
                                                            maxWidth:'100px',
                                                            height: '100px', // Kích thước height mong muốn
                                                            overflow: 'hidden', // Tránh tràn ra nếu ảnh quá lớn
                                                                cursor: 'pointer',
                                                                objectFit: 'cover', // Đảm bảo ảnh điều chỉnh kích thước mà vẫn giữ tỷ lệ khung hình
                                                            }}
                                                            onClick={() => handleImageClick(imagePath)}
                                                        />
                                                            </div>
                                                        );
                                                    })}
                                                </Slider>
                                            )}
                                    </>
                                    
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
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ProductDetailWithPannellum
