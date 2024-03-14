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

const UpdateProductPage = () => {
    const router = useRouter()
    const id = window.location.pathname.split('/').pop()

    const { getProductById, updateProductById } = useProduct({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard-host',
    })

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
                setTempPrice(response.description)
            } catch (error) {
                console.error('Error:', error)
            }
        }
        fetchProduct()
    }, [id])
    useEffect(() => {
        setLocation(tempLocation)
    }, [tempLocation])

    useEffect(() => {
        setDescription(tempDescription)
    }, [tempDescription])

    useEffect(() => {
        setTitle(tempTitle)
    }, [tempTitle])

    useEffect(() => {
        setPrice(tempPrice)
    }, [tempPrice])

    useEffect(() => {
        setCapacity(tempCapacity)
    }, [tempCapacity])

    useEffect(() => {
        setAmenities(tempAmenities)
    }, [tempAmenities])

    const privacyOptions = [
        { value: 'Toàn bộ nhà', label: 'Toàn bộ nhà' },
        { value: 'Một căn phòng', label: 'Một căn phòng' },
        { value: 'Phòng chung', label: 'Phòng chung' },
    ]

    const amenitiesOptions = [
        { id: 1, label: 'Wifi' },
        { id: 2, label: 'Tủ lạnh' },
        { id: 3, label: 'Bếp nướng BBQ' },
        { id: 4, label: 'Điều hòa' },
        { id: 5, label: 'Máy giặt' },
        { id: 8, label: 'Bể bơi' },
        { id: 6, label: 'Không gian riêng để làm việc' },
        { id: 7, label: 'Chỗ đỗ xe miễn phí' },
        { id: 9, label: 'Khu vực ăn uống ngoài trời' },
        { id: 10, label: 'Bếp đốt lửa trại' },
        { id: 11, label: 'Nhạc cụ' },
        { id: 12, label: 'Thiết bị chữa cháy, bộ sơ cứu' },
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

        const formData = {
            id_category: id_category,
            privacy_type: selectedPrivacy,
            location: location,
            capacity: capacity,
            amenities: amenities,
            image: images,
            image360: image360s,
            title: title,
            description: description,
            price: price,
        }

        try {
            // Cập nhật danh mục
            // Sau khi cập nhật thành công, gửi các ảnh lên server
            await Promise.all([
                setImages(images),
                ...images.map(async image => {
                    const imageFormData = new FormData()
                    imageFormData.append('image[]', image)
                    // await axios.post(`/upload-image/${id}`, imageFormData);
                }),
                ...image360s.map(async image360 => {
                    const image360FormData = new FormData()
                    image360FormData.append('image360[]', image360)
                    // await axios.post(`/upload-image360/${id}`, image360FormData);
                }),
                console.log('formdata', formData),
            ])

            await updateProductById({
                id: id,
                formData: formData,
            })
            router.push('/all-product')
        } catch (error) {
            console.error('Error:', error)
        }
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
            <div>
                <h1 className="text-center">Chủ nhà chỉnh sửa thông tin nhà</h1>
            </div>
            <div className="flex">
                <div className="w-1/2 pr-2">
                    <div className="border rounded-lg p-4 w-full">
                        <div className="mt-4">
                            <Label htmlFor="image">Hình ảnh:</Label>
                            {previewImages()}

                            <Input
                                id="image"
                                type="file"
                                className="block w-full"
                                onChange={event =>
                                    setImages(Array.from(event.target.files))
                                }
                                multiple
                            />

                            <InputError
                                messages={errors.image}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="image360">Hình ảnh 360:</Label>
                            {previewImage360s()}

                            <Input
                                id="image360"
                                type="file"
                                className="block w-full"
                                onChange={event =>
                                    setImage360s(Array.from(event.target.files))
                                }
                                multiple
                            />

                            <InputError
                                messages={errors.image360}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 pl-2">
                    <div className="border rounded-lg p-4-2">
                        <div className="mt-4">
                            <Label htmlFor="id_category">Kiểu kiến trúc:</Label>
                            <Input
                                type="number"
                                id="id_category"
                                value={id_category}
                                className="block w-full"
                                onChange={event =>
                                    setIdCategory(event.target.value)
                                }
                                required
                                autoFocus
                            />

                            <InputError
                                messages={errors.id_category}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="privacy_type">
                                Phạm vi sử dụng:
                            </Label>
                            <select
                                id="privacy_type"
                                value={selectedPrivacy}
                                className="block w-full"
                                onChange={handlePrivacyTypeChange}
                                required
                                autoFocus>
                                <option value="">Chọn</option>
                                {privacyOptions.map(option => (
                                    <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <InputError
                                messages={errors.privacy_type}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="location">Địa chỉ:</Label>
                            <Input
                                type="text"
                                id="location"
                                value={location}
                                className="block w-full"
                                onChange={event =>
                                    setLocation(event.target.value)
                                }
                                required
                                autoFocus
                            />

                            <InputError
                                messages={errors.location}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="capacity">Sức chứa:</Label>
                            <Input
                                type="text"
                                id="capacity"
                                value={capacity}
                                className="block w-full"
                                onChange={event =>
                                    setCapacity(event.target.value)
                                }
                                required
                                autoFocus
                            />

                            <InputError
                                messages={errors.capacity}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="amenities">Tiện ích:</Label>

                            <div className="mt-4">
                                <div className="amenities-column-left">
                                    {amenitiesOptions
                                        .slice(0, 6)
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
                                    {amenitiesOptions.slice(6).map(option => (
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
                            <InputError
                                messages={errors.amenities}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="title">Tiêu đề:</Label>
                            <Input
                                type="text"
                                id="title"
                                value={title}
                                className="block w-full"
                                onChange={event => setTitle(event.target.value)}
                                required
                            />

                            <InputError
                                messages={errors.title}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="description">Mô tả:</Label>
                            <Input
                                type="text"
                                id="description"
                                value={description}
                                className="block w-full"
                                onChange={event =>
                                    setDescription(event.target.value)
                                }
                                required
                            />

                            <InputError
                                messages={errors.description}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="price">Chi phí:</Label>
                            <Input
                                id="price"
                                type="text"
                                value={price}
                                className="block w-full"
                                onChange={event => setPrice(event.target.value)}
                                required
                            />

                            <InputError
                                messages={errors.price}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end mt-4">
                <Link
                    href="/"
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    Back
                </Link>

                <Button className="ml-4">Cập nhật</Button>
            </div>
        </form>
    )
}

export default UpdateProductPage
