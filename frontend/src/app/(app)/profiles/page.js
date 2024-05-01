'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useProfile } from '../../../hooks/profile'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Image from 'next/image'
import './pro.css'
import Button from '@/components/Button'
import { useAuth } from '@/hooks/auth'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Profile = () => {
    const { user } = useAuth({ middleware: 'auth' })
    console.log('user test', user)
    const id = window.location.pathname.split('/').pop()
    const router = useRouter()

    const { createProfiles } = useProfile({
        middleware: 'auth',
        redirectIfAuthenticated: '/profiles',
    })

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState(null)
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState('')
    const [image, setImage] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('gender', gender)
        formData.append('birthday', birthday)
        formData.append('phone', phone)
        formData.append('address', address)
        formData.append('image', image)
        formData.append('id_user', user.id)
        createProfiles({
            formData,
            setStatus,
            setErrors,
        }).then(() => {
            router.push('/show-profile')
        })
        console.log('form profile', formData.getAll('image'))
    }
    const handleSubmit = async () => {
        try {
            await createProfiles(
                id,
                user.id,
                name,
                gender,
                birthday,
                phone,
                address,
                image,
            )
            console.log('Tạo mới profile thành công')
        } catch (error) {
            console.error('Lỗi khi tạo mới profile:', error)
        }
    }

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div class="container right-panel-active">
                <div class="container__form container--signup">
                    <form class="form">
                        <div className="head">
                            <a className="head">Tạo mới profile</a>
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
                    </form>
                </div>

                <div
                    className="container__overlay"
                    onClick={() => document.getElementById('image').click()}>
                    <div className="">
                        <label htmlFor="image" className="image-wrapper">
                            {image && (
                                <div className="w-32 h-32">
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="Selected"
                                        className="imagee"
                                    />
                                </div>
                            )}
                            <input
                                id="image"
                                type="file"
                                className="hidden"
                                onChange={event =>
                                    setImage(event.target.files[0])
                                }
                            />
                        </label>
                        <InputError messages={errors.image} className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="button">
                <Button className="btn" onClick={handleSubmit}>
                    Tạo
                </Button>
            </div>
        </form>
    )
}

export default Profile
