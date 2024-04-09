'use client'
import React, { useState } from 'react'
import { useRating } from '../../../hooks/rating'
import '../../(app)/show-product/show_product_css.scss'
import { Button } from '@nextui-org/button'

const RatingForm = () => {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const { addRating } = useRating()

    const handleRatingChange = event => {
        setRating(parseInt(event.target.value))
    }

    const handleCommentChange = event => {
        setComment(event.target.value)
    }

    const handleSubmit = async () => {
        try {
            await addRating(rating, comment)
            // Sau khi gửi đánh giá thành công, có thể thực hiện các hành động khác ở đây, ví dụ: hiển thị thông báo thành công, cập nhật lại danh sách đánh giá, vv.
            console.log('Đánh giá thành công');
        } catch (error) {
            console.error('Lỗi khi gửi đánh giá:', error)
            // Xử lý khi gặp lỗi khi gửi đánh giá
        }
    }

    return (
        <div className="inputcmt">
            <div className="row">
                <div className="col-10">
                    <div className="comment-box ml-2">
                        <h4>Add a comment</h4>
                        <div className="rating">
                            {[...Array(5)].map((_, index) => (
                                <React.Fragment key={index}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={5 - index}
                                        id={5 - index}
                                        onChange={handleRatingChange}
                                    />
                                    <label htmlFor={5 - index}>☆</label>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="comment-area">
                            <textarea
                                className="form-control"
                                placeholder="what is your view?"
                                rows="4"
                                value={comment}
                                onChange={handleCommentChange}
                            ></textarea>
                        </div>
                        <div className="comment-btns mt-2">
                            <div className="mt-6 flex gap-6">
                                <Button
                                    className="custom-button"
                                    onClick={handleSubmit}
                                >
                                    <span className="button-text">
                                        Đánh giá
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingForm
