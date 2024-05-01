'use client'
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import './profile.css';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@/components/Button'

const Profile = () => {
    const router = useRouter()
    const id = window.location.pathname.split('/').pop()
    console.log('id user ',id);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([])

    const submitForm = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('birthday', birthday);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('image', image);

        updateProfileById({
            id:id,
            formData,
            setErrors,
        }).then(() => {
            router.push('/show-profile');
        });
    };

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
            console.log('Cập nhật profile thành công')
        } catch (error) {
            console.error('Lỗi khi cập nhật profile:', error)
        }
    }

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div class="container right-panel-active">
                <div class="container__form container--signup">
                    <form class="form">
                        <div className="head">
                            <a className="head">Sửa profile</a>
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
                    Cập nhật
                </Button>
            </div>
        </form>
    );
};

export default Profile;
