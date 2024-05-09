import useSWR from 'swr'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation';

export const useBooking = () => {
    const router = useRouter();

    const { data: booking, error, mutate } = useSWR('/booking', () =>
        axios.get('/booking').then(res => res.data),
    )
    const csrf = async () => {
        await axios.get('/sanctum/csrf-cookie');
    };

    const addBooking = async ({ formData }) => {
        await csrf();
    
        try {
            const response = await axios.post('/store-booking', formData);
            mutate();
            console.log(response);
        } catch (error) {
            console.error('Error adding booking:', error);
            throw error;
        }
    };
    

    return {
        booking,
        addBooking,
        error,
        mutate,
    }
}
