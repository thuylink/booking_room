'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useProduct } from '../../../hooks/product'
import { useCategory } from '../../../hooks/category'
import { useCart } from '../../../hooks/cart'
import { Card, CardBody } from '@nextui-org/card'
import './style_dashboard.scss'
import { Button } from '@nextui-org/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    const { product, error } = useProduct()
    const { category } = useCategory()
    const [searchValue, setSearchValue] = useState('')
    const { addToCart } = useCart()
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleClickCategory = name_category => {
        setSelectedCategory(name_category)
    }

    if (category && category.length > 0) {
        category.forEach(categoryItem => {
            if (categoryItem && categoryItem.length > 0) {
                categoryItem.forEach(item => {
                    // console.log('item_name:', item.name_category)
                })
            }
            // console.log('length', category.length)
        })
    }

    if (product && product.length > 0) {
        const show = product.map(test => {
            if (category && category.length > 0) {
                const foundCategory = category[0].find(
                    item => item.id === test.id_category,
                )
                if (foundCategory) {
                    test.name_category = foundCategory.name_category
                }
            }
            return test
        })
    }

    const handleAddToCart = async id_product => {
        try {
            await addToCart(id_product)
            console.log('Đã thêm sản phẩm vào giỏ hàng')
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error)
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const filteredProducts = product?.filter(product =>
        product.location.toLowerCase().includes(searchValue.toLowerCase()),
    )

    const filteredProductsAll =
        filteredProducts && filteredProducts.length > 0
            ? filteredProducts.filter(product => {
                  if (!selectedCategory) {
                      return true
                  }
                  return product.name_category === selectedCategory
              })
            : []

    return (
        <div className="al">
            <Navbar>
                <NavbarBrand>
                    <Link href="/dashboard" passHref>
                        <p className="font-bold text-inherit">BNB</p>
                    </Link>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center">
                </NavbarContent>
                <NavbarContent className="timkiem">
                    <NavbarItem>
                        <form className="timkiem">
                            <input
                                type="text"
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                placeholder="Tìm kiếm theo địa chỉ..."
                                className="timkiem border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </form>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Link href={`/all-cart`} passHref>
                            <Button className="yeu bg-pink-500">
                                <span className="yeu1 text-white cursor-pointer active:opacity-50">
                                    Danh sách yêu thích
                                </span>
                            </Button>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <div className="category-slider-wrapper">
    <Slider {...settings}>
                    {category &&
                        category.length > 0 &&
                        category.flatMap(categoryItem => {
                            if (categoryItem && categoryItem.length > 0) {
                                return categoryItem.map(item => (
                                    <h1
                                        key={item.name_category}
                                        className="nav-item"
                                        onClick={() =>
                                            handleClickCategory(item.name_category)
                                        }>
                                        {item.name_category}
                                    </h1>
                                ))
                            }
                            return null
                        })}
                </Slider>
            </div>

            
            <div className="sticky-element"></div>

            <div className="other-elements">
                <div className="grid grid-cols-4 gap-21">
                    {filteredProductsAll?.map(product => (
                        <section key={product.id} className="py-36">
                            <div className="container flex items-center justify-center">
                                <Card className="py-4 lg:w-3/4 xl:w-1/2">
                                    <CardBody className="overflow-visible py-2">
                                        <div className="flex flex-col-reverse gap-4">
                                            <div className="right">
                                                <h2 className="text-lg font-bold uppercase">
                                                    {product.location}
                                                </h2>

                                                <div className="mb-6 mt-2 flex gap-3">
                                                    <span className="font-bold">
                                                        Gía tiền:{' '}
                                                        {product.price}
                                                    </span>
                                                </div>
                                                <div className="mb-6 mt-2 flex gap-3">
                                                    <span className="font-bold">
                                                        Kiểu kiến trúc:{' '}
                                                        {product.name_category}
                                                    </span>
                                                </div>
                                                <div className="mt-6 flex gap-6">
                                                    <Link
                                                        href={`/show-product/${product.id}`}
                                                        passHref>
                                                        <Button className="ml-4 bg-pink-500">
                                                            <span className="text-lg text-white cursor-pointer active:opacity-50">
                                                                Xem Chi Tiết
                                                            </span>
                                                        </Button>
                                                    </Link>

                                                    <Button
                                                        className="custom-button"
                                                        onClick={() => {
                                                            handleAddToCart(
                                                                product.id,
                                                            )
                                                        }}>
                                                        <FontAwesomeIcon
                                                            icon={faHeart}
                                                            className="heart-icon"
                                                        />

                                                        <span className="button-text">
                                                            Yêu thích
                                                        </span>
                                                    </Button>
                                                </div>
                                            </div>

                                            {product.image &&
                                                Array.isArray(
                                                    JSON.parse(product.image),
                                                ) && (
                                                    <>
                                                        {JSON.parse(
                                                            product.image,
                                                        )
                                                            .slice(0, 1)
                                                            .map(
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
                                                                        <img
                                                                            key={
                                                                                index
                                                                            }
                                                                            src={
                                                                                imagePath
                                                                            }
                                                                            alt="Image"
                                                                            width="270px"
                                                                            height="200px"
                                                                            className="rounded-image"
                                                                        />
                                                                    )
                                                                },
                                                            )}
                                                    </>
                                                )}
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </section>
                    ))}
                </div>{' '}
            </div>
        </div>
    )
}

export default Dashboard
