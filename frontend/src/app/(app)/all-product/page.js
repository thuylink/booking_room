'use client'

import { useProduct } from '../../../hooks/product'
import './all_product_css.scss'
import Link from 'next/link'
import Button from '@/components/Button'
import { useState } from 'react'

const AllProduct = () => {
    const { product, error } = useProduct()
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [filteredProduct, setFilteredProduct] = useState([])
    
    const handleDelete = async id => {
        try {
            await deleteProductById(id)
            mutate()
        } catch (error) {
            console.error('Lỗi:', error)
        }
    }
    if (error) {
        return <div>{error}</div>
    }

    if (!product) {
        return <div>Loading...</div>
    }

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }
    const handleSubmit = async event => {
        event.preventDefault()
        try {
            let result = []
            if (searchTerm === '') {
                result = product
            } else {
                result = product.filter(product =>
                    product.location.includes(searchTerm),
                )
            }
            setFilteredProduct(result)
        } catch (error) {
            console.error('Lỗi:', error)
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Tìm kiếm theo địa chỉ nhà"
                        className="formsearch"
                    />
                    <button type="submit" >Tìm kiếm</button>
                </form>
            </div>
            <div>
                <Link
                    href={`/add-product`}
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    <Button className="add">Thêm mới nhà</Button>
                </Link>
            </div>

            <table className="large">
                <thead>
                    <tr>
                        <th className="border borderSTT">STT</th>
                        <th className="border borderID">ID</th>
                        <th className="border borderTitle ">Tiêu đề</th>
                        <th className="border borderCate ">Kiểu kiến trúc</th>
                        <th className="border borderpv">Phạm vi sử dụng</th>
                        <th className="border">Địa chỉ</th>
                        <th className="border borderCapa ">Sức chứa</th>

                        <th className="border">Tiện ích</th>
                        <th className="border">Ảnh</th>
                        <th className="border">Ảnh 360</th>
                        <th className="border">Mô tả</th>
                        <th className="border">Chi phí</th>
                        <th className="border">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {(searchTerm === '' ? product : filteredProduct).map(
                        (product, index) => (
                        <tr
                            key={product.id}
                            style={{ border: '1px solid black' }}>
                            <td className="border">{index + 1}</td>
                            <td className="border">{product.id}</td>

                            <td className="border">{product.title}</td>
                            <td className="border">{product.id_product}</td>
                            <td className="border">{product.privacy_type}</td>
                            <td className="border">{product.location}</td>
                            <td className="border">{product.capacity}</td>
                            <td className="border">{product.amenities}</td>
                            <td className="border">
                                {product.image &&
                                    Array.isArray(
                                        JSON.parse(product.image),
                                    ) && (
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
                            <td className="border">
                                {product.image360 &&
                                    Array.isArray(
                                        JSON.parse(product.image360),
                                    ) && (
                                        <>
                                            {JSON.parse(product.image360).map(
                                                (image360, index) => {
                                                    const cleanedImage360Path = image360.replace(
                                                        /[\[\]"]/g,
                                                        '',
                                                    )
                                                    const image360Path = `http://127.0.0.1:8000/uploads/product360/${cleanedImage360Path}`

                                                    return (
                                                        <img
                                                            key={index}
                                                            src={image360Path}
                                                            alt="Image360"
                                                            width="100px"
                                                            height="70px"
                                                        />
                                                    )
                                                },
                                            )}
                                        </>
                                    )}
                            </td>
                            <td className="border">{product.description}</td>
                            <td className="border">{product.price}</td>
                            <td className="border">
                                <div>
                                    <Link
                                        href={`/show-product/${product.id}`}
                                        className="underline text-sm text-gray-600 hover:text-gray-900">
                                        <Button className="ml-4">
                                            Xem chi tiết
                                        </Button>
                                    </Link>
                                </div>

                                <div>
                                    <Link
                                        href={`/update-product/${product.id}`}
                                        className="underline text-sm text-gray-600 hover:text-gray-900">
                                        <Button className="ml-4">
                                            Chỉnh sửa
                                        </Button>
                                    </Link>
                                </div>
                                <div>
                                    <Button
                                        className="ml-4"
                                        onClick={() =>
                                            handleDelete(product.id)
                                        }>
                                        Xóa
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <blockquote>Responsive Table</blockquote>
        </div>
    )
}

export default AllProduct
