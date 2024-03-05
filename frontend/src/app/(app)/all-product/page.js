'use client'

import { useProduct } from '../../../hooks/product'
import './all_product_css.scss'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/Button'

const AllProduct = () => {
    const { product, error } = useProduct()

    const router = useRouter()

    const handleViewDetail = () => {
        window.location.href = `/show-product/${product.id}`
    }
    if (error) {
        return <div>{error}</div>
    }

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <table className='large'>
                <thead>
                    <tr>
                    <th className="border borderSTT" >STT</th>                        
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
                    {product.map((product, index) => (
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
                                                    // const imagePath = `C:/wamp64/www/booking_room/backend/public/uploads/product/${cleanedImagePath}`;
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
                                                    // const imagePath = `C:/wamp64/www/booking_room/backend/public/uploads/product/${cleanedImagePath}`;
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
                                        <Button className="ml-4" >
                                            Xem chi tiết
                                        </Button>
                                    </Link>
                                </div>

                                <div>
                                    <Link
                                        href="/"
                                        className="underline text-sm text-gray-600 hover:text-gray-900">
                                        <Button className="ml-4">
                                            Chỉnh sửa
                                        </Button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="/"
                                        className="underline text-sm text-gray-600 hover:text-gray-900">
                                        <Button className="ml-4">Xóa</Button>
                                    </Link>
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

