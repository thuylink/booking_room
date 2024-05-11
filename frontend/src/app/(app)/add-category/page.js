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

const CreateCategoryPage = () => {
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

    const submitForm = event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('name_category', name_category)
        images.forEach(image => formData.append('image[]', image))
        image360s.forEach(image360 => formData.append('image360[]', image360))
        formData.append('status', status)
        createCategory({
            formData,
            setStatus,
            setErrors,
        }).then(() => {
            router.push('all-category')
        })
        console.log(
            'form add đây',
            formData.getAll('image[]', 'name_category', 'image360[]'),
        )
    }

    const removeImage = (index, arrayName) => {
        if (arrayName === 'images') {
            const updatedImages = [...images]
            updatedImages.splice(index, 1)
            setImages(updatedImages)
        } else if (arrayName === 'image360s') {
            const updatedImage360s = [...image360s]
            updatedImage360s.splice(index, 1)
            setImage360s(updatedImage360s)
        }
    }

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div className="flex flex-col flex-wrap gap-4"></div>
            <div class="containercategory right-panel-active">
                <div class="containercategory__form containercategory--signup">
                    <form class="form">
                        <div className="headcategory">
                            <a className="headcategory">Tạo mới danh mục </a>
                        </div>
                        <Input
                            type="text"
                            id="nameCategory"
                            value={name_category}
                            placeholder="Tên danh mục"
                            className="input"
                            onChange={event =>
                                setNameCategory(event.target.value)
                            }
                            required
                            autoFocus
                        />
                        <InputError messages={errors.name} className="mt-2" />

                        <Input
                            type="text"
                            id="status"
                            value={status}
                            className="input"
                            placeholder="Trạng thái"
                            onChange={event => setStatus(event.target.value)}
                            required
                            autoFocus
                        />
                        <InputError
                            messages={errors.address}
                            className="mt-2"
                        />
                    </form>
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
                            onChange={event => {
                                const selectedImages = Array.from(
                                    event.target.files,
                                )
                                setImages([...images, ...selectedImages])
                            }}
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
                            onChange={event => {
                                const selectedImages360 = Array.from(
                                    event.target.files,
                                )
                                setImage360s([
                                    ...image360s,
                                    ...selectedImages360,
                                ])
                            }}
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
// <div className="border rounded-lg p-4" color="blue">
//                 <h1 className="text-center">Chủ nhà thêm mới danh mục</h1>

//                 <div className="mt-4">
//                     <Label htmlFor="nameCategory">Tên danh mục:</Label>
//                     <Input
// type="text"
// id="nameCategory"
// value={name_category}
// className="block w-full"
// onChange={event => setNameCategory(event.target.value)}
// required
// autoFocus
//                     />

//                     <InputError
//                         messages={errors.nameCategory}
//                         className="mt-2"
//                     />
//                 </div>

//                 <div className="mt-4">
//                     <Label htmlFor="image">Hình ảnh:</Label>
//                     {images.length > 0 &&
//                         images.map((image, index) => (
//                             <div key={index} className="w-32 h-32">
//                                 <Image
//                                     src={URL.createObjectURL(image)}
//                                     // alt={`Preview ${index}`}
//                                     layout="responsive"
//                                     width={200}
//                                     height={200}
//                                 />
//                             </div>
//                         ))}

//                     <Input
//                         id="image"
//                         type="file"
//                         className="block w-full"
//                         onChange={event =>
//                             setImages([...images, event.target.files[0]])
//                         }
//                     />

//                     <InputError messages={errors.image} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <Label htmlFor="image">Hình ảnh 360:</Label>
// {image360s.length > 0 &&
//     image360s.map((image360, index) => (
//         <div key={index} className="w-32 h-32">
//             <Image
//                 src={URL.createObjectURL(image360)}
//                 // alt={`Preview ${index}`}
//                 layout="responsive"
//                 width={200}
//                 height={200}
//             />
//         </div>
//     ))}

//                     <Input
//                         id="image360"
//                         type="file"
//                         className="block w-full"
//                         onChange={event =>
//                             setImage360s([...image360s, event.target.files[0]])
//                         }
//                     />

//                     <InputError messages={errors.image} className="mt-2" />
//                 </div>
//                 <div className="mt-4">
//                     <Label htmlFor="status">Trạng thái:</Label>
//                     <Input
//                         id="status"
//                         type="text"
//                         value={status}
//                         className="block w-full"
//                         onChange={event => setStatus(event.target.value)}
//                         required
//                     />

//                     <InputError messages={errors.status} className="mt-2" />
//                 </div>
//             </div>

//             <div className="flex items-center justify-end mt-4">
//                 <Link
//                     href="/dashboard-host"
//                     className="underline text-sm text-gray-600 hover:text-gray-900">
//                     Quay lại
//                 </Link>

//                 <Button className="ml-4">Tạo mới danh mục</Button>
//             </div>
