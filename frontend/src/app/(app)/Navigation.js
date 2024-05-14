import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import React, { useEffect } from 'react'
import { color } from 'framer-motion'
import { useProfile } from '../../hooks/profile'
import '../(app)/navi.css'
const Navigation = ({ user }) => {
    const { profile, error, mutate } = useProfile()

    console.log('user', user)
    const router = useRouter()
    const { logout } = useAuth()
    // const { profile } = useAuth()

    const [open, setOpen] = useState(false)

    const onClick = async () => {
        try {
            const userProfile = await profile;
            if (userProfile) {
                router.push('/show-profile');
            } else {
                router.push('/profiles');
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            // Handle error as needed
        }
    }
   
    useEffect(() => {
        // if (user?.email_verified_at === null) {
        //     setShowVerificationPopup(true);
        // } else {
        //     setShowVerificationPopup(false);
        // }
    }, [user?.email_verified_at])
    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center"></div>
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink
                                href="/dashboard"
                                active={router.pathname === '/dashboard'}>
                                <div className="flex items-center">
                                    <img
                                        src="../../logo-airbnb.jpg"
                                        alt="Logo"
                                        className="mr-2"
                                    />
                                    <span>Dashboard</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                    <div className="upplease" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: '999999' }}>
                        <Dropdown
                            align="right"
                            className="user-dropdown"
                            width="48"
                            trigger={
                                <button
                                    className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
                                    style={{
                                        position: 'absolute',
                                        top: '13px',
                                        right: '2px',
                                        zIndex: 99999,
                                        color: 'grey',
                                        
                                    }}>
                                    <div>
                                    {user?.name}
                                    <div className="avtimage">
            {profile && profile.map((profileItem, index) => (
                <div key={index} className="avtimage">
                    {profileItem.image && (
                        <a href="#" key={profileItem.id}>
                            <img
                                src={`http://127.0.0.1:8000/uploads/avt/${profileItem.image}`}
                                alt="Image"
                                width="70px"
                                height="70px"
                                className="avtimage"
                            />
                        </a>
                    )}
                </div>
            ))}
        </div>
                                    </div>

                                    <div className="ml-1">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            }
                            portal={true} // Sử dụng portal để render Dropdown ngoài cấu trúc DOM hiện tại
                        >
                            {/* Authentication */}
                            
                            <DropdownButton className="taikhoan" onClick={onClick}
                            style={{ marginLeft: '15%', fontSize: 'large', fontWeight: 'bold' }}
                            >
                                Tài khoản
                            </DropdownButton>
                            <DropdownButton onClick={logout} className="dangxuat"
                            style={{ marginLeft: '16%', fontSize: 'large', fontWeight: 'bold' }}
                            >
                                Đăng xuất
                            </DropdownButton>
                        
                        </Dropdown>
                        </div>

                    </div>

                    {/* Hamburger */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setOpen(open => !open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                {open ? (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Navigation Menu */}
            {open && (
                <div className="block sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href="/dashboard"
                            active={router.pathname === '/dashboard'}>
                            Dashbonlard
                        </ResponsiveNavLink>
                    </div>

                    {/* Responsive Settings Options */}
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <svg
                                    className="h-10 w-10 fill-current text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>

                            <div className="ml-3">
                                <div className="font-medium text-base text-gray-800">
                                    {user?.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user?.email}
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            {/* Authentication */}
                            <ResponsiveNavButton onClick={logout}>
                                Logout
                            </ResponsiveNavButton>

                            <ResponsiveNavButton onClick={profile}>
                                Profile
                            </ResponsiveNavButton>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
