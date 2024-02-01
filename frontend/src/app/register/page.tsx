'use client'

import { useRouter } from 'next/navigation';
import {Form, Button } from 'react-bootstrap';
import styles from '../../styles/register.module.css';
import { useState } from 'react';
import { useAuth } from '@/hooks/auth';
import Link from 'next/link';



const Register = () => {
    const router = useRouter();

    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            <h1 className={styles.register}>REGISTER</h1>
            <Form className={styles.form} onSubmit={handleBtn}>
                <Form.Group className={styles.formGroup} controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>

                <Form.Group className={styles.formGroup} controlId="formUsername">
                    <Form.Label className={styles.usernameLabel}>Username</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                
                <Form.Group className={styles.formGroup} controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>

                <Form.Group className={styles.formGroup} controlId="formPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
            </Form>
            <div>
                <Button className={styles.save} variant='success'>SAVE </Button>
                <Button className={styles.back} variant='danger' onClick={() => handleBtn()}>Back Home</Button> 
            </div>
        </div>
    )
}

export default Register;