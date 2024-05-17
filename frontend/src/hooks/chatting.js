import useSWR from 'swr';
import axios from '@/lib/axios';

export const useChatting = () => {
    const { data: chatting, error, mutate } = useSWR('/chattings', () =>
        axios
            .get('/chattings')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error;
            })
    );

    const sendChatting = async (sender_id, receiver_id, content) => {
        try {
            // Gửi tin nhắn
            await axios.post('/store-chatting', { sender_id, receiver_id, content });
            console.log('Tin nhắn đã được gửi thành công');
    
            // Cập nhật danh sách tin nhắn
            const newChatting = { sender_id, receiver_id, content };
            mutate([...chatting, newChatting], false); // Cập nhật dữ liệu và tắt loading
    
            // Nếu tin nhắn được gửi thành công, bạn có thể thêm logic hiển thị popup chat tại đây
        } catch (error) {
            console.error('Đã xảy ra lỗi khi gửi tin nhắn:', error.response.data.message);
        }
    };
    
    
    const getChattingsByReceiver = async receiver_id => {
        try {
            const response = await axios.get(`/chattings/receiver/${receiver_id}`);
            console.log('Danh sách tin nhắn:', response.data);
            return response.data;
        } catch (error) {
            console.error('Đã xảy ra lỗi khi lấy tin nhắn:', error.response.data.message);
        }
    };

    return {
        chatting,
        sendChatting,
        error,
        mutate,
        getChattingsByReceiver
    };
};
