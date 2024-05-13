'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { incrementViewCount, useProduct } from '../../../hooks/product'
import { useCategory } from '../../../hooks/category'
import { useRating } from '../../../hooks/rating'
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
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '@/hooks/auth'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { deleteCartById } from '../../../hooks/cart'

const Dashboard = () => {
    return (
        <div className="al">
           

            <div className="sticky-element"></div>

            <div className="other-elements">
                <div className="grid grid-cols-4 gap-21">
                    {filteredProductsAll
                        ?.sort((a, b) => b.id - a.id)
                        .map(product => (
                            <section key={product.id} className="py-36">
                                <div className="container flex items-center justify-center">
                                    <Card className="py-4 lg:w-3/4 xl:w-1/2">
                                        <CardBody className="overflow-visible py-2">
                                            <div className="flex flex-col-reverse gap-4">
                                                <div className="right">
                                                    <h2 className="text-lg font-bold uppercase">
                                                        {product.location}
                                                    </h2>

                                                    <div className=" gia mb-6 mt-2 flex gap-3">
                                                        {product.price} VNĐ/đêm
                                                    </div>

                                                    <div className=" mb-6 mt-2 flex gap-3"></div>

                                                    <div className="mt-6 flex gap-6">
                                                        <span
                                                            onClick={() => {
                                                                if (
                                                                    favoriteStatus[
                                                                        product
                                                                            .id
                                                                    ]
                                                                ) {
                                                                    handleDelete(
                                                                        product.id,
                                                                    )
                                                                } else {
                                                                    handleAddToCart(
                                                                        product.id,
                                                                        user.id,
                                                                    )
                                                                }
                                                            }}>
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    favoriteStatus[
                                                                        product
                                                                            .id
                                                                    ]
                                                                        ? faHeartBroken
                                                                        : faHeart
                                                                }
                                                            />
                                                        </span>
                                                    </div>
                                                </div>

                                                {product.image &&
                                                    Array.isArray(
                                                        JSON.parse(
                                                            product.image,
                                                        ),
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
                                                                            <a
                                                                                href={`/show-product/${product.id}`}
                                                                                key={
                                                                                    index
                                                                                }>
                                                                                onClick
                                                                                {() =>
                                                                                    handleViewProduct(
                                                                                        product.id,
                                                                                    )
                                                                                }
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
                                                                            </a>
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
