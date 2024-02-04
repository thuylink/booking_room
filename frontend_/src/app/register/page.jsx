'use client'

import { useRouter } from 'next/navigation';
import { Form, Button } from 'react-bootstrap';
import styles from '../../styles/register.module.css';
import { useState } from 'react';
import { useAuth } from '@/hooks/auth';
import Link from 'next/link';
import { fail } from 'assert';
import axios from '@/lib/axios';
// import axios from 'axios';




const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([])

    const router = useRouter();
    const isComparePassword = password === passwordConfirmation ? true : false;

    const handleBtn = async () => {
        console.log('data: ', email, password, name);

        router.push("/")
        try {
            const response = await axios.post('/register', {
                email,
                password,
                name,
            });
            console.log('Registered: ', response.data);
        } catch (error) {
            console.error('Failed: ');
        }

        
    };
    return (
        <div>
            <h1 className={styles.register}>REGISTER</h1>
            <Form className={styles.form} onSubmit={handleBtn}>
                <Form.Group className={styles.formGroup} controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className={styles.formGroup} controlId="formUsername">
                    <Form.Label className={styles.usernameLabel}>Username</Form.Label>
                    <Form.Control type="text" value={name}
                        onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className={styles.formGroup} controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className={styles.formGroup} controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="confirmpassword" value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)} />
                </Form.Group>
                {isComparePassword ? <a>password is similar</a> : <a>confirm again </a>}
            </Form>
            <div>
                <Button className={styles.save} variant='success' type="button" onClick={handleBtn}>SAVE </Button>
                <Button className={styles.back} variant='danger' onClick={() => handleBtn()}>Back Home</Button>
            </div>
        </div>
    )
}

export default Register;