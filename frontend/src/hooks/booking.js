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
// id_product, id_user, checkin, checkout, price, guestNumber, guestName, phone, email, message
    const addBooking = async ({id_product,formData, setErrors, setStatus }) => {
        await csrf();

        setErrors([]);
        // setStatus(null);

        try {
            const response = await axios.post('/store-booking', formData, id_product );
            mutate();
            console.log(response);
            // setStatus(response.data.status);
        } catch (error) {
            if (error.response.status !== 422) throw error;

            setErrors(error.response.data.errors);
        }
    };

    return {
        booking,
        addBooking,
        error,
        mutate,
    }
}
