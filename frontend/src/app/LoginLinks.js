'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            {user ? (
                <Link
                    href="/dashboard"
                    className="ml-4 text-sm text-gray-700 underline"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="text-sm text-gray-700 underline"
                    >
                        Đăng nhập với vai trò khách thuê
                    </Link>

                    <Link
                        href="/register"
                        className="ml-4 text-sm text-gray-700 underline"
                    >
                        Đăng ký với vai trò khách thuê
                    </Link>

                    <Link
                        href="/register-host"
                        className="ml-4 text-sm text-gray-700 underline"
                    >
                        Đăng ký với vai trò chủ nhà
                    </Link>

                    <Link
                        href="/login-host"
                        className="ml-4 text-sm text-gray-700 underline"
                    >
                        Đăng nhập với vai trò chủ nhà
                    </Link>

                    
                </>
            )}
        </div>
    )
}

export default LoginLinks
