'use client'

import Input from '@/components/Input'
import Label from '@/components/Label'
import InputError from '@/components/InputError'
import Link from 'next/link'
import Button from '@/components/Button'
import {
    useCategory,
    updateCategoryById,
    getCategoryById,
} from '../../../../hooks/category'
import { useEffect, useState } from 'react'
import Image from 'next/image'
// import '../update_product.css'
import { useRouter } from 'next/navigation'

const UpdateCategoryPage = () => {
    const { getCategoryById, updateCategoryById } = useCategory({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard-host',
    })

    const router = useRouter()
    const id = window.location.pathname.split('/').pop()
    const [initialNameCategory, setInitialNameCategory] = useState('')
    const [initialStatus, setInitialStatus] = useState('')
    const [name_category, setNameCategory] = useState('')
    const [images, setImages] = useState([])
    const [image360s, setImage360s] = useState([])
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState([])
    const [tempNameCategory, setTempNameCategory] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategoryById(id);
        setInitialNameCategory(response.name_category);
        setInitialStatus(response.status);
        setTempNameCategory(response.name_category);
        setStatus(response.status);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCategory();
  }, [id]);

  useEffect(() => {
    setNameCategory(tempNameCategory);
  }, [tempNameCategory]);

    const handleNameCategoryChange = event => {
        setNameCategory(event.target.value);
        setTempNameCategory(event.target.value);
      }

    const handleStatusChange = event => {
        setStatus(event.target.value)
    }

    const submitForm = event => {
        event.preventDefault()

        const formData = new FormData()

        formData.append('name_category', name_category)
        images.forEach(image => formData.append('image[]', image))
        image360s.forEach(image360 => formData.append('image360[]', image360))
        formData.append('status', status)

        updateCategoryById({
            formData,
            setErrors,
          }).then((response) => {
            router.push('/all-category');
            
            // Cập nhật giá trị mới sau khi đã sửa
            setNameCategory(response.name_category);
            setStatus('');
          });
    }

    const previewImages = () => {
        if (images.length > 0) {
            return images.map((image, index) => (
                <div key={index} className="w-32 h-32">
                    <Image
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index}`}
                        // layout="responsive"
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
            <div className="border rounded-lg p-4" color="blue">
                <h1 className="text-center">Chủ nhà chỉnh sửa danh mục</h1>

                <div className="mt-4">
                    <Label htmlFor="nameCategory">Tên danh mục:</Label>
                    <Input
                        type="text"
                        id="nameCategory"
                        value={name_category}
                        className="block w-full"
                        onChange={handleNameCategoryChange}
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

                    <InputError messages={errors.image} className="mt-2" />
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

                    <InputError messages={errors.image360} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="status">Trạng thái:</Label>
                    <Input
                        id="status"
                        type="text"
                        value={status}
                        className="block w-full"
                        onChange={handleStatusChange}
                        required
                    />

                    <InputError messages={errors.status} className="mt-2" />
                </div>
            </div>

            <div className="flex items-center justify-end mt-4">
                <Link
                    href="/"
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    Quay lại
                </Link>

                <Button className="ml-4">Chỉnh sửa danh mục</Button>
            </div>
        </form>
    )
}

export default UpdateCategoryPage
