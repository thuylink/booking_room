import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axios


/**
 * - đây là tệp cấu hình cho thư viện axios để thực hiện 
 * các yêu cầu HTTP từ phía client đến server 
 * - 
 */