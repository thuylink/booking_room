import useSWR from 'swr'
import axios from '@/lib/axios'

export const updateUserById = async ({ id, formData }) => {
    try {
        await axios.put(`/update-user/${id}`, formData)
        return true
    } catch (error) {
        if (error.response && error.response.status !== 422) {
            throw error
        }
        return false
    }
}

export const useUser = () => {
    const { data: product, error, mutate } = useSWR('/product', () =>
        axios
            .get('/product')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createProduct = async ({ formData, setErrors }) => {
        console.log('formData create', formData)

        await csrf()
        setErrors([])

        try {
            await axios.post('/add-product', formData)
            mutate()
        } catch (error) {
            if (error.response && error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        }
    }

    const getProductById = async id => {
        try {
            const response = await axios.get(`/show-product/${id}`)
            return response.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }

    return {
        product,
        createProduct,
        error,
        mutate,
        getProductById,
        updateProductById,
    }
}
