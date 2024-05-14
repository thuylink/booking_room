'use client'
import Link from 'next/link'
import Button from '@/components/Button'
import './style.css'
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faListDots } from '@fortawesome/free-solid-svg-icons'
import { faTableList } from '@fortawesome/free-solid-svg-icons'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import CreateCategoryPage from '../add-category/page'
import CreateProductPage from '../add-product/page'
import AllBooking from '../all-booking/page'
import AllCategory from '../all-category/page'
import AllProduct from '../all-product/page'
import BarChart from '../chart/page'
import { useCategory } from '../../../hooks/category' 
import { useBooking } from '../../../hooks/booking' 
import { useProduct } from '../../../hooks/product' // Import hook useProduct
import { useAuth } from '@/hooks/auth'
import React, { useState, useEffect } from 'react'

const Dashboard = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const { product } = useProduct() // Sử dụng hook useProduct để lấy danh sách sản phẩm
    const { category } = useCategory()
    const { booking } = useBooking()

    const [productCount, setProductCount] = useState(0)
    const [categoryCount, setCategoryCount] = useState(0)
    const [bookingCount, setBookingCount] = useState(0)

    useEffect(() => {
        if (product) {
            setProductCount(product.length) // Cập nhật số lượng sản phẩm
        }
        
    }, [product])

    useEffect(() => {
        if (booking) {
            setBookingCount(booking.length) // Cập nhật số lượng sản phẩm
        }
        
    }, [booking])

    useEffect(() => {
        if (category) {
            const totalCount = category.reduce((acc, curr) => acc + curr.length, 0);
            setCategoryCount(totalCount); // Cập nhật số lượng sản phẩm
        }
    }, [category]);

    const [showCreateCategory, setShowCreateCategory] = useState(false)
    const [showAllCategory, setShowAllCategory] = useState(false)
    const [showCreateProduct, setShowCreateProduct] = useState(false)
    const [showAllProduct, setShowAllProduct] = useState(false)
    const [showBooking, setShowBooking] = useState(false)
    const [showChart, setShowChart] = useState(false)

    const handleChartClick = () => {
        setShowCreateCategory(false);
        setShowAllCategory(false);
        setShowCreateProduct(false);
        setShowAllProduct(false);
        setShowBooking(false);
        setShowChart(true)
    }

    const handleCategoryClick = () => {
        setShowCreateCategory(true);
        setShowAllCategory(false);
        setShowCreateProduct(false);
        setShowAllProduct(false);
        setShowBooking(false);
        setShowChart(false)
    }

    const handleAllCategoryClick = () => {
        setShowCreateCategory(false);
        setShowAllCategory(true);
        setShowCreateProduct(false);
        setShowAllProduct(false);
        setShowBooking(false);
        setShowChart(false)
    }

    const handleProductClick = () => {
        setShowCreateCategory(false);
        setShowAllCategory(false);
        setShowCreateProduct(true);
        setShowAllProduct(false);
        setShowChart(false)
        setShowBooking(false);
    }

    const handleAllProductClick = () => {
        setShowCreateCategory(false);
        setShowAllCategory(false);
        setShowChart(false)
        setShowCreateProduct(false);
        setShowAllProduct(true);
        setShowBooking(false);
    }

    const handleBookingClick = () => {
        setShowCreateCategory(false);
        setShowAllCategory(false);
        setShowCreateProduct(false);
        setShowAllProduct(false);
        setShowBooking(true);
        setShowChart(false)
    }

    const handleCategoryCreated = () => {
        setShowCreateCategory(false);
        setShowAllCategory(true);
    }

    const handleProductCreated = () => {
        setShowCreateProduct(false);
        setShowAllProduct(true);
    }


    return (
        <>
            <link
                href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
                rel="stylesheet"
            />
            <div className="task-manager">
                <div className="left-bar">
                    <div className="upper-part">
                        <div className="actions">
                            <div className="circle"></div>
                            <div className="circle-2"></div>
                        </div>
                    </div>
                    <div className="left-content">
                        <ul className="action-list">
                            <li className="item">
                                <span
                                    onClick={handleChartClick}
                                    className="flex items-center cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={faShop}
                                        className="times-icon"
                                    />
                                    <span className="ml-2">Thống kê</span>
                                </span>
                            </li>
                            <li className="item">
                                <span
                                    onClick={handleBookingClick}
                                    className="flex items-center cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={faClipboardList}
                                        className="times-icon"
                                    />
                                    <span className="ml-2">Đơn đặt phòng</span>
                                </span>
                            </li>
                            <li className="item">
                                <span
                                    onClick={handleProductClick}
                                    className="flex items-center cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={faHouseCircleCheck}
                                        className="times-icon"
                                    />
                                    <span className="ml-2">Tạo mới nhà ở</span>
                                </span>
                            </li>
                            <li className="item">
                                <span
                                    onClick={handleAllProductClick}
                                    className="flex items-center cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="times-icon"
                                    />
                                    <span className="ml-2">
                                        Danh sách nhà đã tạo
                                    </span>
                                </span>
                            </li>
                            <li className="item">
                                <span
                                    onClick={handleCategoryClick}
                                    className="flex items-center cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={faListDots}
                                        className="times-icon"
                                    />
                                    <span className="ml-2">
                                        Tạo mới danh mục
                                    </span>
                                </span>
                            </li>
                            <li className="item">
                                <span
                                    onClick={handleAllCategoryClick}
                                    className="flex items-center cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={faTableList}
                                        className="times-icon"
                                    />
                                    <span className="ml-2">
                                        Danh sách danh mục
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-content">
                    {showCreateCategory && <CreateCategoryPage onCategoryCreated={handleCategoryCreated} />}
                    {showCreateProduct && <CreateProductPage onProductCreated={handleProductCreated} />}
                    {showBooking && <AllBooking />}
                    {showAllCategory && <AllCategory />}
                    {showAllProduct && <AllProduct />}
                    {showChart && <BarChart />}
                </div>
                <div className="right-bar">
                    <div className="right-content">
                        <div className="task-box blue">
                            <div className="description-task">
                                <div className="task-name">
                                    Tổng số nhà ở đã tạo: {productCount}
                                </div>
                            </div>
                            <div className="more-button"></div>
                        </div>
                        <div className="task-box red">
                            <div className="description-task">
                                <div className="task-name">
                                    Tổng số danh mục đã tạo: {categoryCount}
                                </div>
                            </div>
                            <div className="more-button"></div>
                        </div>
                        <div className="task-box green">
                            <div className="description-task">
                                <div className="task-name">Tổng số đơn đặt phòng: {bookingCount}</div>
                            </div>
                            <div className="more-button"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
