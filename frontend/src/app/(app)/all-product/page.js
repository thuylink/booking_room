'use client'

import { useEffect, useState } from 'react'
import { useProduct } from '../../../hooks/product'
import './all_product_css.css'

const AllProduct = () => {
    const { product, error, getAllProducts } = useProduct()

    useEffect(() => {
        getAllProducts()
    }, [])

    if (error) {
        return <div>{error}</div>
    }

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Danh sách các nhà đã được tạo</h1>
            <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th className="border">STT</th>
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
                        <th className="border">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product, index) => (
                        <tr
                            key={product.id}
                            style={{ border: '1px solid black' }}>
                            <td className="border">{index + 1}</td>
                            <td className="border">{product.title}</td>
                            <td className="border">{product.id_product}</td>
                            <td className="border">{product.privacy_type}</td>
                            <td className="border">{product.location}</td>
                            <td className="border">{product.capacity}</td>

                            <td className="border">{product.amenities}</td>
                            <td className="border">
                                <img
                                    src={`product/${product.image}`}
                                    alt="Image"
                                    style={{ width: '100px', height: '100px' }}
                                />
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
                            <td className="border">
                                <button
                                    onClick={() =>
                                        handleViewDetail(product.id)
                                    }>
                                    Xem chi tiết
                                </button>
                                <br />
                                <button onClick={() => handleEdit(product.id)}>
                                    Chỉnh sửa
                                </button>
                                <br />
                                <button
                                    onClick={() => handleDelete(product.id)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllProduct
