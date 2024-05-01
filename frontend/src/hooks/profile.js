import useSWR from 'swr';
import axios from '@/lib/axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useProfile = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter();

    const { data: profile, error, mutate } = useSWR('/profiles', () =>
        axios
            .get('/profiles')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error;
            }),
    );

    const csrf = async () => {
        await axios.get('/sanctum/csrf-cookie');
    };

    const createProfiles = async ({ formData, setErrors, setStatus }) => {
        await csrf();

        setErrors([]);
        setStatus(null);

        try {
            const response = await axios.post('/add-profile', formData );
            mutate();
            console.log(response);
            setStatus(response.data.status);
        } catch (error) {
            if (error.response.status !== 422) throw error;

            setErrors(error.response.data.errors);
        }
    };

    return {
        profile,
        error,
        mutate,
        createProfiles,
    };
};
