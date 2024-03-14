'use client'

import { useCategory, deleteCategoryById } from '../../../hooks/category'
import Link from 'next/link'
import Button from '@/components/Button'
import './all_category_css.scss'
import React, { useState } from 'react'

const AllCategory = () => {
    const { category, error, mutate } = useCategory()
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredCategory, setFilteredCategory] = useState([])

    const handleDelete = async id => {
        try {
            await deleteCategoryById(id)
            mutate()
        } catch (error) {
            console.error('Lỗi:', error)
        }
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!category) {
        return <div>Loading...</div>
    }

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            let result = [];
            if (searchTerm === '') {
                result = category[0];
            } else {
                result = category[0].filter(category =>
                    category.name_category.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            setFilteredCategory(result);
        } catch (error) {
            console.error('Lỗi:', error);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Tìm kiếm theo tên danh mục"
                        className="formsearch"
                    />
                    <button type="submit">Tìm kiếm</button>
                </form>
            </div>
            <div>
                <Link
                    href={`/add-category`}
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    <Button className="add">Thêm mới danh mục</Button>
                </Link>
            </div>

            <table className="large">
                <thead>
                    <tr>
                        <th className="border borderSTT">STT</th>
                        <th className="border borderID">ID</th>
                        <th className="border borderTitle ">Tên</th>
                        <th className="borderimage">Ảnh</th>
                        <th className="borderimage360">Ảnh 360</th>
                        <th className="border">Trạng thái</th>
                        <th className="border">Ngày tạo</th>
                        <th className="border">Ngày cập nhật</th>
                        <th className="border bordertt">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {(filteredCategory.length > 0
                        ? filteredCategory
                        : category[0]
                    ).map((category, index) => (
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
                                                                /[[\]"]/g,
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
                                                                    width="100%"
                                                                    height="100%"
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
                                                        (
                                                            image360,
                                                            index,
                                                        ) => {
                                                            const cleanedImage360Path = image360.replace(
                                                                /[[\]"]/g,
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
                                                                    width="100%"
                                                                    height="100%"
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
                            <td className="border">{category.created_at}</td>
                            <td className="border">{category.updated_at}</td>
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
                                    <Button
                                        className="ml-4"
                                        onClick={() =>
                                            handleDelete(category.id)
                                        }>
                                        Xóa
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllCategory
