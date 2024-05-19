'use client'

import { useCategory, deleteCategoryById } from '../../../hooks/category'
import Link from 'next/link'
import Button from '@/components/Button'
import React, { useState } from 'react'
import './all_category_css.scss'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from '@nextui-org/react'
import { EyeIcon } from '../../../components/EyeIcon'
import { DeleteIcon } from '../../../components/DeleteIcon'
import { EditIcon } from '../../../components/EditIcon'
import CategoryDetailWithPannellum from '../show-category/[id]/page'
import UpdateCategoryPage from '../update-category/[id]/page'

const AllCategory = () => {
    const { category, error, mutate } = useCategory()
    const [filteredCategory, setFilteredCategory] = useState([])
    const [selectedCategoryId, setSelectedCategoryId] = useState(null)
    const [showUpdateCategory, setShowUpdateCategory] = useState(false)
    const [showDetailCategory, setShowDetailCategory] = useState(false)

    const handleDelete = async id => {
        try {
            await deleteCategoryById(id)
            mutate()
        } catch (error) {
            console.error('Lỗi:', error)
        }
    }

    const handleUpdateCategoryClick = async id => {
        setSelectedCategoryId(id)
        setShowUpdateCategory(true)
        setShowDetailCategory(false)
    }

    const handleDetailCategoryClick = id => {
        setSelectedCategoryId(id)
        setShowUpdateCategory(false)
        setShowDetailCategory(true)
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!category) {
        return <div>Loading...</div>
    }

    // Đảo ngược thứ tự của mảng category
    const displayedCategories = filteredCategory.length > 0 ? filteredCategory : category[0].slice().reverse()

    return (
        <div className="table-container">
            {showUpdateCategory && <UpdateCategoryPage categoryId={selectedCategoryId} />}
            {showDetailCategory && <CategoryDetailWithPannellum categoryId={selectedCategoryId} />}
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn className='stt'>STT</TableColumn>
                    <TableColumn>Tên</TableColumn>
                    <TableColumn>Ảnh</TableColumn>
                    <TableColumn>Trạng thái</TableColumn>
                    <TableColumn>Thao tác</TableColumn>
                </TableHeader>
                <TableBody>
                    {displayedCategories.map((category, index) => (
                        <TableRow key={category.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{category.name_category}</TableCell>
                            <TableCell>
                                {category.image && JSON.parse(category.image).map((image, index) => (
                                    <img
                                        key={index}
                                        src={`http://127.0.0.1:8000/uploads/category/${image}`}
                                        alt="Image"
                                        width="170px"
                                        height="170px"
                                    />
                                ))}
                            </TableCell>
                            <TableCell style={{ fontWeight: 'bold', color: category.status === 'Hoạt động' ? 'green' : 'red' }}>
    {category.status}
</TableCell>

                            <TableCell>
                                <div>
                                    <Button className="ml-4 bg-pink-500" onClick={() => handleDetailCategoryClick(category.id)}>
                                        <span className="text-lg text-white cursor-pointer active:opacity-50">
                                            <EyeIcon />
                                        </span>
                                    </Button>
                                </div>
                                <div>
                                    <Button className="ml-4 bg-pink-500" onClick={() => handleUpdateCategoryClick(category.id)}>
                                        <span className="text-lg text-white cursor-pointer active:opacity-50">
                                            <EditIcon />
                                        </span>
                                    </Button>
                                </div>
                                <div>
                                    <Button className="ml-4 bg-pink-500" onClick={() => handleDelete(category.id)}>
                                        <span className="text-lg text-white cursor-pointer active:opacity-50">
                                            <DeleteIcon />
                                        </span>
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AllCategory
