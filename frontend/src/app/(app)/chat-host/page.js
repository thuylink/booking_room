'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@nextui-org/button'
import './chat-host.css'
import { useAuth } from '@/hooks/auth'
import { useChatting } from '@/hooks/chatting'

const ChatHost = () => {
    const { sendChatting, chatting, mutate } = useChatting()
    const [content, setContent] = useState('')
    const { user } = useAuth()
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [receiverId, setReceiverId] = useState(null)

    const handleContentChange = event => {
        setContent(event.target.value)
    }

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
            const receivedMessages = chatting.filter(chat => chat.receiver_id === user.id)
            if (receivedMessages.length > 0) {
                const lastReceivedMessage = receivedMessages[receivedMessages.length - 1]
                setReceiverId(lastReceivedMessage.sender_id)
            }
        }
    }

    const handleCloseChat = () => {
        setIsChatOpen(false)
    }

    // Lọc các tin nhắn dựa trên receiverId
    const filteredChatting = chatting ? chatting.filter(chat => chat.receiver_id === receiverId || chat.sender_id === receiverId) : []

    console.log('allmess', chatting)
    console.log('receiver ', receiverId)

    return (
        <div>
            <div className="py-2 px-4 border-bottom d-none d-lg-block">
                <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                        <h1>bong bongs chat</h1>
                        <img
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            className="rounded-circle mr-1"
                            alt="AVT"
                            width="40"
                            height="40"
                            onClick={toggleChatPopup} // Bật/tắt popup khi nhấp vào ảnh
                        />
                    </div>
                </div>
            </div>

            {isChatOpen && (
                <div className="page-content page-containerchat" id="page-content">
                    <div className="padding">
                        <div className="row containerchat d-flex justify-content-center">
                            <div className="col-md-6">
                                <div className="cardchat cardchat-bordered">
                                    <div className="cardchat-header">
                                        <a className="btn btn-xs btn-secondary" href="#" data-abc="true"></a>
                                    </div>

                                    <div className="ps-containerchat ps-theme-default ps-active-y" id="chat-content" style={{ overflowY: 'scroll', marginTop: '-1750px', height: '-221%' }}>
                                        <div className="media media-chat">
                                            {filteredChatting.map((chat, index) => (
                                                <div key={index} className="d-flex flex-row p-3">
                                                    <div className="chat ml-2 p-3">
                                                        {chat.content}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="ps-scrollbar-x-rail" style={{ left: '0px', bottom: '0px' }}>
                                            <div className="ps-scrollbar-x" tabIndex="0" style={{ left: '0px', width: '0px' }}
                                            ></div>
                                        </div>
                                        <div className="ps-scrollbar-y-rail" style={{ top: '0px', height: '0px', right: '2px' }}>
                                            <div className="ps-scrollbar-y" tabIndex="0" style={{ top: '0px', height: '2px' }}></div>
                                        </div>
                                    </div>

                                    <div className="publisher bt-1 border-light">
                                        <textarea className="publisher-input" placeholder="Nhắn ở đây" value={content} onChange={handleContentChange}></textarea>
                                        <div className="comment-btns mt-2">
                                            <div className="mt-6 flex gap-6">
                                                <Button className="custom-button" onClick={handleSubmitChat}>
                                                    <span className="button-text">Gửi</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="close-btn" onClick={handleCloseChat}>
                                        Đóng
                                    </Button>
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
