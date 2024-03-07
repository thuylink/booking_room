'use client'

import { useCategory } from '../../../hooks/category'
import './all_category_css.scss'
import Link from 'next/link'
import Button from '@/components/Button'

const AllCategory = () => {
    const { category, error } = useCategory()

    if (error) {
        return <div>{error}</div>
    }

    if (!category) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <table className="large">
                <thead>
                    <tr>
                        <th className="border borderSTT">STT</th>
                        <th className="border borderID">ID</th>
                        <th className="border borderTitle ">Tên</th>
                        <th className="border">Ảnh</th>
                        <th className="border">Ảnh 360</th>
                        <th className="border">Trạng thái</th>
                        <th className="border">Thao tác</th>

                    </tr>
                </thead>
                <tbody>
                    {category.map((category, index) => (
                        <tr
                            key={category.id}
                            style={{ border: '1px solid black' }}>
                            <td className="border">{index + 1}</td>
                            <td className="border">{category.id}</td>

                            <td className="border">{category.name_category}</td>

                            <td className="border">
                                {category.image &&
                                    (() => {
                                        try {
                                            const parsedImage = JSON.parse(
                                                category.image,
                                            )

                                            if (Array.isArray(parsedImage)) {
                                                return (
                                                    <>
                                                        {parsedImage.map(
                                                            (image, index) => {
                                                                const cleanedImagePath = image.replace(
                                                                    /[\[\]"]/g,
                                                                    '',
                                                                )
                                                                const imagePath = `http://127.0.0.1:8000/uploads/category/${cleanedImagePath}`

                                                                return (
                                                                    <img
                                                                        key={
                                                                            index
                                                                        }
                                                                        src={
                                                                            imagePath
                                                                        }
                                                                        alt="Image"
                                                                        width="100px"
                                                                        height="70px"
                                                                    />
                                                                )
                                                            },
                                                        )}
                                                    </>
                                                )
                                            }
                                        } catch (error) {
                                            console.error(
                                                'Error parsing JSON:',
                                                error,
                                            )
                                        }
                                    })()}
                            </td>

                            <td className="border">
                                {category.image360 &&
                                    (() => {
                                        try {
                                            const parsedImage360 = JSON.parse(
                                                category.image360,
                                            )

                                            if (Array.isArray(parsedImage360)) {
                                                return (
                                                    <>
                                                        {parsedImage360.map(
                                                            (image360, index) => {
                                                                const cleanedImage360Path = image360.replace(
                                                                    /[\[\]"]/g,
                                                                    '',
                                                                )
                                                                const image360Path = `http://127.0.0.1:8000/uploads/category360/${cleanedImage360Path}`

                                                                return (
                                                                    <img
                                                                        key={
                                                                            index
                                                                        }
                                                                        src={
                                                                            image360Path
                                                                        }
                                                                        alt="Image"
                                                                        width="100px"
                                                                        height="70px"
                                                                    />
                                                                )
                                                            },
                                                        )}
                                                    </>
                                                )
                                            }
                                        } catch (error) {
                                            console.error(
                                                'Error parsing JSON:',
                                                error,
                                            )
                                        }
                                    })()}
                            </td>

                            <td className="border">{category.status}</td>

                            <td className="border">
                                <div>
                                    <Link
                                        href={`/show-category/${category.id}`}
                                        className="underline text-sm text-gray-600 hover:text-gray-900">
                                        <Button className="ml-4">
                                            Xem chi tiết
                                        </Button>
                                    </Link>
                                </div>

                                <div>
                                    <Link
                                        href={`/update-category/${category.id}`}
                                        className="underline text-sm text-gray-600 hover:text-gray-900">
                                        <Button className="ml-4">
                                            Chỉnh sửa
                                        </Button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                    href={`/update-category/${category.id}`}

                                        // href={`/delete-category/${category.id}`}
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

export default AllCategory
