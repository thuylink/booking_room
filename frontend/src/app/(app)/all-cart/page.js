'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useProduct } from '../../../hooks/product'
import { useCategory } from '../../../hooks/category'
import { useCart } from '../../../hooks/cart'
import { Card, CardBody } from '@nextui-org/card'
import '../../(app)/dashboard/style_dashboard.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Navbar, NavbarContent, Button } from '@nextui-org/react'
import { deleteCartById } from '../../../hooks/cart'
const Dashboard = () => {
    const { cart, mutate } = useCart()
    const { product, error } = useProduct()
    const { category } = useCategory()
    const [favoriteStatus, setFavoriteStatus] = useState({});


    

    if (product && product.length > 0) {
        product.forEach(productItem => {
            if (productItem && productItem.length > 0) {
                productItem.forEach(item => {
                    console.log('item_product:', item.location)
                })
            }
            // console.log('length', category.length)
        })
    }
    console.log('product trong cart', product)

    if (cart && cart.length > 0) {
        const show = cart.map(test => {
            // Tìm phần tử trong mảng product
            if (product && product.length > 0) {
            const foundProduct = 
            product.find(item => item.id === test.id_product);
        
            // Nếu tìm thấy phần tử trong product
            if (foundProduct) {
                // Lấy tên của phần tử tìm thấy và thêm vào đối tượng product
                test.location = foundProduct.location; 
                test.price = foundProduct.price; 
                test.image = foundProduct.image; 

            }
        }
            return test;
        });
        
    }

    const handleDelete = async (id) => {
        try {
            await deleteCartById(id); // Xóa sản phẩm khỏi danh sách all-cart
            const updatedFavorites = { ...favoriteStatus };
            delete updatedFavorites[id]; // Xóa sản phẩm khỏi danh sách yêu thích
            setFavoriteStatus(updatedFavorites); // Cập nhật lại danh sách yêu thích
            mutate(); // Cập nhật lại giao diện
        } catch (error) {
            console.error('Lỗi:', error)
        }
    };

    return (
        <div className="grid grid-cols-4 gap-2">
            {' '}
            {cart?.map(product => (
                <section key={product.id} className="py-36">
                    <div className="container flex items-center justify-center">
                        <Card className="py-4 lg:w-3/4 xl:w-1/2">
                            <CardBody className="overflow-visible py-2">
                                <div className="flex flex-col-reverse gap-4">
                                    {' '}
                                    <div className="right">
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
                                                        Xem
                                                    </span>
                                                </Button>
                                            </Link>

                                            <Button
                                                className="unlike"
                                                onClick={() =>
                                                    handleDelete(product.id)
                                                }>
                                                <span className="button-text">
                                                    Xóa khỏi yêu thích
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Dashboard

