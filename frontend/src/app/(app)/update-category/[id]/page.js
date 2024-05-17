'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useCategory } from '../../../../hooks/category'
import Input from '@/components/Input'
import Label from '@/components/Label'
import InputError from '@/components/InputError'
import Link from 'next/link'
import Button from '@/components/Button'
import '../css.css'

const UpdateCategoryPage = (category) => {
    const router = useRouter()
    // const id = window.location.pathname.split('/').pop()
    // console.log('đã bảo là id', id)

    const { getCategoryById, updateCategoryById } = useCategory({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard-host',
    })

    const [name_category, setNameCategory] = useState('')
    const [images, setImages] = useState([])
    const [image360s, setImage360s] = useState([])
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState([])

    const [tempNameCategory, setTempNameCategory] = useState('')

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await getCategoryById(category.categoryId)
                setTempNameCategory(response.name_category)
                setStatus(response.status)
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchCategory()
    }, [category])

    useEffect(() => {
        setNameCategory(tempNameCategory)
    }, [tempNameCategory])

    const handleImageChange = event => {
        setImages(Array.from(event.target.files))
    }

    const handleImage360Change = event => {
        setImage360s(Array.from(event.target.files))
    }

    const submitForm = async event => {
        event.preventDefault()

        // Tạo formData để gửi lên server
        const formData = new FormData()
        formData.append('name_category', name_category)
        formData.append('status', status)

        // Thêm các ảnh vào formData
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

        try {
            await updateCategoryById({
                id: category.categoryId,
                formData: formData,
            }).then(() => {
                router.push('/dashboard-host');
            });
        } catch (error) {
            console.error('Error:', error)
            // Xử lý các lỗi và hiển thị thông báo lỗi nếu có
        }
    }

    const previewImages = () => {
        if (images.length > 0) {
            return images.map((image, index) => (
                <div key={index} className="w-32 h-32">
                    <Image
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index}`}
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
        <form
            onSubmit={submitForm}
            className="max-w-sm mx-auto"
            encType="multipart/form-data">
            <div className="flex flex-col flex-wrap gap-4"></div>
            <div class="containerupdatecate right-panel-active">
                <div class="containerupdatecate__form containerupdatecate--signup">
                    <form class="form">
                        <div className="headupdatecate">
                            <a className="headupdatecate">Chỉnh sửa danh mục </a>
                        </div>

                        <Input
                            type="text"
                            id="name_category"
                            value={name_category}
                            className="input"
                            placeholder="Tên danh mục"
                            onChange={event => setNameCategory(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.name_category}
                            className="mt-2"
                        />

                        <Input
                            type="text"
                            id="status"
                            value={status}
                            className="input"
                            onChange={event => setStatus(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.status}
                            className="mt-2"
                        />
                        
                    </form>
                </div>

                <div className="containerupdatecate__overlay">
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
                <div className="buttonupdatecate">
                <Button className="btnupdatecate">Lưu thay đổi</Button>
            </div>
            </div>
            
        </form>
    )
}

export default UpdateCategoryPage
