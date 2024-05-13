import useSWR from 'swr';
import axios from '@/lib/axios';
import { useBooking } from './booking'; // Import hook để kiểm tra xem người dùng đã đặt phòng chưa

export const useRating = () => {
    const { data: rating, error, mutate } = useSWR('/rating', () =>
        axios.get('/rating').then(res => res.data),
    );

    const { booking } = useBooking(); // Sử dụng hook để kiểm tra xem người dùng đã đặt phòng hay chưa

    const addRating = async (id_product, id_user, star, cmt) => {
        // Kiểm tra người dùng đã đặt phòng cho sản phẩm này chưa
        // const isBooked = booking.some(
        //     item => item.id_product === id_product && item.id_user === id_user
        // );
    
        // if (!isBooked) {
        //     throw new Error('Bạn phải đặt phòng trước khi bình luận.');
        // }
    
        // Kiểm tra người dùng đã đánh giá sản phẩm này trước đó chưa
        const hasRated = rating.some(
            item => item.id_product === id_product && item.id_user === id_user
        );
    
        if (hasRated) {
            throw new Error('Bạn đã đánh giá trước đó.');
        }
    
        try {
            await axios.post('/add-rating', { id_product, id_user, star, cmt });
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
    };
};
