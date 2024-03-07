import useSWR from 'swr'
import axios from '@/lib/axios'

export const useCategory = ({ middleware, redirectIfAuthenticated } = {}) => {
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
        await csrf()
        setErrors([])

        axios
            .post('/add-category', formData)
            .then(() => mutate())
            .catch(error => {
                if (error.response && error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }
    const getCategoryById = async id => {
        try {
            const response = await axios.get(`/show-category/${id}`)
            return response.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }

    
    const updateCategoryById = async (id, formData) => {
    await csrf();
    setErrors([]); // Gọi setErrors khi cần thiết

    try {
      const response = await axios.post(`/update-category/${id}`, formData);
      mutate();
    } catch (error) {
      if (error.response && error.response.status !== 422) {
        throw error;
      }
      setErrors(error.response.data.errors);
    }
  };

    const deleteCategoryById = async id => {
        try {
            const response = await axios.post(`/delete-category/${id}`)
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
        deleteCategoryById
    }
}
