'use client'
import './book_style.css'
import React, { useState, useEffect } from 'react'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import { Navbar, NavbarContent, Link } from '@nextui-org/react'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Button from '@/components/Button'
import { useBooking } from '../../../hooks/booking'
import { useAuth } from '@/hooks/auth'

const BookingPopup = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const { addBooking } = useBooking({
        middleware: 'auth',
        redirectIfAuthenticated: '/profiles',
    })
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [guestNumber, setGuestNumber] = useState('')
    const [guestName, setGuestName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState([])
    const [message, setMessage] = useState([])
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState([])

    const variants = ['bordered']

    const submitForm = event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('id_user', user.id)
        formData.append('id_product', 31)
        formData.append('start_date', startDate)
        formData.append('end_date', endDate)
        // formData.append('price', price)
        formData.append('guestNumber', guestNumber)
        formData.append('guestName', guestName)
        formData.append('phone', phone)
        formData.append('email', email)
        formData.append('message', message)
        addBooking({
            formData,
            setErrors,
        })
    }

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            
            <div className="container right-panel-active">
                <div className="container__form container--signup">
                    <div className="form">
                        {' '}
                        <div className="in">
                            <div className="head">
                                {' '}
                                <span className="head">
                                    Thông tin đặt phòng
                                </span>{' '}
                            </div>

                            <div className="date">
                                <div className="date-input">
                                    <input
                                        type="date"
                                        id="check-in"
                                        value={startDate}
                                        className="input"
                                        placeholder="Check-in"
                                        onChange={event =>
                                            setStartDate(event.target.value)
                                        }
                                        required
                                        autoFocus
                                    />
                                </div>
                                <div className="date-input">
                                    <input
                                        type="date"
                                        id="check-out"
                                        value={endDate}
                                        className="input"
                                        placeholder="Check-out"
                                        onChange={event =>
                                            setEndDate(event.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="date">
                                <div className="date-input">
                                    <Input
                                        type="text"
                                        id="check-in"
                                        value={guestNumber}
                                        className="input"
                                        placeholder="Số khách"
                                        onChange={event =>
                                            setGuestNumber(event.target.value)
                                        }
                                        required
                                        autoFocus
                                    />
                                </div>
                                <div className="date-input">
                                    <Input
                                        type="text"
                                        id="check-out"
                                        className="input"
                                        value={guestName}
                                        placeholder="Tên người đại diện"
                                        onChange={event =>
                                            setGuestName(event.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="date">
                                <div className="date-input">
                                    <Input
                                        type="text"
                                        id="check-in"
                                        value={phone}
                                        className="input"
                                        placeholder="Điện thoại"
                                        onChange={event =>
                                            setPhone(event.target.value)
                                        }
                                        required
                                        autoFocus
                                    />
                                </div>
                                <div className="date-input">
                                    <Input
                                        type="text"
                                        value={email}
                                        id="check-out"
                                        className="input"
                                        placeholder="Email"
                                        onChange={event =>
                                            setEmail(event.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <Input
                                    type="text"
                                    id="nameCategory"
                                    value={message}
                                    className="input"
                                    onChange={event =>
                                        setMessage(event.target.value)
                                    }
                                    required
                                    placeholder="Lời nhắn cho chủ nhà"
                                    autoFocus
                                />
                                <InputError
                                    messages={errors.gender}
                                    className="mt-2"
                                />
                            </div>
                            <div className="input-wrapper">
                                <Input
                                    type="text"
                                    id="nameCategory"
                                    value={price}
                                    className="input"
                                    onChange={event =>
                                        setPrice(event.target.value)
                                    }
                                    required
                                    placeholder="Tổng tiền"
                                    autoFocus
                                />
                                <InputError
                                    messages={errors.gender}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container__overlay">
                    <div className="">
                        <label
                            htmlFor="image"
                            className="image-wrapper"></label>
                        <InputError messages={errors.image} className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="button">
                <Button type="submit" className="btn">
                    {' '}
                    {/* Thêm type="submit" */}
                    Cập nhật
                </Button>
            </div>
        </form>
    )
}

export default BookingPopup

// <div className="flex flex-col flex-wrap gap-4">
//                 {variants.map(variant => (
//                     <Breadcrumbs key={variant} variant={variant}>
//                         <BreadcrumbItem>
//                             <Link href="/dashboard">
//                                 <span>Trang chủ</span>
//                             </Link>
//                         </BreadcrumbItem>
//                         <BreadcrumbItem>
//                             <Link
//                                 href="#"
//                                 onClick={() => window.history.back(2)}>
//                                 <span>Xem chi tiết</span>
//                             </Link>
//                         </BreadcrumbItem>
//                         <BreadcrumbItem>Đặt phòng</BreadcrumbItem>
//                     </Breadcrumbs>
//                 ))}
//             </div>