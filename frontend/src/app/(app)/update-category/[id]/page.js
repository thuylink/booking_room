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

const UpdateCategoryPage = () => {
    const router = useRouter()
    const id = window.location.pathname.split('/').pop()

    const { getCategoryById, updateCategoryById } = useCategory({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard-host',
    })

    const [name_category, setNameCategory] = useState('');
    const [images, setImages] = useState([]);
    const [image360s, setImage360s] = useState([]);
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState([]);

    const [tempNameCategory, setTempNameCategory] = useState('');
    const [tempImages, setTempImages] = useState([]);
    const [tempImage360s, setTempImage360s] = useState([]);

    // Sử dụng useEffect để fetch thông tin về danh mục khi component được render
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await getCategoryById(id);
                setTempNameCategory(response.name_category);
                setStatus(response.status);
                setTempImages(response.image);
                setTempImage360s(response.image360);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCategory();
    }, [id]);

    // Cập nhật state khi thông tin về danh mục thay đổi
    useEffect(() => {
        setNameCategory(tempNameCategory);
    }, [tempNameCategory]);

    // Hàm xử lý khi thay đổi ảnh
    const handleImageChange = event => {
        setImages(Array.from(event.target.files));
    };

    // Hàm xử lý khi thay đổi ảnh 360°
    const handleImage360Change = event => {
        setImage360s(Array.from(event.target.files));
    };

    // Hàm xử lý khi submit form
    const submitForm = async event => {
        event.preventDefault();

        // Tạo formData để gửi lên server
        const formData = {
            name_category: name_category,
            status: status,
            image: images,
            image360: image360s,
        };

        try {
            // Gọi hàm updateCategoryById từ hook useCategory để cập nhật thông tin danh mục
            await updateCategoryById({
                id: id,
                formData: formData,
            });
            router.push('/all-category'); // Chuyển hướng về trang danh sách danh mục sau khi cập nhật thành công
        } catch (error) {
            console.error('Error:', error);
            // Xử lý các lỗi và hiển thị thông báo lỗi nếu có
        }
    };

    // Hàm hiển thị ảnh xem trước
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
            ));
        }
        return null;
    };

    // Hàm hiển thị ảnh 360° xem trước
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
            ));
        }
        return null;
    };

    return (
        <form
            onSubmit={submitForm}
            className="max-w-sm mx-auto"
            encType="multipart/form-data">
            <div className="border rounded-lg p-4" color="blue">
                <h1 className="text-center">Chủ nhà chỉnh sửa danh mục</h1>

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
                    {previewImages()}
                    <Input
                        id="image"
                        type="file"
                        className="block w-full"
                        onChange={handleImageChange}
                        multiple
                        accept="image/*"
                    />
                </div>

                <div className="mt-4">
                    <Label htmlFor="image360">Hình ảnh 360°:</Label>
                    {previewImage360s()}
                    <Input
                        id="image360"
                        type="file"
                        className="block w-full"
                        onChange={handleImage360Change}
                        multiple
                        accept="image/*"
                    />
                </div>

                <div className="mt-4">
                    <Label htmlFor="status">Trạng thái:</Label>
                    <Input
                        id="status"
                        type="text"
                        tu
                        value={status}
                        className="block w-full"
                        onChange={event => setStatus(event.target.value)}
                        required
                    />

                    <InputError messages={errors.status} className="mt-2" />
                </div>

                <div className="mt-6">
                    <Button type="submit" className="w-full" color="blue">
                        Cập nhật
                    </Button>
                </div>

                <div className="mt-4">
                    <Link href="/all-category">
                        <Button className="text-center block underline">
                            Quay lại danh sách danh mục
                        </Button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default UpdateCategoryPage