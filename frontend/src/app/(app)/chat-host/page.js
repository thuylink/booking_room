'use client'
import React, { useState, useEffect } from 'react'
import './chat-host.css'
import { useAuth } from '@/hooks/auth'
import { useChatting } from '@/hooks/chatting'
import { useAllProfile } from '@/hooks/all_profile'

const ChatHost = () => {
    const { sendChatting, chatting, mutate } = useChatting()
    const [content, setContent] = useState('')
    const { user } = useAuth()
    const { profile: allProfile } = useAllProfile()
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [receiverId, setReceiverId] = useState(null)
    const [bubbleName, setBubbleName] = useState(null)
    const [receiverProfile, setReceiverProfile] = useState(null)

    const handleContentChange = event => {
        setContent(event.target.value)
    }
    console.log('all profile trong chat', allProfile)

    const handleSubmitChat = async () => {
        try {
            if (!receiverId) {
                console.error('Không có receiverId để gửi tin nhắn')
                return
            }

            await sendChatting(user.id, receiverId, content)
            console.log('Gửi tin nhắn thành công')
            mutate() // Tự động cập nhật tin nhắn mới nhất sau khi gửi
            setContent('')
        } catch (error) {
            console.error('Lỗi khi gửi tin nhắn:', error)
        }
    }

    const toggleChatPopup = () => {
        setIsChatOpen(!isChatOpen)

        // Lấy tất cả các sender_id của tin nhắn gửi tới tài khoản đang đăng nhập
        if (chatting && chatting.length > 0) {
            const receivedMessages = chatting.filter(
                chat => chat.receiver_id === user.id,
            )
            if (receivedMessages.length > 0) {
                const lastReceivedMessage =
                    receivedMessages[receivedMessages.length - 1]
                setReceiverId(lastReceivedMessage.sender_id)
            }
        }
    }

    const handleCloseChat = () => {
        setIsChatOpen(false)
    }

    // Lọc các tin nhắn dựa trên receiverId
    const filteredChatting = chatting
        ? chatting.filter(
              chat =>
                  chat.receiver_id === receiverId ||
                  chat.sender_id === receiverId,
          )
        : []

    console.log('allmess', chatting)
    console.log('receiver ', receiverId)

    // Kiểm tra allProfile có dữ liệu và không rỗng
    useEffect(() => {
        if (allProfile && allProfile.length > 0 && receiverId) {
            const receiverProfile = allProfile[0].find(
                item => item.id_user === receiverId,
            )
            if (receiverProfile) {
                setReceiverProfile(receiverProfile)
            } else {
                setReceiverProfile(null)
            }
        }
    }, [receiverId, allProfile])

    return (
        <div>
            <div className="py-2 px-4 border-bottom d-none d-lg-block">
                <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                        <h1>{receiverProfile ? receiverProfile.name : ''}</h1>
                        <img
                            src={receiverProfile ? receiverProfile.avatar : 'https://bootdey.com/img/Content/avatar/avatar3.png'}
                            className="avtnekk"
                            alt="AVT"
                            width="40"
                            height="40"
                            onClick={toggleChatPopup} // Bật/tắt popup khi nhấp vào ảnh
                        />
                    </div>
                </div>
            </div>

            {isChatOpen && (
                <div
                    className="page-content page-containerchat"
                    id="page-content">
                    <div class="containernhantin d-flex justify-content-center">
                        <div class="cardnhantin mt-5">
                            <div class="d-flex flex-row justify-content-between p-3 adivhost text-white">
                                <i class="fas fa-chevron-left"></i>
                                <span class="pb-3">Nhắn cho chủ nhà</span>
                                <i class="fas fa-times"></i>
                            </div>
                            <div
                                className="chat-container"
                                style={{
                                    maxHeight: '300px',
                                    overflowY: 'auto',
                                }}>
                                {chatting.map((chat, index) => (
                                    <div
                                        key={index}
                                        className="d-flex flex-row p-3">
                                        <div className="chat ml-2 p-3">
                                            {chat.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div class="d-flex flex-row p-3">
                                <div class="myvideo ml-2"></div>
                            </div>

                            <div class="form-group px-3">
                                <textarea
                                    className="typeherechathost"
                                    rows="5"
                                    placeholder="Soạn tin nhắn"
                                    value={content}
                                    onChange={handleContentChange}></textarea>
                                <div className="form-group px-3">
                                    <div className="button-container">
                                        <button
                                            className="send-btnchathost"
                                            onClick={handleSubmitChat}>
                                            Gửi
                                        </button>
                                        <button
                                            className="close-btnchathost"
                                            onClick={handleCloseChat}>
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatHost
// <div className="page-content page-containerchat" id="page-content">
//                 {filteredChatting.map((chat, index) => (
//                     <div key={index} className="d-flex flex-row p-3">
//                         <div className="chat ml-2 p-3">
//                             {chat.content}
//                         </div>
//                     </div>
//                 ))}
//                 </div>
