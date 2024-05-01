'use client'
import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useProfile } from '../../../hooks/profile'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Image from 'next/image'

import '../update-profile/profile.css'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = () => {
    const router = useRouter()
    const { profile, error, createProfiles } = useProfile({
        middleware: 'auth',
        redirectIfAuthenticated: '/profiles',
    })

    const id = window.location.pathname.split('/').pop()
    console.log('id user ', id)

    

    return (
        <h1>info đây</h1>
    )
}

export default Profile
