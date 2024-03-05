'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../../hooks/product'

const ProductDetailPage = () => {
    const { id } = useParams()
    const { getProductById, error } = useProduct()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }, [getProductById, id])

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!product) {
        return <div>Loading...</div>
    }

    const productFields = Object.keys(product)

    return (
        <div>
            <h2>Chi tiết sản phẩm {id}</h2>
            {productFields.map(field => (
                <p key={field}>
                    {field}: {product[field]}
                </p>
            ))}
            <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
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
                                            (image, index) => (
                                                <img
                                                    key={index}
                                                    src={`uploads/product/${image}`}
                                                    alt=""
                                                    width="70px"
                                                    height="70px"
                                                />
                                            ),
                                        )}
                                    </>
                                )}
                        </td>
                        <td className="border">
                            <img
                                src={`product360/${product.image360}`}
                                alt="Image 360"
                                style={{ width: '100px', height: '100px' }}
                            />
                        </td>
                        <td className="border">{product.description}</td>
                        <td className="border">{product.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetailPage
