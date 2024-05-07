'use client'

import { useProduct, deleteProductById } from '../../../hooks/product'
import './all_product_css.scss'
import Link from 'next/link'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import { Pannellum } from 'pannellum-react'
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
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'
import { Pagination } from '@nextui-org/react'
import { useCategory } from '../../../hooks/category'

const AllProduct = () => {
    const { product, error, mutate } = useProduct()
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProduct, setFilteredProduct] = useState([])
    const { category, error2, mutate2 } = useCategory()

    console.log('lấy được category chưa: ', category)
    console.log('có product chưa: ', product)

    if (category && category.length > 0) {
        category.forEach(categoryItem => {
            if (categoryItem && categoryItem.length > 0) {
                categoryItem.forEach(item => {
                    console.log('item_name:', item.name_category)
                })
            }
            // console.log('length', category.length)
        })
    }

    if (product && product.length > 0) {
        const show = product.map(test => {
            // Tìm phần tử trong mảng category
            if (category && category.length > 0) {
                const foundCategory = category[0].find(
                    item => item.id === test.id_category,
                )

                // Nếu tìm thấy phần tử trong category
                if (foundCategory) {
                    // Lấy tên của phần tử tìm thấy và thêm vào đối tượng product
                    test.name_category = foundCategory.name_category // Giả sử name của categoryItem là name, thay bằng tên thật của trường
                }
            }
            return test
        })
    }

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
        <>
            <div className="table-container">
                <Navbar>
                    <NavbarBrand>
                        <p className="font-bold text-inherit">AirBnb</p>
                    </NavbarBrand>
                    <NavbarContent
                        className="hidden sm:flex gap-4"
                        justify="center">
                        <NavbarItem>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    placeholder="Tìm kiếm theo địa chỉ nhà"
                                    className="formsearch"
                                />
                                <Button
                                    className="ml-4 bg-pink-500"
                                    type="submit">
                                    Tìm kiếm
                                </Button>
                            </form>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <div>
                                <Link
                                    href={`/add-product`}
                                    className="text-lg text-white cursor-pointer active:opacity-50">
                                    <Button className="ml-4 bg-pink-500">
                                        Thêm mới nhà
                                    </Button>
                                </Link>
                            </div>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>

                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn className="text stt">STT</TableColumn>
                        <TableColumn className="text">Tiêu đề</TableColumn>
                        <TableColumn className="text">
                            Kiểu kiến trúc
                        </TableColumn>
                        <TableColumn className="text">Địa chỉ</TableColumn>
                        <TableColumn className="text">Ảnh</TableColumn>
                        <TableColumn className="text">Chi phí</TableColumn>
                        <TableColumn className="text">Thao tác</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {(searchTerm === '' ? product : filteredProduct).map(
                            (product, index) => (
                                <TableRow key={product.id}>
                                    <TableCell className="text2">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell className="text2">
                                        {product.title}
                                    </TableCell>
                                    <TableCell className="text2">
                                        {product.name_category}
                                    </TableCell>
                                    <TableCell className="text2">
                                        {product.location}
                                    </TableCell>
                                    <TableCell className="text2 image">
                                        {product.image &&
                                            Array.isArray(
                                                JSON.parse(product.image),
                                            ) && (
                                                <>
                                                    {JSON.parse(
                                                        product.image,
                                                    ).map((image, index) => {
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
                                                                width="170px"
                                                                height="170px"
                                                            />
                                                        )
                                                    })}
                                                </>
                                            )}
                                    </TableCell>

                                    <TableCell className="text2">
                                        {product.price}
                                    </TableCell>
                                    <TableCell className="text2">
                                        <div>
                                            <Link
                                                href={`/fe-a-home/${product.id}`}
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
                                                href={`/update-product/${product.id}`}
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
                                                    handleDelete(product.id)
                                                }>
                                                <span className="text-lg text-white cursor-pointer active:opacity-50">
                                                    <DeleteIcon />
                                                </span>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ),
                        )}
                    </TableBody>
                </Table>
            </div>

            <Pagination
                isDisabled
                total={10}
                initialPage={1}
                className="pagination"
            />
        </>
    )
}

export default AllProduct
