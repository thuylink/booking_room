import useSWR from 'swr'
import axios from '@/lib/axios'

export const useProductCategory = () => {
    const { data: product, error, mutate } = useSWR('/product', () =>
        axios
            .get('/product')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error;
            }),
    );

    const productByCategory = async (name_category) => {
        try {
            const response = await axios.get(`/products/category/${name_category}`); 
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    };

    return {
        product,
        error,
        mutate,
        productByCategory,
    };
};
