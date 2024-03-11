import useSWR from 'swr'
import axios from '@/lib/axios'

export const deleteCategoryById = async id => {
    try {
        await axios.delete(`/delete-category/${id}`)
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const searchByName = async name_category => {
    try {
        const response = await axios.get(
            `/search?name_category=${name_category}`,
        )
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const updateCategoryById = async ({ id, formData }) => {
    try {
        await axios.put(`/update-category/${id}`, formData)
        return true
    } catch (error) {
        if (error.response && error.response.status !== 422) {
            throw error
        }
        return false
    }
}

export const useCategory = () => {
    const { data: category, error, mutate } = useSWR('/category', () =>
        axios
            .get('/category')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createCategory = async ({ formData, setErrors }) => {
        console.log('formData create', formData)

        await csrf()
        setErrors([])

        try {
            await axios.post('/add-category', formData)
            mutate()
        } catch (error) {
            if (error.response && error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        }
    }

    const getCategoryById = async id => {
        try {
            const response = await axios.get(`/show-category/${id}`)
            return response.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }

    return {
        category,
        createCategory,
        error,
        mutate,
        getCategoryById,
        updateCategoryById,
        deleteCategoryById,
        searchByName,
    }
}
