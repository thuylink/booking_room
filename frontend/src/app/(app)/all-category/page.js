'use client'

import { useCategory, deleteCategoryById } from '../../../hooks/category'
import Link from 'next/link'
import Button from '@/components/Button'
import React, { useState } from 'react'
import { Pannellum } from 'pannellum-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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

const AllCategory = () => {
    const { category, error, mutate } = useCategory()
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredCategory, setFilteredCategory] = useState([])
    const [showImage360, setShowImage360] = useState(false)

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
        event.preventDefault()
        try {
            let result = []
            if (searchTerm === '') {
                result = category[0]
            } else {
                result = category[0].filter(category =>
                    category.name_category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                )
            }
            setFilteredCategory(result)
        } catch (error) {
            console.error('Lỗi:', error)
        }
    }

    return (
        <div className="table-container">
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>STT</TableColumn>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Tên</TableColumn>
                    <TableColumn>Ảnh</TableColumn>
                    <TableColumn>Ảnh 360</TableColumn>
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
                                {category.image360 &&
                                    JSON.parse(
                                        category.image360,
                                    ).map((image360, index) => (
                                        <Pannellum
                                            key={index}
                                            width="350px"
                                            height="150px"
                                            image={`data:image/png;base64,${image360}`}
                                            pitch={10}
                                            yaw={180}
                                            hfov={110}
                                            autoLoad
                                            alt="image360"
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

    // return (
    //     <div style={{ overflowX: 'auto' }}>
    //         <div>
    //             <form onSubmit={handleSubmit}>
    //                 <input
    //                     type="text"
    //                     value={searchTerm}
    //                     onChange={handleSearchChange}
    //                     placeholder="Tìm kiếm theo tên danh mục"
    //                     className="formsearch"
    //                 />
    //                 <button type="submit">
    //                     <FontAwesomeIcon icon={faSearch} />
    //                 </button>
    //             </form>
    //         </div>
    //         <div>
    //             <Link
    //                 href={`/add-category`}
    //                 className="underline text-sm text-gray-600 hover:text-gray-900">
    //                 <Button className="add">Thêm mới danh mục</Button>
    //             </Link>
    //         </div>

    //         <table className="large">
    //             <thead>
    //                 <tr>
    //                     <th className="border borderSTT">STT</th>
    //                     <th className="border borderID">ID</th>
    //                     <th className="border borderTitle ">Tên</th>
    //                     <th className="borderimage">Ảnh</th>
    //                     <th className="borderimage360">Ảnh 360</th>
    //                     <th className="border">Trạng thái</th>
    //                     <th className="border">Ngày tạo</th>
    //                     <th className="border">Ngày cập nhật</th>
    //                     <th className="border bordertt">Thao tác</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {(filteredCategory.length > 0
    //                     ? filteredCategory
    //                     : category[0]
    //                 ).map((category, index) => (
    //                     <tr
    //                         key={category.id}
    //                         style={{ border: '1px solid black' }}>
    //                         <td className="border">{index + 1}</td>
    //                         <td className="border">{category.id}</td>
    //                         <td className="border">{category.name_category}</td>
    //                         <td className="border">
    //                             {category.image &&
    //                                 (() => {
    //                                     try {
    //                                         const parsedImage = JSON.parse(
    //                                             category.image,
    //                                         )

    //                                         if (Array.isArray(parsedImage)) {
    //                                             return (
    //                                                 <>
    //                                                     {parsedImage.map(
    //                                                         (image, index) => {
    //                                                             const cleanedImagePath = image.replace(
    //                                                                 /[[\]"]/g,
    //                                                                 '',
    //                                                             )
    //                                                             const imagePath = `http://127.0.0.1:8000/uploads/category/${cleanedImagePath}`

    //                                                             return (
    //                                                                 <img
    //                                                                     key={
    //                                                                         index
    //                                                                     }
    //                                                                     src={
    //                                                                         imagePath
    //                                                                     }
    //                                                                     alt="Image"
    //                                                                     width="150%"
    //                                                                     height="100%"
    //                                                                 />
    //                                                             )
    //                                                         },
    //                                                     )}
    //                                                 </>
    //                                             )
    //                                         }
    //                                     } catch (error) {
    //                                         console.error(
    //                                             'Error parsing JSON:',
    //                                             error,
    //                                         )
    //                                     }
    //                                 })()}
    //                         </td>
    //                         <td className="border360">
    //                             {category.image360 &&
    //                                 Array.isArray(
    //                                     JSON.parse(category.image360),
    //                                 ) &&
    //                                 JSON.parse(category.image360).map(
    //                                     (image360, index) => {
    //                                         const cleanedImage360Path = image360.replace(
    //                                             /[\[\]"]/g,
    //                                             '',
    //                                         )
    //                                         const image360Path = `data:image/png;base64,${cleanedImage360Path}`
    //                                         console.log(
    //                                             'image360',
    //                                             image360Path,
    //                                         )

    //                                         return (
    //                                             showImage360 && (
    //                                                 <Pannellum
    //                                                     key={index}
    //                                                     width="100%"
    //                                                     height="300px"
    //                                                     image={image360Path}
    //                                                     pitch={10}
    //                                                     yaw={180}
    //                                                     hfov={110}
    //                                                     autoLoad
    //                                                     alt="image360"
    //                                                 />
    //                                             )
    //                                         )
    //                                     },
    //                                 )}
    //                         </td>
    //                         <td className="border">
    //                             {category.status === 1 ? (
    //                                 <div className="status-button active">
    //                                     Hoạt động
    //                                 </div>
    //                             ) : (
    //                                 <div className="status-button inactive">
    //                                     Không hoạt động
    //                                 </div>
    //                             )}
    //                         </td>{' '}
    //                         <td className="border">{category.created_at}</td>
    //                         <td className="border">{category.updated_at}</td>
    //                         <td className="border">
    //                             <div>
    //                                 <Link
    //                                     href={`/show-category/${category.id}`}
    //                                     className="underline text-sm text-gray-600 hover:text-gray-900">
    //                                     <Button className="ml-4">
    //                                         Xem chi tiết
    //                                     </Button>
    //                                 </Link>
    //                             </div>
    //                             <div>
    //                                 <Link
    //                                     href={`/update-category/${category.id}`}
    //                                     className="underline text-sm text-gray-600 hover:text-gray-900">
    //                                     <Button className="ml-4">
    //                                         Chỉnh sửa
    //                                     </Button>
    //                                 </Link>
    //                             </div>
    //                             <div>
    //                                 <Button
    //                                     className="ml-4"
    //                                     onClick={() =>
    //                                         handleDelete(category.id)
    //                                     }>
    //                                     Xóa
    //                                 </Button>
    //                             </div>
    //                         </td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //     </div>
    // )
}

export default AllCategory
