'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import './login.css'
import { Pannellum } from 'pannellum-react'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    // useEffect(() => {
    //     const panorama = pannellum.viewer('panorama-container', {
    //         type: 'equirectangular',
    //         panorama: '/images/căn hộ.jpg',
    //         // Các tùy chọn khác của Pannellum
    //     });
    // }, []);

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm} className="max-w-sm mx-auto">
                <div class="container right-panel-active">
                    <div class="container__form container--signup">
                        <div class="form">
                            <h1 className="head">
                                Đăng nhập cho khách thuê nhà
                            </h1>

                            <div>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="input"
                                    placeholder="Email"
                                    onChange={event =>
                                        setEmail(event.target.value)
                                    }
                                    required
                                    autoFocus
                                />

                                <InputError
                                    messages={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    className="input"
                                    placeholder="Mật khẩu"
                                    onChange={event =>
                                        setPassword(event.target.value)
                                    }
                                    required
                                    autoComplete="current-password"
                                />

                                <InputError
                                    messages={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                    <Button className="btn">Đăng nhập</Button>
                                <Link
                                    href="/"
                                    className="back"
                                    style={{ marginTop: '10px' }}>
                                    Quay lại?
                                </Link>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </form>
        </>
    )
}

export default Login
//   <div className="block mt-4">
//                     <label
//                         htmlFor="remember_me"
//                         className="inline-flex items-center">
//                         <input
//                             id="remember_me"
//                             type="checkbox"
//                             name="remember"
//                             className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             onChange={event =>
//                                 setShouldRemember(event.target.checked)
//                             }
//                         />

//                         <span className="ml-2 text-sm text-gray-600">
//                             Remember me
//                         </span>
//                     </label>
//                 </div>
