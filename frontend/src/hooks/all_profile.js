import useSWR from 'swr';
import axios from '@/lib/axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export const useAllProfile = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter();

    const { data: profile, error, mutate } = useSWR('/allProfile', () =>
        axios
            .get('/allProfile')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error;
            }),
    );

    const csrf = async () => {
        await axios.get('/sanctum/csrf-cookie');
    };
   
    return {
        profile,
        error,
        mutate,
        
    };
};
