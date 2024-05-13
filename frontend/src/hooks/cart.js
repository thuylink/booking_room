// import useSWR from 'swr'
// import axios from '@/lib/axios'

// export const useCart = () => {
//     const { data: cart, error, mutate } = useSWR('/gio-hang', () =>
//         axios.get('/gio-hang').then(res => {
//           res.data; console.log (res.data)
//           }),
//     )

//     const addToCart = async (id_product) => {
//       try {
//         console.log('await');
//         axios.post('/gio-hang/them', { id_product: id_product }, {
//           headers: {
//             'Access-Control-Allow-Origin': 'http://localhost:3000',
//             'Access-Control-Allow-Credentials': 'true',
//           },
//         });
//         mutate();
//         console.log('hiii');
//       } catch (error) {
//         console.log('v,kvk');
//         throw new Error(error.message);
//       }
//     };

//     return {
//         cart,
//         addToCart,
//         error,
//         mutate,
//     }
// }


import useSWR from 'swr';
import axios from '@/lib/axios';

export const deleteCartById = async id => {
    try {
        await axios.delete(`/delete-cart/${id}`)
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const useCart = () => {
    const { data: cart, error, mutate } = useSWR(`/gio-hang`, () =>
        axios.get(`/gio-hang`).then(res => res.data),
    );

    const addToCart = async (id_product, id_user) => {
        //kiểm tra người dùng đã tim chưa
      const existingCart = cart.find(
        item => item.id_product === id_product &&
        item.id_user === id_user);

      if (existingCart) {
        throw new Error('Đã tim trước đó.');
      }  
        try {
            axios.post('/add-cart', { id_product , id_user});
            mutate();
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return {
        cart,
        addToCart,
        deleteCartById,
        error,
        mutate,
    }
}
