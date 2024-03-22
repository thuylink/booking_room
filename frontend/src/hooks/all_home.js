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

  return {
    product,
    error,
    mutate,
  };
};