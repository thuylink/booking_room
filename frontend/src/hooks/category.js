import useSWR from 'swr'
import axios from '@/lib/axios'
import { useParams, useRouter } from 'next/navigation'

export const useCategory = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: category, error, mutate } = useSWR('/category', () =>
        axios
            .get('/category')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createCategory = async ({ formData, setErrors, setStatus }) => {
        await csrf();
        setErrors([]);
    
        axios
            .post('/add-category', formData)
            .then(() => mutate())
            .catch((error) => {
                if (error.response && error.response.status !== 422) throw error;
    
                setErrors(error.response.data.errors);
            });
    };
    // const createCategory = async ({ formData, setErrors, setStatus }) => {
    //     await csrf();
    //     setErrors([]);
    
    //     axios
    //         .post('/add-category', formData)
    //         .then(() => mutate())
    //         .catch((error) => {
    //             if (error.response && error.response.status !== 422) throw error;
    
    //             setErrors(error.response.data.errors);
    //         });
    // };

    

    return {
        category,
        createCategory,
        // listCategory,
        error,
        mutate,
    }
}
