'use client'

import Input from '@/components/Input'
import Label from '@/components/Label'
import InputError from '@/components/InputError'
import Link from 'next/link'
import Button from '@/components/Button'
import { useCategory } from '../../../hooks/category'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import './add.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CreateCategoryPage = ({ onCategoryCreated }) => {
    const router = useRouter()

    const { createCategory } = useCategory({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })
    const [name_category, setNameCategory] = useState('')
    const [images, setImages] = useState([])
    const [image360s, setImage360s] = useState([])
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('name_category', name_category)
        images.forEach(image => formData.append('image[]', image))
        image360s.forEach(image360 => formData.append('image360[]', image360))
        formData.append('status', status)

        try {
            await createCategory({
                formData,
                setErrors,
            })
            // Gọi callback để báo cho Dashboard biết danh mục mới đã được tạo
            onCategoryCreated()
        } catch (error) {
            console.error('Error creating category:', error)
        }
    }

    const handleImageChange = (event, setImageFunction) => {
        const selectedImages = Array.from(event.target.files)
        setImageFunction(prevImages => [...prevImages, ...selectedImages])
    }

    const removeImage = (index, arrayName) => {
        if (arrayName === 'images') {
            setImages(images => images.filter((_, i) => i !== index))
        } else if (arrayName === 'image360s') {
            setImage360s(image360s => image360s.filter((_, i) => i !== index))
        }
    }

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div className="flex flex-col flex-wrap gap-4"></div>
            <div className="containercategory right-panel-active">
                <div className="containercategory__form containercategory--signup">
                    <div className="form">
                        <div className="headcategory">
                            <a className="headcategory">Tạo mới danh mục</a>
                        </div>
                        <Input
                            type="text"
                            id="nameCategory"
                            value={name_category}
                            placeholder="Tên danh mục"
                            className="input2"
                            onChange={event => setNameCategory(event.target.value)}
                            required
                            autoFocus
                        />
                        <InputError messages={errors.name} className="mt-2" />

                        <Input
                            type="text"
                            id="status"
                            value={status}
                            className="input2"
                            placeholder="Trạng thái"
                            onChange={event => setStatus(event.target.value)}
                            required
                            autoFocus
                        />
                        <InputError messages={errors.address} className="mt-2" />
                    </div>
                </div>

                <div className="containercategory__overlay">
                    <div className="mt-4">
                        <Label htmlFor="image">Hình ảnh:</Label>
                        {images.length > 0 &&
                            images.map((image, index) => (
                                <div key={index} className="w-64 h-64">
                                    <div className="relative">
                                        <Image
                                            src={URL.createObjectURL(image)}
                                            layout="responsive"
                                            width={400}
                                            height={400}
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-2 right-2"
                                            onClick={() => removeImage(index, 'images')}>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </div>
                                </div>
                            ))}

                        <Input
                            id="image"
                            type="file"
                            className="block w-full"
                            multiple
                            onChange={event => handleImageChange(event, setImages)}
                        />

                        <InputError messages={errors.image} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="image360">Hình ảnh 360:</Label>
                        {image360s.length > 0 &&
                            image360s.map((image360, index) => (
                                <div key={index} className="w-64 h-64">
                                    <div className="relative">
                                        <Image
                                            src={URL.createObjectURL(image360)}
                                            layout="responsive"
                                            width={200}
                                            height={200}
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-2 right-2"
                                            onClick={() => removeImage(index, 'image360s')}>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </div>
                                </div>
                            ))}

                        <Input
                            id="image360"
                            type="file"
                            className="block w-full"
                            multiple
                            onChange={event => handleImageChange(event, setImage360s)}
                        />

                        <InputError messages={errors.image} className="mt-2" />
                    </div>
                </div>
                <div className="button">
                    <Link href="/dashboard-host">Quay lại</Link>
                    <Button className="btncategory">Tạo mới danh mục</Button>
                </div>
            </div>
        </form>
    )
}

export default CreateCategoryPage
