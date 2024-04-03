'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useProduct } from '../../../hooks/product'
import { useCategory } from '../../../hooks/category'
import { useCart } from '../../../hooks/cart'; 
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
    const { addToCart } = useCart();
    


    if (category && category.length > 0) {
        category.forEach(categoryItem => {
            if (categoryItem && categoryItem.length > 0) {
                categoryItem.forEach(item => {
                    console.log('item_name:', item.name_category)
                })
            }
            console.log('length', category.length)
        })
    }
    const handleSearchSubmit = e => {
        e.preventDefault()
        const filtered = product?.filter(product =>
            product.location.toLowerCase().includes(searchValue.toLowerCase()),
        )
        setFilteredProducts(filtered)
    }

    const handleAddToCart = async (id_product) => {
        try {
            await addToCart(id_product); // Gọi hàm addToCart từ hook useCart để thêm sản phẩm vào giỏ hàng
            console.log('Đã thêm sản phẩm vào giỏ hàng');
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
        }
    };

    if (error) {
        return <div>Error loading products</div>
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 5,
    }

    const filteredProducts = product?.filter(product =>
        product.location.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
        <div className="al">
            <Navbar>
                <NavbarBrand>
                    <p className="font-bold text-inherit">BNB</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"></NavbarContent>
                <NavbarContent className="timkiem">
                    <NavbarItem>
                        <form className="timkiem" onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                placeholder="Tìm kiếm..."
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

            <Slider {...settings}>
                {category &&
                    category.length > 0 &&
                    category.flatMap(categoryItem => {
                        if (categoryItem && categoryItem.length > 0) {
                            return categoryItem.map(item => {
                                console.log('item_name:', item.name_category)
                                return (
                                    <Link
                                        key={item.name_category}
                                        href={`/category/${item.name_category}`}
                                        passHref>
                                        <h1 className="nav-item">
                                            {item.name_category}
                                        </h1>
                                    </Link>
                                )
                            })
                        }
                        return null
                    })}
            </Slider>

            <div className="sticky-element"></div>

            <div className="other-elements">
                <div className="grid grid-cols-4 gap-21">
                    {filteredProducts?.map(product => (
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
                                                        onClick={() =>
                                                            handleAddToCart(product.id)
                                                        }>
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
