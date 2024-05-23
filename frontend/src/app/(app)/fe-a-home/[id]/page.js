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

export const ProductDetailWithPannellum = (product) => {
    const { user } = useAuth({ middleware: 'guest' })
    // const id = window.location.pathname.split('/').pop()
    const { getProductById, error } = useProduct()

    // const { product } = useProduct()
    const [product2, setProduct2] = useState(null)
    const [showImage360, setShowImage360] = useState(false)
    const [showImageGallery, setShowImageGallery] = useState(false)
    const { category } = useCategory()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductById(product.productId)
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
        return <div>Chủ nhà chờ để xem chi tiết nhà...</div>
    }

    const productFields = Object.keys(product2)
    if (category && category.length > 0) {
        const found = category[0].find(item => item.id === product2.id_category)
        product2.name_category = found.name_category
    }
    return (
        <div className="container">
            
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
                <Card className="py-4ahome lg:w-3/4 xl:w-1/2">
                    <CardBody className="overflow-visible py-2">
                        <div className="flex flex-col-reverse gap-6">
                            <div className="right">
                                <div className="grid grid-cols-2 gap-4">

                                    <div className="rightCol">
                                        <table className="info-table">
                                            <tbody>
                                            <tr>
                                                    <th className="pink-cell">
                                                        <span className="text-lg1 text-black cursor-pointer active:opacity-50">
                                                            Hình ảnh
                                                        </span>
                                                    </th>

                                                    <td>
                                                        <div className="highlighted-boxahome">
                                                        {product2.image &&
                                                            Array.isArray(
                                                                JSON.parse(
                                                                    product2.image,
                                                                ),
                                                            ) && (
                                                                <Slider
                                                                    slidesToShow={5}>
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
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="pink-cell">
                                                        <span className="text-lg1 text-black cursor-pointer active:opacity-50">
                                                            Hình ảnh 360
                                                        </span>
                                                    </th>

                                                    <td>
                                                        <div className="highlighted-boxahome">
                                                        {product2.image360 &&
                                                            Array.isArray(
                                                                JSON.parse(
                                                                    product2.image360,
                                                                ),
                                                            ) && (
                                                                <Slider
                                                                    slidesToShow={
                                                                        2
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
                                                                                    } 
                                                                                >
                                                                                    <Pannellum
                                                                                        width="200px" 
                                                                                        height="100px" 
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
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="pink-cell">
                                                        <span className="text-lg1 text-black cursor-pointer active:opacity-50">
                                                            Mô tả
                                                        </span>
                                                    </th>

                                                    <td>
                                                        <div className="highlighted-boxahome">
                                                            {product2.description.replace(
                                                                /<\/?p>/g,
                                                                '',
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        <span className="text-lg1 text-black cursor-pointer active:opacity-50">
                                                            Phạm vị sử dụng
                                                        </span>
                                                    </th>

                                                    <td>
                                                        <div className="highlighted-boxahome">
                                                            {product2.privacy_type}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Địa chỉ
                                                    </th>
                                                    <td>
                                                        <div className="highlighted-boxahome">
                                                            {product2.location}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Chi phí
                                                    </th>

                                                    <td>
                                                        <div className="highlighted-boxahome">
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
                                                        <div className="highlighted-boxahome">
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
                                                        <div className="highlighted-boxahome">
                                                            {
                                                                product2.name_category
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Số lượt truy cập
                                                    </th>
                                                    <td>
                                                        <div className="highlighted-boxahome">
                                                            {
                                                                product2.view_count
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="pink-cell">
                                                        Tiện ích
                                                    </th>
                                                    <td>
                                                        <div className="highlighted-boxahome">
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
