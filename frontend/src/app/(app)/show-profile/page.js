'use client'

import React from 'react'
import { useProfile } from '@/hooks/profile'
import './show-profile.css'
import Button from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons' // Sử dụng biểu tượng user
import { faVenusMars } from '@fortawesome/free-solid-svg-icons' // Import icon user-group-simple
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons' // Import icon user-group-simple
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons' // Import icon user-group-simple
import { faLocationPin } from '@fortawesome/free-solid-svg-icons' // Import icon user-group-simple
import Link from 'next/link'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'

export const ShowProfile = () => {
    const { profile, error, mutate } = useProfile()
    const variants = ['bordered']

    console.log('có profile r', profile)
    if (error) {
        return <div>Error: {error.message}</div>
    }
    if (!profile) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="flex flex-col flex-wrap gap-4">
                {variants.map(variant => (
                    <Breadcrumbs key={variant} variant={variant}>
                        import Link from 'next/link';
                        <BreadcrumbItem>
                            <Link href="/dashboard">
                                <span>Trang chủ</span>
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link
                                href="javascript:void(0)"
                                onClick={() => window.history.back()}>
                                <span>Xem chi tiết</span>
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>Chi tiết hồ sơ</BreadcrumbItem>
                    </Breadcrumbs>
                ))}
            </div>
            {profile.map((item, index) => (
                <div key={index}>
                    <form className="max-w-sm mx-auto">
                        <div class="container right-panel-active">
                            <div class="container__form container--signup">
                                <form class="form">
                                    <div className="head">
                                        <a className="head">Chi tiết hồ sơ</a>
                                    </div>
                                    <span className="input">
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            style={{ marginRight: '15px' }}
                                        />
                                        <a>{item.name}</a>
                                    </span>
                                    <span className="input">
                                        <FontAwesomeIcon
                                            icon={faVenusMars}
                                            style={{ marginRight: '15px' }}
                                        />
                                        <a>{item.gender}</a>
                                    </span>
                                    <span className="input">
                                        <FontAwesomeIcon
                                            icon={faBirthdayCake}
                                            style={{ marginRight: '15px' }}
                                        />
                                        <a>{item.birthday}</a>
                                    </span>
                                    <span className="input">
                                        <FontAwesomeIcon
                                            icon={faMobilePhone}
                                            style={{ marginRight: '15px' }}
                                        />
                                        <a>{item.phone}</a>
                                    </span>
                                    <span className="input">
                                        <FontAwesomeIcon
                                            icon={faLocationPin}
                                            style={{ marginRight: '15px' }}
                                        />
                                        <a>{item.address}</a>
                                    </span>
                                    <Link href="/update-profile">
                                        <Button className="btn">
                                            Cập nhật
                                        </Button>
                                    </Link>
                                </form>
                            </div>

                            <div
                                className="container__overlay"
                                onClick={() =>
                                    document.getElementById('image').click()
                                }>
                                <div className="">
                                    <label
                                        htmlFor="image"
                                        className="image-wrapper">
                                        {item.image && (
                                            <a>
                                                <img
                                                    src={`http://127.0.0.1:8000/uploads/avt/${item.image}`}
                                                    alt="Image"
                                                    width="270px"
                                                    height="200px"
                                                    className="rounded-image"
                                                />
                                            </a>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ))}
        </div>
    )
}

export default ShowProfile

// <p>Name: {item.name}</p>
//                     <p>Address: {item.address}</p>
//                     <p>Birthday: {item.birthday}</p>
//                     <p>Gender: {item.gender}</p>
//                     <p>Phone: {item.phone}</p>
//                     {/* Thêm các phần tử JSX cho các trường khác trong profile */}
