'use client'

import Input from '@/components/Input'
import Label from '@/components/Label'
import InputError from '@/components/InputError'
import Link from 'next/link'
import Button from '@/components/Button'
import { useCategory } from '../../../hooks/category'
import { useState } from 'react'

const CreateCategoryPage = () => {
    const { createCategory } = useCategory({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })
    const [name_category, setNameCategory] = useState('')
    const [image, setImage] = useState('')
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        createCategory({
            name_category,
            image,
            status,
            setErrors,
            setStatus,
        })
    }

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div className="border rounded-lg p-4" color="blue">
                <h1 className="text-center">Chủ nhà thêm mới danh mục</h1>

                <div className="mt-4">
                    <Label htmlFor="nameCategory">Tên danh mục:</Label>
                    <Input
                        type="text"
                        id="nameCategory"
                        value={name_category}
                        className="block w-full"
                        onChange={event => setNameCategory(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError
                        messages={errors.nameCategory}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <Label htmlFor="image">Hình ảnh:</Label>
                    <Input
                        id="image"
                        type="text"
                        value={image}
                        className="block w-full"
                        onChange={event => setImage(event.target.value)}
                        required
                    />

                    <InputError messages={errors.image} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="status">Trạng thái:</Label>
                    <Input
                        id="status"
                        type="text"
                        value={status}
                        className="block w-full"
                        onChange={event => setStatus(event.target.value)}
                        required
                    />

                    <InputError messages={errors.status} className="mt-2" />
                </div>
            </div>

            <div className="flex items-center justify-end mt-4">
                <Link
                    href="/"
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    Back
                </Link>

                <Button className="ml-4">Tạo mới danh mục</Button>
            </div>
        </form>
    )
}

export default CreateCategoryPage
