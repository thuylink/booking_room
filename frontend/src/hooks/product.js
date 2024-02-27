import useSWR from 'swr'
import axios from '@/lib/axios'
import { useParams, useRouter } from 'next/navigation'

export const useProduct = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: product, error, mutate } = useSWR('/product', () =>
        axios
            .get('/product')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createProduct = async ({ setErrors, setStatus, ...props }) => {
        await csrf() 
        setErrors([])
        console.log(props);
        axios
            .post('/add-product', props) 
            .then(() => mutate()) 
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }
    return {
        product,
        createProduct,
        error, mutate,
    }
}