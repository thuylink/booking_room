'use client'

import { useProduct, deleteProductById } from '../../../hooks/product'
import './booking.css'
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
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'
import { Pagination } from '@nextui-org/react'
import { useCategory } from '../../../hooks/category'
import { useBooking } from '@/hooks/booking'

const AllProduct = () => {
    const { product, error, mutate } = useProduct()
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProduct, setFilteredProduct] = useState([])
    const { category, error2, mutate2 } = useCategory()
    const {booking} = useBooking();

    console.log('lấy được category chưa: ', category)
    console.log('có product chưa: ', product)
    console.log("bookings ", booking)

    if (category && category.length > 0) {
        category.forEach(categoryItem => {
            if (categoryItem && categoryItem.length > 0) {
                categoryItem.forEach(item => {
                    // console.log('item_name:', item.name_category)
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

    
    if (error) {
        return <div>{error}</div>
    }

    if (!product) {
        return <div>Loading...</div>
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
                        
                    </NavbarContent>
                    
                </Navbar>

                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn className="text stt">STT</TableColumn>
                        <TableColumn className="text">Ngày nhận phòng</TableColumn>
                        <TableColumn className="text">Ngày trả phòng</TableColumn>

                        <TableColumn className="text">Thao tác</TableColumn>
                    </TableHeader>
                    <TableBody>
                    {booking && booking.map((booking, index) => (
                        <TableRow key={booking.id}>
                            <TableCell className="text2">
                                {index + 1}
                            </TableCell>
                            <TableCell className="text2">
                                {booking.start_date}
                            </TableCell>
                            <TableCell className="text2">
                                {booking.end_date}
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
                            </TableCell>
                        </TableRow>
                    ))}
                    
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
