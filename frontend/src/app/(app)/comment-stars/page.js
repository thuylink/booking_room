'use client'

import React, { useEffect, useState } from 'react'
import { useProduct } from '../../../../hooks/product'
import { useCart } from '../../../../hooks/cart'
import { useCategory } from '@/hooks/category'
import './cmt-stars.scss'
import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRating } from '@/hooks/rating'
import { useAuth } from '@/hooks/auth'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { useBooking } from '../../../../hooks/booking'

export const ProductDetailWithPannellum = () => {
    const { user } = useAuth({ middleware: 'guest' })
    console.log('userrrr', user)
    const id = window.location.pathname.split('/').pop()
    const { getProductById, error } = useProduct()
    const { users } = useAuth()
    
    console.log('all users', users)
    const { product } = useProduct()
    const [product2, setProduct2] = useState(null)
    const { category } = useCategory()

    const [ratings, setRatings] = useState(0)
    const [comment, setComment] = useState('')
    const { addRating } = useRating()
    const { rating } = useRating()

    const starCounts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    }
    let comments = []
    if (rating && rating.length > 0) {
        rating.forEach(item => {
            if (item.id_product === parseInt(id)) {
                comments.push(item)
            }
        })
    }
    comments.forEach(comment => {
        starCounts[comment.star]++
    })

    comments.map(rating => {
        console.log('Id của rating:', rating.id) // Log id của mỗi rating
        return (
            <div key={rating.id} className="rating-item">
                {/* Nội dung bình luận */}
            </div>
        )
    })

    const totalReviews =
        starCounts[1] +
        starCounts[2] +
        starCounts[3] +
        starCounts[4] +
        starCounts[5]
    const totalStars =
        starCounts[1] * 1 +
        starCounts[2] * 2 +
        starCounts[3] * 3 +
        starCounts[4] * 4 +
        starCounts[5] * 5
    const averageRating = totalStars / totalReviews

    const totalComments = totalReviews //tổng số lượt bình luận

    const percentage5Stars = [starCounts[5] / totalComments] * 100
    const percentage4Stars = [starCounts[4] / totalComments] * 100
    const percentage3Stars = [starCounts[3] / totalComments] * 100
    const percentage2Stars = [starCounts[2] / totalComments] * 100
    const percentage1Star = [starCounts[1] / totalComments] * 100

    const BarContainer = styled.div`
        .bar-5 {
            width: ${props => props.percentage5Stars}%;
        }

        .bar-4 {
            width: ${props => props.percentage4Stars}%;
        }

        .bar-3 {
            width: ${props => props.percentage3Stars}%;
        }

        .bar-2 {
            width: ${props => props.percentage2Stars}%;
        }

        .bar-1 {
            width: ${props => props.percentage1Star}%;
        }
    `

    const handleRatingsChange = event => {
        setRatings(parseInt(event.target.value))
    }

    const handleCommentChange = event => {
        setComment(event.target.value)
    }
    const handleSubmit = async () => {
        try {
            await addRating(id, user.id, ratings, comment)
            console.log('Đánh giá thành công')
        } catch (error) {
            console.error('Lỗi khi gửi đánh giá:', error)
        }
    }
   
    if (error) {
        return <div>Error: {error}</div>
    }

    if (!product2) {
        return <div>Loading...</div>
    }

    console.log('arr category', category)
    console.log('arr user', user)

    

    return (
        <div className="container">
            <div className="container flex items-center justify-center">
                <Card className="py-4 lg:w-3/4 xl:w-1/2">
                    <CardBody className="overflow-visible py-2">
                        <div id="rate-section">
                            <div className="container">
                                <div className="scrollable-container">
                                    <div className="cmt">
                                        <div class="container mt-5">
                                            <h1 className="tieude">
                                                Phản hồi từ khách hàng
                                            </h1>
                                            <div class="row  d-flex justify-content-center">
                                                <div class="col-md-8">
                                                    <div class="card p-3">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div class="user d-flex flex-row align-items-center">
                                                                <div className="grid grid-cols-1 gap-1">
                                                                    {' '}
                                                                    {comments?.map(
                                                                        rating => (
                                                                            <div
                                                                                key={
                                                                                    rating.id
                                                                                }
                                                                                className="rating-item">
                                                                                <div className="container">
                                                                                    <div className="row justify-content-center">
                                                                                        <div className="col-md-8">
                                                                                            <div className="card p-3 mb-4">
                                                                                                <div className="d-flex justify-content-between align-items-center">
                                                                                                    <div className="user d-flex flex-row align-items-center">
                                                                                                        <span>
                                                                                                            <small class="font-weight-bold text-primary">
                                                                                                                {
                                                                                                                    rating.name
                                                                                                                }
                                                                                                            </small>
                                                                                                            <small className="d-flex align-items-center">
                                                                                                                <div>
                                                                                                                    {Array.from(
                                                                                                                        {
                                                                                                                            length:
                                                                                                                                rating.star,
                                                                                                                        },
                                                                                                                        (
                                                                                                                            _,
                                                                                                                            i,
                                                                                                                        ) => (
                                                                                                                            <FontAwesomeIcon
                                                                                                                                icon={
                                                                                                                                    faStar
                                                                                                                                }
                                                                                                                                key={
                                                                                                                                    i
                                                                                                                                }
                                                                                                                                className="text-pink-500"
                                                                                                                            />
                                                                                                                        ),
                                                                                                                    )}
                                                                                                                </div>
                                                                                                            </small>
                                                                                                            <small className="font-weight-bold">
                                                                                                                {
                                                                                                                    rating.cmt
                                                                                                                }
                                                                                                            </small>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ),
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="action d-flex justify-content-between mt-2 align-items-center">
                                                            <div class="icons align-items-center">
                                                                <i class="fa fa-star text-warning"></i>
                                                                <i class="fa fa-check-circle-o check-icon"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="comment-section">
                            <div class="container bootdey flex-grow-1 container-p-y">
                                <div class="bg-white p-4 ">
                                    <div class="infor">
                                        <div class="media align-items-center py-3 mb-3">
                                            <div className="container">
                                                <div className="inputcmt">
                                                    <div className="row">
                                                        <div className="col-10">
                                                            <div className="comment-box">
                                                                <div className="rating">
                                                                    {[
                                                                        ...Array(
                                                                            5,
                                                                        ),
                                                                    ].map(
                                                                        (
                                                                            _,
                                                                            index,
                                                                        ) => (
                                                                            <React.Fragment
                                                                                key={
                                                                                    index
                                                                                }>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating"
                                                                                    value={
                                                                                        5 -
                                                                                        index
                                                                                    }
                                                                                    id={
                                                                                        5 -
                                                                                        index
                                                                                    }
                                                                                    onChange={
                                                                                        handleRatingsChange
                                                                                    }
                                                                                />
                                                                                <label
                                                                                    htmlFor={
                                                                                        5 -
                                                                                        index
                                                                                    }>
                                                                                    ☆
                                                                                </label>
                                                                            </React.Fragment>
                                                                        ),
                                                                    )}
                                                                </div>
                                                                <div className="comment-area">
                                                                    <textarea
                                                                        className="my-view"
                                                                        placeholder="Viết phản hồi sau khi trải nghiệm nơi ở của bạn ... "
                                                                        rows="4"
                                                                        value={
                                                                            comment
                                                                        }
                                                                        onChange={
                                                                            handleCommentChange
                                                                        }></textarea>
                                                                </div>
                                                                <div className="comment-btns mt-2">
                                                                    <div className="mt-6 flex gap-6">
                                                                        <Button
                                                                            className="custom-button"
                                                                            onClick={
                                                                                handleSubmit
                                                                            }>
                                                                            <span className="button-text">
                                                                                Đánh
                                                                                giá
                                                                            </span>
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="heading-section" className="class1">
                            <div className="number-star">
                                <span className="class1">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="text-pink-500"
                                    />
                                    {averageRating.toFixed(1)}
                                </span>
                                <br />
                                <span className="class1">
                                    <FontAwesomeIcon
                                        icon={faComment}
                                        className="text-pink-500"
                                    />
                                    {totalReviews}{' '}
                                </span>
                            </div>
                        </div>

                        <div id="stars-section" className="class2">
                            <div className="container bootdey flex-grow-1 container-p-y">
                                <div className="bg-white p-4 ">
                                    <div className="stars">
                                        <div className="media align-items-center py-3 mb-3">
                                            <div className="container">
                                                <div className="stars2">
                                                    <div className="line-star">
                                                        <div className="col-10">
                                                            <div className="all-stars">
                                                                <div className="rightside">
                                                                    <div className="col-md-7">
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    5
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage5Stars={
                                                                                        percentage5Stars
                                                                                    }>
                                                                                    <div className="bar-5"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[5]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    4
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage4Stars={
                                                                                        percentage4Stars
                                                                                    }>
                                                                                    <div className="bar-4"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[4]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    3
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage3Stars={
                                                                                        percentage3Stars
                                                                                    }>
                                                                                    <div className="bar-3"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[3]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    2
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage2Stars={
                                                                                        percentage2Stars
                                                                                    }>
                                                                                    <div className="bar-2"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[2]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row-stars">
                                                                            <div class="side">
                                                                                <div>
                                                                                    1
                                                                                    star
                                                                                </div>
                                                                            </div>
                                                                            <div class="middle">
                                                                                <BarContainer
                                                                                    percentage1Star={
                                                                                        percentage1Star
                                                                                    }>
                                                                                    <div className="bar-1"></div>
                                                                                </BarContainer>
                                                                            </div>
                                                                            <div class="side right">
                                                                                <div>
                                                                                    {
                                                                                        starCounts[1]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ProductDetailWithPannellum

