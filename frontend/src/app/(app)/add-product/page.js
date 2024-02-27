'use client'

import Input from '@/components/Input'
import Label from '@/components/Label'
import InputError from '@/components/InputError'
import Link from 'next/link'
import Button from '@/components/Button'
import { useProduct } from '../../../hooks/product'
import { useState } from 'react'

const CreateProductPage = () => {
    const { createProduct } = useProduct({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })
    const [id_category, setIdCategory] = useState('')
    const [privacy_type, setPrivacyType] = useState('')
    const [location, setLocation] = useState('')
    const [capacity, setCapacity] = useState('')
    const [amenities, setAmenities] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState([])

    
    const submitForm = event => {
        event.preventDefault()

        createProduct({
            id_category,
            privacy_type,
            location,
            capacity,
            amenities,
            image,
            title,
            description,
            price,
            setErrors,
        })
    }
    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div className="border rounded-lg p-4" color="blue">
                <h1 className="text-center">Chủ nhà thêm mới nhà</h1>

                <div className="mt-4">
                    <Label htmlFor="id_category">Kiểu kiến trúc:</Label>
                    <Input
                        type="number"
                        id="id_category"
                        value={id_category}
                        className="block w-full"
                        onChange={event => setIdCategory(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError
                        messages={errors.id_category}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <Label htmlFor="privacy_type">Phạm vi sử dụng:</Label>
                    <Input
                        type="text"
                        id="privacy_type"
                        value={privacy_type}
                        className="block w-full"
                        onChange={event => setPrivacyType(event.target.value)}
                        required
                        autoFocus
                    />

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
                        onChange={event => setLocation(event.target.value)}
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
                        onChange={event => setCapacity(event.target.value)}
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
                    <Input
                        type="text"
                        id="amenities"
                        value={amenities}
                        className="block w-full"
                        onChange={event => setAmenities(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError
                        messages={errors.amenities}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <Label htmlFor="image">Hình ảnh:</Label>
                    <Input
                        type="text"
                        id="image"
                        value={image}
                        className="block w-full"
                        onChange={event => setImage(event.target.value)}
                        required
                    />

                    <InputError messages={errors.image} className="mt-2" />
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
                        autoFocus
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
                        onChange={event => setDescription(event.target.value)}
                        required
                        autoFocus
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

                    <InputError messages={errors.price} className="mt-2" />
                </div>
            </div>

            <div className="flex items-center justify-end mt-4">
                <Link
                    href="/"
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    Back
                </Link>

                <Button className="ml-4">Tạo mới nhà</Button>
            </div>
        </form>
    )
}

export default CreateProductPage
