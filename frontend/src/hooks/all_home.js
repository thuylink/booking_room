import useSWR from 'swr';
import axios from '@/lib/axios';

export const useProduct = () => {
  const { data: product, error, mutate } = useSWR('/product', () =>
    axios
      .get('/product')
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );

  const csrf = () => axios.get('/sanctum/csrf-cookie');


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
    error,
    mutate,
    getProductById,
  };
};