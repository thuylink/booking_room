import useSWR from 'swr'
import axios from '@/lib/axios'

export const deleteProductById = async id => {
    try {
        await axios.delete(`/delete-product/${id}`)
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const searchByLocation = async location => {
    try {
        const response = await axios.get(
            `/search?product=${location}`,
        )
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const incrementViewCount = async id => {
    try {
        await axios.get(`/products/${id}/view`)
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const updateProductById = async ({ setErrors, setStatus, id, formData }) => {
    try {
        const response = await axios.post(`/update-product/${id}`, formData)
        console.log(response)
        setStatus(response.data.status);
    } catch (error) {
        // if (error.response.status !== 422) throw error;
        // setErrors(error.response.data.errors);
    }
}

export const getRelatedProducts = async (productId) => {
    try {
        const response = await axios.get(`/products/${productId}/related`);
        return response.data;
    } catch (error){
        console.error('Lỗi hiển thị product liên quan', error);
        return [];
    }
}
export const useProduct = () => {
    const { data: product, error, mutate } = useSWR('/product', () =>
        axios
            .get('/product')
            // .then(res => res.data)
            .then(res => {
                // Thêm trường createdAt cho mỗi sản phẩm
                const productsWithCreatedAt = res.data.map(product => ({
                    ...product,
                    createdAt: new Date(product.createdAt),
                }));
                return productsWithCreatedAt;
            })
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
        deleteProductById,
        searchByLocation,
        incrementViewCount,
    }
}
