'use client'

import React, { useEffect, useState } from 'react'
import { useProduct, getProductById } from '../../../../hooks/product'
import '../show_product_css.scss'
import { Pannellum } from 'pannellum-react'

import Image from 'next/image'

import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'

export const ProductDetailWithPannellum = () => {
    const id = window.location.pathname.split('/').pop()
    const { getProductById, error } = useProduct()
    const [product, setProduct] = useState(null)
    const [showImage360, setShowImage360] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductById(id)
                setProduct(response)
                if (response.image360) {
                    setShowImage360(true)
                }
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchProduct()
    }, [getProductById, id])

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!product) {
        return <div>Loading...</div>
    }

    const productFields = Object.keys(product)

    return (
        <div className="container">
            <div className="left-section">
                <div>
                    <Button color="primary">Chi tiết sản phẩm {id}</Button>
                    {productFields.map(field => (
                        <p key={field}></p>
                    ))}
                </div>
                <div>
                    <table style={{ borderCollapse: 'collapse' }}>
                        {/* ... */}
                    </table>
                </div>
            </div>
            <div className="right-section">
                <section className="py-36">
                    <Card className="py-4 lg:w-3/4 xl:w+3/2">
                        <CardBody className="overflow-visible py-2">
                            <div className="flex gap-6">
                                <div className="flex gap-6">
                                    <div className="flex-1">
                                        {product.image &&
                                            Array.isArray(
                                                JSON.parse(product.image),
                                            ) &&
                                            JSON.parse(product.image).map(
                                                (image, index) => {
                                                    const cleanedImagePath = image.replace(
                                                        /[\[\]"]/g,
                                                        '',
                                                    )
                                                    const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`

                                                    return (
                                                        <img
                                                            key={index}
                                                            src={imagePath}
                                                            alt="Image"
                                                            width="300px"
                                                            height="170px"
                                                        />
                                                    )
                                                },
                                            )}
                                    </div>

                                    <div className="flex-1">
                                        {product.image360 &&
                                            Array.isArray(
                                                JSON.parse(product.image360),
                                            ) &&
                                            JSON.parse(product.image360).map(
                                                (image360, index) => {
                                                    const cleanedImage360Path = image360.replace(
                                                        /[\[\]"]/g,
                                                        '',
                                                    )
                                                    const image360Path = `data:image/png;base64,${cleanedImage360Path}`
                                                    console.log(
                                                        'image360',
                                                        image360Path,
                                                    )

                                                    return (
                                                        showImage360 && (
                                                            <Pannellum
                                                                key={index}
                                                                width="500px"
                                                                height="300px"
                                                                image={
                                                                    image360Path
                                                                }
                                                                pitch={10}
                                                                yaw={180}
                                                                hfov={110}
                                                                autoLoad
                                                                alt="image360"
                                                            />
                                                        )
                                                    )
                                                },
                                            )}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold uppercase">
                                        {product.title}
                                    </h2>

                                    <div className="mb-6 mt-2 flex gap-3">
                                        <span className="font-bold">
                                            <td className="text-sm text-smborder">
                                                Tiện ích:
                                            </td>
                                        </span>

                                        <p className="text-default-500">
                                            {' '}
                                            {product.amenities}
                                        </p>
                                    </div>

                                    <div className="mb-6 mt-2 flex gap-3">
                                        <span className="font-bold">
                                            <td className="text-sm text-smborder">
                                                Phạm vi sử dụng:
                                            </td>
                                        </span>

                                        <p className="text-default-500">
                                            {' '}
                                            {product.privacy_type}
                                        </p>
                                    </div>

                                    <div className="mb-6 mt-2 flex gap-3">
                                        <span className="font-bold">
                                            <td className="text-sm text-smborder">
                                                Địa chỉ:
                                            </td>
                                        </span>

                                        <p className="text-default-500">
                                            {' '}
                                            {product.location}
                                        </p>
                                    </div>

                                    <div className="mb-6 mt-2 flex gap-3">
                                        <span className="font-bold">
                                            <td className="text-sm text-smborder">
                                                Sức chứa:
                                            </td>
                                        </span>

                                        <p className="text-default-500">
                                            {' '}
                                            {product.capacity}
                                        </p>
                                    </div>

                                    <div className="mb-6 mt-2 flex gap-3">
                                        <span className="font-bold">
                                            <td className="text-sm text-smborder">
                                                Mô tả:
                                            </td>
                                        </span>
                                        {product.description}
                                    </div>

                                    <div>
                                        <span className="font-bold">
                                            <td className="text-sm text-smborder">
                                                Chi phí:
                                            </td>
                                        </span>
                                        <span
                                            className="text-success"
                                            style={{ marginLeft: '0.5em' }}>
                                            {product.price} VNĐ
                                        </span>
                                    </div>

                                    <div className="mt-6 flex gap-6">
                                        <Button color="primary">
                                            Đánh giá
                                        </Button>
                                        <Button
                                            className="book"
                                            variant="bordered"
                                            radius="full"
                                            style={{ borderColor: '#ff385c' }}>
                                            Đặt phòng
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </section>
            </div>
        </div>
    )

    return (
        <div>
            <h2>Chi tiết sản phẩm {id}</h2>
            {productFields.map(field => (
                <p key={field}></p>
            ))}
            <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th className="border">ID</th>
                        <th className="border">Tiêu đề</th>
                        <th className="border">Kiểu kiến trúc</th>
                        <th className="border">Phạm vi sử dụng</th>
                        <th className="border">Địa chỉ</th>
                        <th className="border">Sức chứa</th>
                        <th className="border">Tiện ích</th>
                        <th className="border">Ảnh</th>
                        <th className="border">Ảnh 360</th>
                        <th className="border">Mô tả</th>
                        <th className="border">Chi phí</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={product.id} style={{ border: '1px solid black' }}>
                        <td className="border">{product.id}</td>
                        <td className="border">{product.title}</td>
                        <td className="border">{product.id_product}</td>
                        <td className="border">{product.privacy_type}</td>
                        <td className="border">{product.location}</td>
                        <td className="border">{product.capacity}</td>
                        <td className="border">{product.amenities}</td>
                        <td className="border">
                            {product.image &&
                                Array.isArray(JSON.parse(product.image)) && (
                                    <>
                                        {JSON.parse(product.image).map(
                                            (image, index) => {
                                                const cleanedImagePath = image.replace(
                                                    /[\[\]"]/g,
                                                    '',
                                                )
                                                const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`

                                                return (
                                                    <img
                                                        key={index}
                                                        src={imagePath}
                                                        alt="Image"
                                                        width="100px"
                                                        height="70px"
                                                    />
                                                )
                                            },
                                        )}
                                    </>
                                )}
                        </td>

                        <td className="border360">
                            {product.image360 &&
                                Array.isArray(JSON.parse(product.image360)) &&
                                JSON.parse(product.image360).map(
                                    (image360, index) => {
                                        const cleanedImage360Path = image360.replace(
                                            /[\[\]"]/g,
                                            '',
                                        )
                                        const image360Path = `data:image/png;base64,${cleanedImage360Path}`
                                        console.log('image360', image360Path)

                                        return (
                                            showImage360 && (
                                                <Pannellum
                                                    key={index}
                                                    width="100%"
                                                    height="300px"
                                                    image={image360Path}
                                                    pitch={10}
                                                    yaw={180}
                                                    hfov={110}
                                                    autoLoad
                                                    alt="image360"
                                                />
                                            )
                                        )
                                    },
                                )}
                        </td>

                        <td className="border">{product.description}</td>
                        <td className="border">{product.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetailWithPannellum
