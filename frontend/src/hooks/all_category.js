import useSWR from 'swr';
import axios from '@/lib/axios';

export const useCategory = () => {
  const { data: category, error, mutate } = useSWR('/category', () =>
    axios
      .get('/category')
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );

  const csrf = () => axios.get('/sanctum/csrf-cookie');

  return {
    category,
    error,
    mutate,
  };
};