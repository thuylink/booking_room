'use client'
import React, { useState, useRef, useEffect } from 'react'
import { redirect, useRouter } from 'next/navigation'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import './profile.css'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@/components/Button'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import { Navbar, NavbarContent, Link } from '@nextui-org/react'
import { useProfile } from '../../../hooks/profile'
import { getProfile } from '../../../hooks/profile'
import { updateProfiles } from '../../../hooks/profile'
import { useAuth } from '@/hooks/auth'

const Profile = () => {
    const router = useRouter()
    const id = window.location.pathname.split('/').pop()
    const { profile } = useProfile() // Lấy thông tin hồ sơ từ hook
    const { user } = useAuth({ middleware: 'auth' })

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState(null)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState('')

    const variants = ['bordered']

    const [tempName, setTempName] = useState('')
    const [tempGender, setTempGender] = useState('')
    const [tempBirthday, setTempBirthday] = useState('')
    const [tempPhone, setTempPhone] = useState('')
    const [tempAddress, setTempAddress] = useState('')
    const [tempImage, setTempImage] = useState(null) // Giá trị tạm thời của ảnh mới

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await getProfile() // Sử dụng hàm getProfile để lấy thông tin hồ sơ từ API
                if (Array.isArray(response) && response.length > 0) {
                    const profileData = response[0] // Lấy phần tử đầu tiên trong mảng
                    setTempName(profileData.name)
                    setTempGender(profileData.gender)
                    setTempBirthday(profileData.birthday)
                    setTempPhone(profileData.phone)
                    setTempAddress(profileData.address)
                    setTempImage(profileData.image)
                } else {
                    console.log('Không có dữ liệu hồ sơ')
                }
            } catch (error) {
                console.log('Lỗi khi fetch profile:', error)
            }
        }
        fetchProfile()
    }, [])

    useEffect(() => {
        setName(tempName)
        setGender(tempGender)
        setBirthday(tempBirthday)
        setPhone(tempPhone)
        setAddress(tempAddress)
        setImage(tempImage)
    }, [tempName, tempGender, tempBirthday, tempPhone, tempAddress, tempImage])

    const submitForm = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('gender', gender)
        formData.append('phone', phone)
        formData.append('birthday', birthday)
        formData.append('address', address)
        if (image) {
            formData.append('image', image) // Thêm ảnh mới vào formData nếu có
        }

        try {
            await updateProfiles({ setErrors, setStatus, formData })
            console.log('form update cate', formData)

            console.log('Cập nhật profile thành công')
            router.push('/show-profile')
            // router.push('update-profile')
        } catch (error) {
            console.log('Lỗi cập nhật profile: ', error)
        }
    }

    console.log('hiển thị lại profile', profile)

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div className="flex flex-col flex-wrap gap-4">
                {variants.map(variant => (
                    <Breadcrumbs key={variant} variant={variant}>
                        <BreadcrumbItem>
                            <Link href="/dashboard">
                                <span>Trang chủ</span>
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link
                                href="#"
                                onClick={() => window.history.back(2)}>
                                <span>Xem chi tiết</span>
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>Cập nhật hồ sơ</BreadcrumbItem>
                    </Breadcrumbs>
                ))}
            </div>
            <div className="container right-panel-active">
                <div className="container__form container--signup">
                    <div className="form">
                        {' '}
                        <div className="head">
                            {' '}
                            <span className="head">Cập nhật hồ sơ</span>{' '}
                        </div>
                        <Input
                            type="text"
                            id="nameCategory"
                            value={name}
                            placeholder="Họ và tên"
                            className="input"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />
                        <InputError messages={errors.name} className="mt-2" />
                        <Input
                            type="text"
                            id="nameCategory"
                            value={gender}
                            className="input"
                            onChange={event => setGender(event.target.value)}
                            required
                            placeholder="Giới tính"
                            autoFocus
                        />
                        <InputError messages={errors.gender} className="mt-2" />{' '}
                        <Input
                            type="date"
                            id="nameCategory"
                            value={birthday}
                            className="input"
                            placeholder="Ngày sinh"
                            onChange={event => setBirthday(event.target.value)}
                            required
                            autoFocus
                        />
                        <InputError
                            messages={errors.birthday}
                            className="mt-2"
                        />
                        <Input
                            type="text"
                            id="nameCategory"
                            value={phone}
                            className="input"
                            placeholder="Số điện thoại"
                            onChange={event => setPhone(event.target.value)}
                            required
                            autoFocus
                        />
                        <InputError messages={errors.phone} className="mt-2" />
                        <Input
                            type="text"
                            id="nameCategory"
                            value={address}
                            className="input"
                            placeholder="Địa chỉ"
                            onChange={event => setAddress(event.target.value)}
                            required
                            autoFocus
                        />
                        <InputError
                            messages={errors.address}
                            className="mt-2"
                        />
                    </div>
                </div>

                <input
                    id="image"
                    type="file"
                    className="hidden"
                    onChange={event => {
                        const selectedImage = event.target.files[0]
                        setImage(selectedImage)
                    }}
                />

                <div
                    className="container__overlay"
                    onClick={() => document.getElementById('image').click()}>
                    <div className="">
                        <label htmlFor="image" className="image-wrapper">
                            {image && image instanceof Blob && (
                                <div className="w-32 h-32">
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="Selected"
                                        className="imagee"
                                    />
                                </div>
                            )}
                        </label>
                        <InputError messages={errors.image} className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="button">
                <Button type="submit" className="btn">
                    {' '}
                    Cập nhật
                </Button>
            </div>
        </form>
    )
}

export default Profile
