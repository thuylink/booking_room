import useSWR from 'swr'
import axios from '@/lib/axios'

export const useRating = () => {
    const { data: rating, error, mutate } = useSWR('/rating', () =>
        axios.get('/rating').then(res => res.data),
    )

    const addRating = async (id_product, id_user, star, cmt) => {
      try {
        axios.post('/add-rating', { id_product, id_user, star,cmt });
        mutate();
      } catch (error) {
        throw new Error(error.message);
      }
    };

    // const addRating = async (id_product, id_user) => {
    //   try {
    //     const userId = parseInt(id_user); //đảm bảo id_user là 1 số nguyên 
    //     axios.post('/add-rating', { id_product: id_product, id_user: userId });
    //     mutate();
    //   } catch (error) {
    //     throw new Error(error.message);
    //   }
    // };

    return {
        rating,
        addRating,
        error,
        mutate,
    }
}
