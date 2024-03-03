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

    const createProduct = async ({ formData, setErrors, setStatus }) => {
        await csrf()
        setErrors([])
        axios
            .post('/add-product', formData)
            .then(() => mutate())
            .catch(error => {
                if (error.response && error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

  

    const getAllProducts = async () => {
        try {
            const response = await axios.get('/product')
            return response.data
        } catch (error) {
            console.error('Error fetching products:', error)
            throw error
        }
    }

    return {
        product,
        createProduct,
        getAllProducts,
        error,
        mutate,
    }
}
