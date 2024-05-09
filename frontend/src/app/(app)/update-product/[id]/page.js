'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Input from '@/components/Input'
import Label from '@/components/Label'
import InputError from '@/components/InputError'
import Link from 'next/link'
import Button from '@/components/Button'
import { useProduct } from '../../../../hooks/product'
import Image from 'next/image'
import '../update_product.css'
import { useCategory } from '../../../../hooks/category'

const UpdateProductPage = () => {
    const router = useRouter()
    const id = window.location.pathname.split('/').pop()

    const { getProductById, updateProductById } = useProduct({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard-host',
    })

    const { category, error, mutate } = useCategory()

    const [id_category, setIdCategory] = useState('')
    const [selectedPrivacy, setSelectedPrivacy] = useState('')
    const [location, setLocation] = useState('')
    const [capacity, setCapacity] = useState('')
    const [amenities, setAmenities] = useState('')
    const [selectedAmenities, setSelectedAmenities] = useState([])
    const [images, setImages] = useState([])
    const [image360s, setImage360s] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState([])

    //hiển thị những giá trị đã nhập lúc cretae
    const [tempLocation, setTempLocation] = useState('')
    const [tempCapacity, setTempCapacity] = useState('')
    const [tempAmenities, setTempAmenities] = useState('')
    const [tempTitle, setTempTitle] = useState('')
    const [tempDescription, setTempDescription] = useState('')
    const [tempPrice, setTempPrice] = useState('')

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductById(id)
                setTempLocation(response.location)
                setTempCapacity(response.capacity)
                setTempAmenities(response.amenities)
                setTempTitle(response.title)
                setTempDescription(response.description)
                setTempPrice(response.price)
            } catch (error) {
                console.error('Error:', error)
            }
        }
        fetchProduct()
    }, [id])

    useEffect(() => {
        setLocation(tempLocation)
        setDescription(tempDescription)
        setTitle(tempTitle)
        setPrice(tempPrice)
        setCapacity(tempCapacity)
        setAmenities(tempAmenities)
    }, [
        tempLocation,
        tempDescription,
        tempTitle,
        tempPrice,
        tempCapacity,
        tempAmenities,
    ])

    const privacyOptions = [
        { value: 'Toàn bộ nhà', label: 'Toàn bộ nhà' },
        { value: 'Một căn phòng', label: 'Một căn phòng' },
        { value: 'Phòng chung', label: 'Phòng chung' },
    ]

    const amenitiesOptions = [
        { id: 1, label: 'Wifi - TV' },
        { id: 2, label: 'Tủ lạnh' },
        { id: 3, label: 'Bếp BBQ' },
        { id: 4, label: 'Bể bơi' },
        { id: 5, label: 'Nhạc cụ' },
        { id: 6, label: 'Bồn tắm' },
        { id: 8, label: 'Sách' },
        { id: 9, label: 'Camera' },
        { id: 10, label: 'Đồ ăn nhanh' },
        { id: 7, label: 'Hàng rào' },
        { id: 11, label: 'Ban công' },

        { id: 12, label: 'Không gian riêng để làm việc' },
        { id: 13, label: 'Chỗ đỗ xe miễn phí' },
        { id: 14, label: 'Khu vực ăn uống ngoài trời' },
        { id: 15, label: 'Bếp đốt lửa trại' },
        { id: 16, label: 'Máy giặt - Máy sấy' },
        { id: 17, label: 'Hướng - Đường đi ra biển' },
        { id: 18, label: 'Sách và đồ chơi trẻ em' },
        { id: 19, label: 'Điều hòa - Máy sưởi - Quạt' },
        { id: 20, label: 'Bát đĩa - Thiết bị nấu ăn' },
        { id: 21, label: 'Móc - giá phơi - tủ quần áo' },
        { id: 22, label: 'Thiết bị chữa cháy - Sơ cứu' },
    ]

    const handlePrivacyTypeChange = event => {
        setSelectedPrivacy(event.target.value)
    }

    const handleAmenitiesChange = event => {
        const value = event.target.value
        const isChecked = event.target.checked

        if (isChecked) {
            setSelectedAmenities(prevSelected => [...prevSelected, value])
        } else {
            setSelectedAmenities(prevSelected =>
                prevSelected.filter(item => item !== value),
            )
        }
    }

    const submitForm = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('id_category', id_category)
        formData.append('privacy_type', selectedPrivacy)
        formData.append('location', location)
        formData.append('capacity', capacity)
        formData.append('amenities', selectedAmenities.join(',')) // Cập nhật amenities ở đây
        formData.append('title', title)
        formData.append('description', description)
        formData.append('price', price)
        if (images && images.length > 0) {
            images.forEach(image => {
                formData.append('image[]', image)
            })
        }

        if (image360s && image360s.length > 0) {
            image360s.forEach(image360 => {
                formData.append('image360[]', image360)
            })
        }

        // try {
        await updateProductById({ id: id, formData: formData })
        // console.log('Cập nhật sản phẩm thành công')
        router.push('/all-product')
        // } catch (error) {
        //     console.error('Lỗi cập nhật sản phẩm: ', error)
        // }
    }

    const previewImages = () => {
        if (images.length > 0) {
            return images.map((image, index) => (
                <div key={index} className="w-32 h-32">
                    <Image
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index}`}
                        layout="responsive"
                        width={300}
                        height={300}
                    />
                </div>
            ))
        }
        return null
    }

    const previewImage360s = () => {
        if (image360s.length > 0) {
            return image360s.map((image360, index) => (
                <div key={index} className="w-32 h-32">
                    <Image
                        src={URL.createObjectURL(image360)}
                        alt={`Preview ${index}`}
                        layout="responsive"
                        width={300}
                        height={300}
                    />
                </div>
            ))
        }
        return null
    }

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div className="flex flex-col flex-wrap gap-4"></div>
            <div class="container right-panel-active">
                <div class="container__form container--signup">
                    <form class="form">
                        <div className="head">
                            <a className="head">Chỉnh sửa thông tin nhà ở </a>
                        </div>
                        <select
                            id="id_category"
                            value={id_category}
                            className="input"
                            onChange={event => {
                                const selectedId = event.target.value // Lấy giá trị id được chọn từ event
                                setIdCategory(selectedId) // Cập nhật id_category
                            }}
                            required
                            autoFocus>
                            <option value="">Chọn kiểu kiến trúc</option>
                            <option value="all">Tất cả các danh mục</option>
                            {category &&
                                category.length > 0 &&
                                category[0].map((categoryItem, index) => (
                                    <option
                                        key={categoryItem.id}
                                        value={categoryItem.id} // Thiết lập giá trị value bằng id của danh mục
                                    >
                                        {categoryItem.name_category}
                                    </option>
                                ))}
                        </select>

                        <select
                            id="privacy_type"
                            value={selectedPrivacy}
                            className="input"
                            onChange={handlePrivacyTypeChange}
                            required
                            autoFocus>
                            <option value="">Chọn</option>
                            {privacyOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <InputError
                            messages={errors.privacy_type}
                            className="mt-2"
                        />

                        <Input
                            type="text"
                            id="location"
                            value={location}
                            className="input"
                            onChange={event => setLocation(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.location}
                            className="mt-2"
                        />

                        <Input
                            type="text"
                            id="capacity"
                            value={capacity}
                            className="input"
                            onChange={event => setCapacity(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.capacity}
                            className="mt-2"
                        />

                        <div className="mt-4">
                            <div className="amenities-container">
                                <div className="amenities-column-left">
                                    {amenitiesOptions
                                        .slice(0, 11)
                                        .map(option => (
                                            <div key={option.id}>
                                                <input
                                                    type="checkbox"
                                                    id={option.label}
                                                    value={option.label}
                                                    checked={selectedAmenities.includes(
                                                        option.label,
                                                    )}
                                                    onChange={
                                                        handleAmenitiesChange
                                                    }
                                                />
                                                <label htmlFor={option.label}>
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                </div>
                                <div className="amenities-column-right">
                                    {amenitiesOptions.slice(11).map(option => (
                                        <div key={option.id}>
                                            <input
                                                type="checkbox"
                                                id={option.label}
                                                value={option.label}
                                                checked={selectedAmenities.includes(
                                                    option.label,
                                                )}
                                                onChange={handleAmenitiesChange}
                                            />
                                            <label htmlFor={option.label}>
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <InputError
                            messages={errors.amenities}
                            className="mt-2"
                        />

                        <Input
                            type="text"
                            id="title"
                            value={title}
                            className="input"
                            onChange={event => setTitle(event.target.value)}
                            required
                        />

                        <InputError messages={errors.title} className="mt-2" />

                        <Input
                            type="text"
                            id="description"
                            value={description}
                            className="input"
                            onChange={event =>
                                setDescription(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.description}
                            className="mt-2"
                        />

                        <Input
                            id="price"
                            type="text"
                            value={price}
                            className="input"
                            onChange={event => setPrice(event.target.value)}
                            required
                        />

                        <InputError messages={errors.price} className="mt-2" />
                    </form>
                </div>

                <div className="container__overlay">
                    <div className="mt-4">
                        <Label htmlFor="image">Hình ảnh:</Label>
                        {images.length > 0 &&
                            images.map((image, index) => (
                                <div key={index} className="w-64 h-64">
                                    <Image
                                        src={URL.createObjectURL(image)}
                                        // alt={`Preview ${index}`}
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                    />
                                </div>
                            ))}

                        <Input
                            id="image"
                            type="file"
                            className="block w-full"
                            onChange={event =>
                                setImages([...images, event.target.files[0]])
                            }
                        />

                        <InputError messages={errors.image} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="image">Hình ảnh 360:</Label>
                        {image360s.length > 0 &&
                            image360s.map((image360, index) => (
                                <div key={index} className="w-64 h-64">
                                    <Image
                                        src={URL.createObjectURL(image360)}
                                        // alt={`Preview ${index}`}
                                        layout="responsive"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            ))}

                        <Input
                            id="image360"
                            type="file"
                            className="block w-full"
                            onChange={event =>
                                setImage360s([
                                    ...image360s,
                                    event.target.files[0],
                                ])
                            }
                        />

                        <InputError messages={errors.image} className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="button">
                <Link href="/dashboard-host">Quay lại</Link>
                <Button className="btn">Lưu thay đổi</Button>
            </div>
        </form>
    )
}

export default UpdateProductPage

// <div className="flex">
//                 <div className="w-1/2 pr-2">
//                     <div className="border rounded-lg p-4 w-full">
//                         <div className="mt-4">
//                             <Label htmlFor="image">Hình ảnh:</Label>
//                             {previewImages()}

//                             <Input
//                                 id="image"
//                                 type="file"
//                                 className="block w-full"
//                                 onChange={event =>
//                                     setImages(Array.from(event.target.files))
//                                 }
//                                 multiple
//                             />

//                             <InputError
//                                 messages={errors.image}
//                                 className="mt-2"
//                             />
//                         </div>

//                         <div className="mt-4">
//                             <Label htmlFor="image360">Hình ảnh 360:</Label>
//                             {previewImage360s()}

//                             <Input
//                                 id="image360"
//                                 type="file"
//                                 className="block w-full"
//                                 onChange={event =>
//                                     setImage360s(Array.from(event.target.files))
//                                 }
//                                 multiple
//                             />

//                             <InputError
//                                 messages={errors.image360}
//                                 className="mt-2"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-1/2 pl-2">
//                     <div className="border rounded-lg p-4-2">
//     <select
//     id="id_category"
//     value={id_category}
//     className="block w-full"
//     onChange={event => {
//         const selectedId = event.target.value // Lấy giá trị id được chọn từ event
//         setIdCategory(selectedId) // Cập nhật id_category
//     }}
//     required
//     autoFocus>
//     <option value="">Chọn kiểu kiến trúc</option>
//     <option value="all">Tất cả các danh mục</option>
//     {category &&
//         category.length > 0 &&
//         category[0].map((categoryItem, index) => (
//             <option
//                 key={categoryItem.id}
//                 value={categoryItem.id} // Thiết lập giá trị value bằng id của danh mục
//             >
//                 {categoryItem.name_category}
//             </option>
//         ))}
// </select>

//                         <div className="mt-4">
//                             <Label htmlFor="privacy_type">
//                                 Phạm vi sử dụng:
//                             </Label>
//                             <select
//                                 id="privacy_type"
//                                 value={selectedPrivacy}
//                                 className="block w-full"
//                                 onChange={handlePrivacyTypeChange}
//                                 required
//                                 autoFocus>
//                                 <option value="">Chọn</option>
//                                 {privacyOptions.map(option => (
//                                     <option
//                                         key={option.value}
//                                         value={option.value}>
//                                         {option.label}
//                                     </option>
//                                 ))}
//                             </select>
//                             <InputError
//                                 messages={errors.privacy_type}
//                                 className="mt-2"
//                             />
//                         </div>

//                         <div className="mt-4">
//                             <Label htmlFor="location">Địa chỉ:</Label>
// <Input
//     type="text"
//     id="location"
//     value={location}
//     className="block w-full"
//     onChange={event =>
//         setLocation(event.target.value)
//     }
//     required
//     autoFocus
// />

// <InputError
//     messages={errors.location}
//     className="mt-2"
// />
//                         </div>

//                         <div className="mt-4">
//                             <Label htmlFor="capacity">Sức chứa:</Label>
// <Input
//     type="text"
//     id="capacity"
//     value={capacity}
//     className="block w-full"
//     onChange={event =>
//         setCapacity(event.target.value)
//     }
//     required
//     autoFocus
// />

// <InputError
//     messages={errors.capacity}
//     className="mt-2"
// />
//                         </div>

//                         <div className="mt-4">
//                             <Label htmlFor="amenities">Tiện ích:</Label>

//     <div className="mt-4">
//         <div className="amenities-column-left">
//             {amenitiesOptions
//                 .slice(0, 6)
//                 .map(option => (
//                     <div key={option.id}>
//                         <input
//                             type="checkbox"
//                             id={option.label}
//                             value={option.label}
//                             checked={selectedAmenities.includes(
//                                 option.label,
//                             )}
//                             onChange={
//                                 handleAmenitiesChange
//                             }
//                         />
//                         <label htmlFor={option.label}>
//                             {option.label}
//                         </label>
//                     </div>
//                 ))}
//         </div>
//         <div className="amenities-column-right">
//             {amenitiesOptions.slice(6).map(option => (
//                 <div key={option.id}>
//                     <input
//                         type="checkbox"
//                         id={option.label}
//                         value={option.label}
//                         checked={selectedAmenities.includes(
//                             option.label,
//                         )}
//                         onChange={handleAmenitiesChange}
//                     />
//                     <label htmlFor={option.label}>
//                         {option.label}
//                     </label>
//                 </div>
//             ))}
//         </div>
//     </div>
//     <InputError
//         messages={errors.amenities}
//         className="mt-2"
//     />
// </div>

//                         <div className="mt-4">
//                             <Label htmlFor="title">Tiêu đề:</Label>
// <Input
//     type="text"
//     id="title"
//     value={title}
//     className="block w-full"
//     onChange={event => setTitle(event.target.value)}
//     required
// />

// <InputError
//     messages={errors.title}
//     className="mt-2"
// />
//                         </div>

//                         <div className="mt-4">
//                             <Label htmlFor="description">Mô tả:</Label>
//                             <Input
//                                 type="text"
//                                 id="description"
//                                 value={description}
//                                 className="block w-full"
//                                 onChange={event =>
//                                     setDescription(event.target.value)
//                                 }
//                                 required
//                             />

//                             <InputError
//                                 messages={errors.description}
//                                 className="mt-2"
//                             />
//                         </div>

//                         <div className="mt-4">
//                             <Label htmlFor="price">Chi phí:</Label>
// <Input
//     id="price"
//     type="text"
//     value={price}
//     className="block w-full"
//     onChange={event => setPrice(event.target.value)}
//     required
// />

// <InputError
//     messages={errors.price}
//     className="mt-2"
// />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex items-center justify-end mt-4">
//                 <Link
//                     href="/"
//                     className="underline text-sm text-gray-600 hover:text-gray-900">
//                     Back
//                 </Link>

//                 <Button className="ml-4">Cập nhật</Button>
//             </div>
