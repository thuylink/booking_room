import useSWR from 'swr'
import axios from '@/lib/axios'

export const useRating = () => {
    const { data: rating, error, mutate } = useSWR('/rating', () =>
        axios.get('/rating').then(res => res.data),
    )

    const addRating = async (id_product, id_user, star, cmt) => {
      //kiểm tra người dùng đã cmt chưa
      const existingRating = rating.find(
        item => item.id_product === id_product &&
        item.id_user === id_user);

      if (existingRating) {
        throw new Error('Đã đánh giá trước đó.');
      }  

      try {
        axios.post('/add-rating', { id_product, id_user, star,cmt });
        mutate();
      } catch (error) {
        throw new Error(error.message);
      }
    };

    return {
        rating,
        addRating,
        error,
        mutate,
    }
}
