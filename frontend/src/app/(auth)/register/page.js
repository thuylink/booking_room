'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import './register.css'
const Page = () => {
    
    const router = useRouter()

    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/login',
    })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            usertype: 0,
            password_confirmation: passwordConfirmation,
            setErrors,
        }).then(() => {
            router.push('/login');
        })
    }

    return (
        <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div class="container right-panel-active">
                <div class="container__form container--signup">
                    <div class="form">
                        <h1 className="head">Đăng ký cho khách thuê</h1>

                        <div className="mtregisterhost-4">
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                placeholder="Tên đăng nhập"
                                className="input"
                                onChange={event => setName(event.target.value)}
                                required
                                autoFocus
                            />

                            <InputError
                                messages={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mtregisterhost-4">

                            <Input
                                id="email"
                                type="email"
                                value={email}
                                placeholder="Email"
                                className="input"
                                onChange={event => setEmail(event.target.value)}
                                required
                            />

                            <InputError
                                messages={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mtregisterhost-4">

                            <Input
                                id="password"
                                type="password"
                                value={password}
                                placeholder="Mật khẩu"
                                className="input"
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                                required
                                autoComplete="new-password"
                            />

                            <InputError
                                messages={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mtregisterhost-4">

                            <Input
                                id="passwordConfirmation"
                                type="password"
                                value={passwordConfirmation}
                                placeholder="Xác nhận mật khẩu"
                                className="input"
                                onChange={event =>
                                    setPasswordConfirmation(event.target.value)
                                }
                                required
                            />

                            <InputError
                                messages={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <Button className="btn">Đăng ký</Button>
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
    )
}

export default Page
// <form onSubmit={submitForm}>
//             {/* Name */}
//             <h1 style={{ display: 'flex', justifyContent: 'center' }}>Đăng ký cho khách thuê nhà</h1>

//             <div>
//                 <Label htmlFor="name">Name</Label>

//                 <Input
//                     id="name"
//                     type="text"
//                     value={name}
//                     className="block mt-1 w-full"
//                     onChange={event => setName(event.target.value)}
//                     required
//                     autoFocus
//                 />
                        
//                 <InputError messages={errors.name} className="mt-2" />
//             </div>

//             {/* Email Address */}
//             <div className="mt-4">
//                 <Label htmlFor="email">Email</Label>

//                 <Input
//                     id="email"
//                     type="email"
//                     value={email}
//                     className="block mt-1 w-full"
//                     onChange={event => setEmail(event.target.value)}
//                     required
//                 />

//                 <InputError messages={errors.email} className="mt-2" />
//             </div>

//             {/* Password */}
//             <div className="mt-4">
//                 <Label htmlFor="password">Password</Label>

//                 <Input
//                     id="password"
//                     type="password"
//                     value={password}
//                     className="block mt-1 w-full"
//                     onChange={event => setPassword(event.target.value)}
//                     required
//                     autoComplete="new-password"
//                 />

//                 <InputError messages={errors.password} className="mt-2" />
//             </div>

//             {/* Confirm Password */}
//             <div className="mt-4">
//                 <Label htmlFor="passwordConfirmation">
//                     Confirm Password
//                 </Label>

//                 <Input
//                     id="passwordConfirmation"
//                     type="password"
//                     value={passwordConfirmation}
//                     className="block mt-1 w-full"
//                     onChange={event =>
//                         setPasswordConfirmation(event.target.value)
//                     }
//                     required
//                 />

//                 <InputError
//                     messages={errors.password_confirmation}
//                     className="mt-2"
//                 />
//             </div>

//             <div className="flex items-center justify-end mt-4">
//                 <Link
//                     href="/"
//                     className="underline text-sm text-gray-600 hover:text-gray-900">
//                     Back
//                 </Link>
                
//                 <Button className="ml-4">Register</Button>
//             </div>
//         </form>