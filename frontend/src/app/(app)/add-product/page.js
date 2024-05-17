'use client'

import { useCategory } from '../../../hooks/category'
import Input from '@/components/Input'
import Label from '@/components/Label'
import InputError from '@/components/InputError'
import Link from 'next/link'
import Button from '@/components/Button'
import { useProduct } from '../../../hooks/product'
import { useState } from 'react'
import Image from 'next/image'
import './add_product.css'
import { useRouter } from 'next/navigation'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '@/hooks/auth'

const CreateProductPage = ({onProductCreated}) => {
    const router = useRouter()

    const { createProduct } = useProduct({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })
    const {user} = useAuth();
    const { category, error, mutate } = useCategory()
    console.log('category của product', category)

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
    const [id_owner, setIdOwner] = useState('')
    const [errors, setErrors] = useState([])

    const [isDeletingImage, setIsDeletingImage] = useState(false);


    if (error) {
        return <div>{error}</div>
    }

    if (!category) {
        return <div>Loading...</div>
    }

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

    const submitForm = async (event) => {
        event.preventDefault();
        
            const formData = new FormData();
            formData.append('id_category', id_category);
            formData.append('privacy_type', selectedPrivacy);
            formData.append('location', location);
            formData.append('capacity', capacity);
            formData.append('amenities', selectedAmenities);
            images.forEach(image => formData.append('image[]', image));
            image360s.forEach(image360 => formData.append('image360[]', image360));
            formData.append('title', title);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('id_owner', user.id);
    
            // createProduct({
            //     formData,
            //     setErrors,
            // }).then(() => {
            //     onProductCreated()
            // });

            try {
                await createProduct({
                    formData,
                    setErrors,
                })
                // Gọi callback để báo cho Dashboard biết danh mục mới đã được tạo
                onProductCreated()
            } catch (error) {
                console.error('Error creating product:', error)
            }
    }

    const handleImageChange = (event, setImageFunction) => {
        const selectedImages = Array.from(event.target.files)
        setImageFunction(prevImages => [...prevImages, ...selectedImages])
    }
    const removeImage = (index, arrayName) => {
        if (arrayName === 'images') {
            // const updatedImages = [...images];
            // updatedImages.splice(index, 1);
            // setImages(updatedImages);
            setImages(images => images.filter((_, i) => i !== index))
        } else if (arrayName === 'image360s') {
            // const updatedImage360s = [...image360s];
            // updatedImage360s.splice(index, 1);
            // setImage360s(updatedImage360s);
            setImage360s(image360s => image360s.filter((_, i) => i !== index))
        }
    
    };
    
    
    

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div className="flex flex-col flex-wrap gap-4"></div>
            <div class="containerproduct right-panel-active">
                <div class="containerproduct__form containerproduct--signup">
                    <form class="form">
                        <div className="headproduct">
                            <a className="headproduct">Tạo mới nhà ở </a>
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
                            <option value="">Phạm vi sử dụng</option>
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
                            placeholder="Địa chỉ"
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
                            placeholder="Sức chứa"
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

                        <Input
                            type="text"
                            id="title"
                            placeholder="Tiêu đề"
                            value={title}
                            className="input"
                            onChange={event => setTitle(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.title} className="mt-2" />

                        <div className="edit">
                            <CKEditor
                                editor={ClassicEditor}
                                data={description}
                                placeholder="Mô tả"
                                onChange={(event, editor) => {
                                    const data = editor.getData()
                                    setDescription(data)
                                }}
                                className="input"
                                required
                                autoFocus
                            />
                        </div>

                        <InputError
                            messages={errors.description}
                            className="mt-2"
                        />

                        <Input
                            id="price"
                            type="text"
                            placeholder="Chi phí"
                            value={price}
                            className="input"
                            onChange={event => setPrice(event.target.value)}
                            required
                        />

                        <InputError messages={errors.price} className="mt-2" />

                        <div className="mt-4">

                            <div className="mt-4 flex">
                                <div className="amenitiesproduct-column-left w-1/2">
                                    {amenitiesOptions.slice(0, 11).map(option => (
                                        <div key={option.id} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={option.label}
                                                value={option.label}
                                                checked={selectedAmenities.includes(option.label)}
                                                onChange={handleAmenitiesChange}
                                            />
                                            <label htmlFor={option.label}>{option.label}</label>
                                        </div>
                                    ))}
                                </div>
                                <div className="amenitiesproduct-column-right w-1/2">
                                    {amenitiesOptions.slice(11).map(option => (
                                        <div key={option.id} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={option.label}
                                                value={option.label}
                                                checked={selectedAmenities.includes(option.label)}
                                                onChange={handleAmenitiesChange}
                                            />
                                            <label htmlFor={option.label}>{option.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <InputError
                                messages={errors.amenities}
                                className="mt-2"
                            />
                        </div>
                    </form>
                </div>

                <div className="containerproduct__overlay">
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
                            className="absolute top-2 right-2"
                            onClick={() =>
                                removeImage(index, 'images')
                            }>
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
                            className="absolute top-2 right-2"
                            onClick={() =>
                                                removeImage(index, 'image360s')
                                            }>
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
                <Button className="btnproduct">Tạo mới nhà </Button>
            </div>
            </div>
            
        </form>
    )
}
export default CreateProductPage

