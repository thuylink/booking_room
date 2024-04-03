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
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'
import { EyeIcon } from '../../../components/EyeIcon'
import { DeleteIcon } from '../../../components/DeleteIcon'
import { EditIcon } from '../../../components/EditIcon'

const AllCategory = () => {
    const { category, error, mutate } = useCategory()
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

    console.log("category là:", category)
    return (
        <div className="table-container">
        <Navbar>
                <NavbarBrand>
                    <p className="font-bold text-inherit">AirBnb</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <div>
                            <Link
                                href={`/add-category`}
                                className="text-lg text-white cursor-pointer active:opacity-50">
                                <Button className="ml-4 bg-pink-500">
                                    Thêm mới category
                                </Button>
                            </Link>
                        </div>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>STT</TableColumn>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Tên</TableColumn>
                    <TableColumn>Ảnh</TableColumn>
                    <TableColumn>Trạng thái</TableColumn>
                    <TableColumn>Thao tác</TableColumn>
                </TableHeader>
                <TableBody>
                    {(filteredCategory.length > 0
                        ? filteredCategory
                        : category[0]
                    ).map((category, index) => (
                        <TableRow key={category.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{category.id}</TableCell>
                            <TableCell>{category.name_category}</TableCell>
                            <TableCell>
                                {category.image &&
                                    JSON.parse(
                                        category.image,
                                    ).map((image, index) => (
                                        <img
                                            key={index}
                                            src={`http://127.0.0.1:8000/uploads/category/${image}`}
                                            alt="Image"
                                            width="170px"
                                            height="170px"
                                        />
                                    ))}
                            </TableCell>
                            <TableCell>
                                {category.status === 1 ? (
                                    <div className="status-button active">
                                        <Button className="status-button-active">
                                            Hoạt động
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="status-button inactive">
                                        <Button className="status-button-inactive">
                                            Không hoạt động
                                        </Button>
                                    </div>
                                )}
                            </TableCell>
                            <TableCell>
                                <div>
                                    <Link
                                        href={`/show-category/${category.id}`}
                                        className="underline text-sm hover:text-gray-900">
                                        <Button className="ml-4 bg-pink-500">
                                            <span className="text-lg text-white cursor-pointer active:opacity-50">
                                                <EyeIcon />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href={`/update-category/${category.id}`}
                                        className="underline text-sm hover:text-gray-900">
                                        <Button className="ml-4 bg-pink-500">
                                            <span className="text-lg text-white cursor-pointer active:opacity-50">
                                                <EditIcon />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                                <div>
                                    <Button
                                        className="ml-4 bg-pink-500"
                                        onClick={() =>
                                            handleDelete(category.id)
                                        }>
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
