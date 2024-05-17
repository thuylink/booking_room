import useSWR from 'swr';
import axios from '@/lib/axios';

export const useMessage = () => {
    const { data: message, error, mutate } = useSWR('/messages', () =>
        axios
            .get('/messages')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error;
            })
    );

    const sendMessage = async (sender_id, receiver_id, content) => {
        try {
            await axios.post('/store-message', { sender_id, receiver_id, content });
            console.log('Tin nhắn đã được gửi thành công');
        } catch (error) {
            console.error('Đã xảy ra lỗi khi gửi tin nhắn:', error.response.data.message);
        }
    };
    
    
    const getMessagesByReceiver = async receiver_id => {
        try {
            const response = await axios.get(`/messages/receiver/${receiver_id}`);
            console.log('Danh sách tin nhắn:', response.data);
            return response.data;
        } catch (error) {
            console.error('Đã xảy ra lỗi khi lấy tin nhắn:', error.response.data.message);
        }
    };

    return {
        message,
        sendMessage,
        error,
        mutate,
        getMessagesByReceiver
    };
};
