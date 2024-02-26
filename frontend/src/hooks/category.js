import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useCategory = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()

    /**
     * sử dụng hook useSWR để thực hiện yc GET đến /api/user để
     * lấy thông tin người dùng từ backend
     * - user: biến chứa dữ liệu ng dùng, được lấy từ phản hồi của yc GET/api/user
     * - error: biến chứa thôn tin về lỗi nếu có
     * - mutate: hàm để làm mới dữ liệu ng dùng khi cần
     */
    const { data: category, error, mutate } = useSWR('/category', () =>
        axios
            .get('/category')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
 
                // router.push('/verify-email')
            }),
    )

    /**
     * hàm csrf gửi yêu cầu get/scanctum/csrf-cookie để nhận XSRF token từ server 
     */

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    

    /* 
    hàm register xử lý quá trình đky ng dùng
    gửi yc POST/register với thông tin người dùng và sau đó cập nhât dữ liệu người dùng
    nhận đối tượng có các thuộc tính, trong đó setErrors là hàm 
    để thiết lập lỗi và ...props là cách để truyền các thuộc tính vào hàm
    */ 

    const createCategory = async ({ setErrors, setStatus, ...props }) => {
        await csrf() //hàm đảm bảo mã được gửi kèm yêu câu POST

        // setLoading(true);
        setErrors([])
        setStatus(null)


        console.log(props);

        axios
        
            .post('/add-category', props) 
            .then(() => mutate()) //sau khi POST thành công, gọi hàm mutate() để cập nhật dữ liệu khi đăng kí thàng công
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })



      


    }

    
    return {
        category,
        createCategory,
        error, mutate,
       
    }
}


/**
 * - tệp này chứa các hàm và custom hooks 
 * liên quan đến xác thực và quản lý người dùng
 * - sử dụng hook useSWR từ thư viện swr 
 * để thực hiện yêu cầu lấy dữ liệu từ server 
 * - sử dụng hook useRouter và useParams từ thư viện
 * Nextjs để lấy thông tin về router và các tham số trong URL
 * - useAuth trả về đối tượng chứa các hàm và thông tin
 * liên quan đến xác thực và người dùng
 */