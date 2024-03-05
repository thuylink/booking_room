import useSWR from 'swr';
import axios from '@/lib/axios';

export const useProduct = ({ middleware, redirectIfAuthenticated } = {}) => {
  const { data: product, error, mutate } = useSWR('/product', () =>
    axios
      .get('/product')
      .then(res => res.data)
      .catch(error => {
        if (error.response && error.response.status !== 409) throw error;
      }),
  );

  const getProductById = async id => {
    try {
      const response = await axios.get(`/show-product/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
//     const { data: product_ID } = useSWR('/product', (id) =>
//     axios
//       .get(`/show-product/${id}`)
//       .then(res => res.data)
//       .catch(error => {
//         if (error.response && error.response.status !== 409) throw error;
//       }),
//   );
  };

  const csrf = () => axios.get('/sanctum/csrf-cookie');
  const createProduct = async ({ formData, setErrors, setStatus }) => {
    await csrf();
    setErrors([]);
    axios
      .post('/add-product', formData)
      .then(() => mutate())
      .catch(error => {
        if (error.response && error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  return {
    product,
    // product_ID,
    createProduct,
    error,
    mutate,
    getProductById,
  };
};