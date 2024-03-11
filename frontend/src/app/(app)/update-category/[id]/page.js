'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCategory } from '../../../../hooks/category';
import Input from '@/components/Input';
import Label from '@/components/Label';
import InputError from '@/components/InputError';
import Link from 'next/link';
import Button from '@/components/Button';

const UpdateCategoryPage = () => {
  const router = useRouter();
  const [category, setCategory] = useState(null);

  const { getCategoryById, updateCategoryById } = useCategory({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard-host',
  });

  const id = window.location.pathname.split('/').pop()
  const [initialNameCategory, setInitialNameCategory] = useState('');
  const [initialStatus, setInitialStatus] = useState('');
  const [initialImages, setInitialImages] = useState([]);

  const [name_category, setNameCategory] = useState('');
  const [images, setImages] = useState([]);
  const [image360s, setImage360s] = useState([]);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState([]);
  const [tempNameCategory, setTempNameCategory] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategoryById(id);
        setInitialNameCategory(response.name_category);
        setInitialStatus(response.status);
        setInitialImages(response.images);

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

  const handleImageChange = (event) => {
    setImages(Array.from(event.target.files));
  };

  const handleImage360Change = (event) => {
    setImage360s(Array.from(event.target.files));
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const formData = {
      name_category: name_category,
      status: status,
      image: images,
      image360: image360s,
    };

    try {
      // Cập nhật danh mục
      // Sau khi cập nhật thành công, gửi các ảnh lên server
      await Promise.all([
        setImages(images),
        ...images.map(async (image) => {
          const imageFormData = new FormData();
          imageFormData.append('image[]', image);
          // await axios.post(`/upload-image/${id}`, imageFormData);
        }),
        ...image360s.map(async (image360) => {
          const image360FormData = new FormData();
          image360FormData.append('image360[]', image360);
          // await axios.post(`/upload-image360/${id}`, image360FormData);
        }),
        console.log('formdata', formData)
      ]);

      await updateCategoryById({
        id: id,
        formData: formData,
      });
      router.push('/all-category');
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
      encType="multipart/form-data"
    >
      <div className="border rounded-lg p-4" color="blue">
        <h1 className="text-center">Chủ nhà chỉnh sửa danh mục</h1>

        <div className="mt-4">
          <Label htmlFor="nameCategory">Tên danh mục:</Label>
          <Input
            type="text"
            id="nameCategory"
            value={name_category}
            className="block w-full"
            onChange={(event) => setNameCategory(event.target.value)}
            required
            autoFocus
          />

          <InputError messages={errors.nameCategory} className="mt-2" />
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
            onChange={(event) => setStatus(event.target.value)}
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
  );
};

export default UpdateCategoryPage;