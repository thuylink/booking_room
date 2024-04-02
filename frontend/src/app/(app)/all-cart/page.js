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

    const handleDelete = async (id) => {
        try {
            // Gọi hàm deleteCartById từ hook useCart để xóa sản phẩm khỏi danh sách yêu thích
            await deleteCartById(id)
            
            // Sau khi xóa thành công, cập nhật danh sách yêu thích bằng cách gọi mutate
            mutate()
        } catch (error) {
            console.error('Lỗi:', error)
        }
    }

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
                                        <h2 className="text-lg font-bold uppercase">
                                            {product.location}
                                        </h2>

                                        <div className="mb-6 mt-2 flex gap-3">
                                            <span className="font-bold">
                                                ID Product: {product.id_product}
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

