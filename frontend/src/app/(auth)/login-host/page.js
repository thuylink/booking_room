'use client'

import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import InputError from '@/components/InputError';
import Label from '@/components/Label';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import { useRouter } from 'next/navigation';
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus';
import { Pannellum } from 'pannellum-react';
import './loginhost.css';

const Login = () => {
    const router = useRouter();
    const { loginHost } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard-host',
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shouldRemember, setShouldRemember] = useState(false);
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);
    const [showErrorPopup, setShowErrorPopup] = useState(false); // Thêm state cho việc hiển thị popup lỗi

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset));
        } else {
            setStatus(null);
        }
    }, [router.reset, errors]);

    useEffect(() => {
        const panorama = pannellum.viewer('panorama-container', {
            type: 'equirectangular',
            // panorama: 'C:/Users/PC/OneDrive/Pictures/căn hộ.jpg',
            // Các tùy chọn khác của Pannellum
        });
    }, []);

    const submitForm = async event => {
        event.preventDefault();
    
        try {
            await loginHost({
                email,
                password,
                remember: shouldRemember,
                setErrors,
                setStatus,
            });
        } catch (error) {
            if (error.response && error.response.status === 403) {
                setShowErrorPopup(true); // Hiển thị popup khi có lỗi 401
            } else {
                console.error('Lỗi khi đăng nhập:', error);
            }
        }
    }
    

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm} className="max-w-sm mx-auto">
                <div className="container right-panel-active">
                    <div className="container__form container--signup">
                        <div className="form">
                            <h1 className="head">
                                Đăng nhập cho chủ nhà
                            </h1>
                            {showErrorPopup && ( // Hiển thị popup khi showErrorPopup là true
                                <div className="error-popup">
                                    <p>Thông tin tài khoản không hợp lệ. Vui lòng kiểm tra lại.</p>
                                    <button onClick={() => setShowErrorPopup(false)}>Đóng</button>
                                </div>
                            )}
                            <div>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="input"
                                    placeholder="Email"
                                    onChange={event => setEmail(event.target.value)}
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
                                    onChange={event => setPassword(event.target.value)}
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

                    <div className="container__overlay">
                        <div id="panorama-container" style={{ width: '100%', height: '500px' }}></div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;

//   <div>
//                     <Label htmlFor="email">Email</Label>

//                     <Input
//                         id="email"
//                         type="email"
//                         value={email}
//                         className="block mt-1 w-full"
//                         onChange={event => setEmail(event.target.value)}
//                         required
//                         autoFocus
//                     />

//                     <InputError messages={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <Label htmlFor="password">Password</Label>

//                     <Input
//                         id="password"
//                         type="password"
//                         value={password}
//                         className="block mt-1 w-full"
//                         onChange={event => setPassword(event.target.value)}
//                         required
//                         autoComplete="current-password"
//                     />

//                     <InputError
//                         messages={errors.password}
//                         className="mt-2"
//                     />
//                 </div>

//                 {/* Remember Me */}
//                 <div className="block mt-4">
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
