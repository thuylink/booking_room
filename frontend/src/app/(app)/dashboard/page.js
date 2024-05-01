'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useProduct } from '../../../hooks/product'
import { useCategory } from '../../../hooks/category'
import { useRating } from '../../../hooks/rating'
import { useCart } from '../../../hooks/cart'
import { Card, CardBody } from '@nextui-org/card'
import './style_dashboard.scss'
import { Button } from '@nextui-org/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const { product, error } = useProduct()
    const { category } = useCategory()
    const { rating } = useRating()

    const [searchValue, setSearchValue] = useState('')
    const { addToCart } = useCart()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [showFilterPopup, setShowFilterPopup] = useState(false)

    const [priceMin, setPriceMin] = useState(''); // Giá trị giá tiền tối thiểu
    const [priceMax, setPriceMax] = useState('');
    const [capacityMin, setCapacityMin] = useState('')
    const [capacityMax, setCapacityMax] = useState('');
    const [privacy_type, setPrivacyType] = useState('')
    const [filteredData, setFilteredData] = useState([]);

    const toggleFilterPopup = () => {
        setShowFilterPopup(!showFilterPopup);
    };

    const handleFilterSubmit = () => {
        const minPrice = parseFloat(priceMin);
        const maxPrice = parseFloat(priceMax);
        const minCapacity = parseInt(capacityMin);
        const maxCapacity = parseInt(capacityMax);
    
        const filteredProducts = product.filter(item => {
            const priceCondition = item.price >= minPrice && item.price <= maxPrice;
            const capacityCondition = item.capacity >= minCapacity && item.capacity <= maxCapacity;
            let privacyTypeCondition = true;
    
            // Kiểm tra điều kiện của privacy_type
            if (privacy_type === "Một căn phòng") {
                privacyTypeCondition = item.privacy_type === "Một căn phòng";
            } else if (privacy_type === "Phòng chung") {
                privacyTypeCondition = item.privacy_type === "Phòng chung";
            } else if (privacy_type === "Toàn bộ căn nhà") {
                privacyTypeCondition = item.privacy_type === "Toàn bộ căn nhà";
            }
    
            return priceCondition && capacityCondition && privacyTypeCondition;
        });
    
        setFilteredData(filteredProducts);
    };
    
    if (rating && rating.length > 0) {
        rating.forEach(ratingItem => {
            if (ratingItem && ratingItem.length > 0) {
                ratingItem.forEach(item => {
                    // console.log('item_name:', item.star)
                })
            }
            // console.log('length', rating.length)
        })
    }

    if (product && product.length > 0 && rating && rating.length > 0) {
        const updatedProductList = product.map(productItem => {
            const relevantRatings = rating.filter(
                ratingItem => ratingItem.id_product === productItem.id,
            )

            if (relevantRatings && relevantRatings.length > 0) {
                const totalStars = relevantRatings.reduce(
                    (acc, curr) => acc + curr.star,
                    0,
                )
                const averageStars = totalStars / relevantRatings.length
                const totalReviews = relevantRatings.length
                productItem.star = averageStars.toFixed(1)
                productItem.totalReviews = totalReviews
            } else {
                productItem.star = 0
            }
            return productItem
        })
    }

    const handleClickCategory = name_category => {
        setSelectedCategory(name_category)
    }

    if (category && category.length > 0) {
        category.forEach(categoryItem => {
            if (categoryItem && categoryItem.length > 0) {
                categoryItem.forEach(item => {
                    // console.log('item_name:', item.name_category)
                })
            }
            // console.log('length', category.length)
        })
    }

    if (product && product.length > 0) {
        const show = product.map(test => {
            if (category && category.length > 0) {
                const foundCategory = category[0].find(
                    item => item.id === test.id_category,
                )
                if (foundCategory) {
                    test.name_category = foundCategory.name_category
                }
            }
            return test
        })
    }

    const handleAddToCart = async id_product => {
        try {
            await addToCart(id_product)
            console.log('Đã thêm sản phẩm vào giỏ hàng')
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error)
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const filteredProducts = product?.filter(product =>
        product.location.toLowerCase().includes(searchValue.toLowerCase()),
    )

    const filteredProductsAll =
    filteredProducts && filteredProducts.length > 0
        ? filteredProducts.filter(product => {
            // Kiểm tra điều kiện của privacy_type
            let privacyTypeCondition = true;
            if (privacy_type === "Một căn phòng") {
                privacyTypeCondition = product.privacy_type === "Một căn phòng";
            } else if (privacy_type === "Phòng chung") {
                privacyTypeCondition = product.privacy_type === "Phòng chung";
            } else if (privacy_type === "Toàn bộ căn nhà") {
                privacyTypeCondition = product.privacy_type === "Toàn bộ căn nhà";
            }

            // Kiểm tra điều kiện của category, price và capacity
            const categoryCondition = !selectedCategory || product.name_category === selectedCategory;
            const priceCondition = (!priceMin && !priceMax) || (product.price >= parseFloat(priceMin) && product.price <= parseFloat(priceMax));
            const capacityCondition = (!capacityMin && !capacityMax) || (product.capacity >= parseInt(capacityMin) && product.capacity <= parseInt(capacityMax));

            // Trả về true nếu cả bốn điều kiện đều đúng
            return privacyTypeCondition && categoryCondition && priceCondition && capacityCondition;
        })
        : [];

    return (
        <div className="al">
            <Navbar>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center">
                    <div className="category-slider-wrapper">
                        <Slider {...settings}>
                            {category &&
                                category.length > 0 &&
                                category.flatMap(categoryItem => {
                                    if (
                                        categoryItem &&
                                        categoryItem.length > 0
                                    ) {
                                        return categoryItem.map(item => (
                                            <div
                                                className="slide-item"
                                                key={item.name_category}>
                                                <button
                                                    className="nav-item"
                                                    onClick={() =>
                                                        handleClickCategory(
                                                            item.name_category,
                                                        )
                                                    }>
                                                    {item.name_category}

                                                </button>
                                            </div>
                                        ))
                                    }
                                    return null
                                })}
                        </Slider>
                    </div>
                </NavbarContent>
                <NavbarContent className="timkiem">
                    <NavbarItem>
                        <form className="timkiem">
                            <input
                                type="text"
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                placeholder="Tìm kiếm theo địa chỉ..."
                                className="timkiem border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </form>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent>
                    <NavbarItem>
                        <Button
                            className="boloc bg-pink-500"
                            onClick={toggleFilterPopup}>
                            <FontAwesomeIcon
                                icon={faFilter}
                                className="heart-icon"
                                style={{
                                    color: '#ff385c',
                                }}
                            />
                            <span className="boloc1 text-white cursor-pointer active:opacity-50">
                                Bộ lọc
                            </span>
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                {showFilterPopup && (

                    <div className="filter-overlay">
                    
    <div className="filter-popup">
        <form>
        <Button className='close-button' onClick={toggleFilterPopup}>
                <FontAwesomeIcon icon={faTimes} />
            </Button>
        <div className="question" style={{ display: 'flex' }}>
        
        <input 
            type="text" 
            value={priceMin}
            onChange={e => setPriceMin(e.target.value)}
            placeholder="Giá tối thiểu"
            style={{ marginRight: '10px' }}
        />
        <input 
            type="text"
            value={priceMax}
            onChange={e => setPriceMax(e.target.value)}
            placeholder="Giá tối đa"
        />
    </div>
    
            <div className="question" style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    value={capacityMin}
                    onChange={e => setCapacityMin(e.target.value)}
                    placeholder="Sức chứa tối thiểu"
                    style={{ marginRight: '10px'}}

                />
                <input 
                    type="text"  
                    value={capacityMax}
                    onChange={e => setCapacityMax(e.target.value)}
                    placeholder="Sức chứa tối đa"
                />
            </div>

            <div className="question" style={{ display: 'flex' }}>
                <select
                    value={privacy_type}
                    onChange={e => setPrivacyType(e.target.value)}
                    className="sel"
                    placeholder="Phạm vi sử dụng"
                    style={{ marginRight: '10px' }}
                >
                    <option value="phong">Một căn phòng</option>
                    <option value="phong_chung">Phòng chung</option>
                    <option value="toan_bo_nha">Toàn bộ căn nhà</option>
                </select>
            </div>

        </form>
    </div>
</div>

                )}



                <NavbarContent justify="end">
                    <NavbarItem>
                        <Link href={`/all-cart`} passHref>
                            <Button className="yeu bg-pink-500">
                                <span className="yeu1 text-white cursor-pointer active:opacity-50">
                                    Danh sách yêu thích
                                </span>
                            </Button>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <div className="sticky-element"></div>

            <div className="other-elements">
                <div className="grid grid-cols-4 gap-21">
                    {filteredProductsAll?.map(product => (
                        <section key={product.id} className="py-36">
                            <div className="container flex items-center justify-center">
                                <Card className="py-4 lg:w-3/4 xl:w-1/2">
                                    <CardBody className="overflow-visible py-2">
                                        <div className="flex flex-col-reverse gap-4">
                                            <div className="right">
                                                <h2 className="text-lg font-bold uppercase">
                                                    {product.location}
                                                </h2>

                                                <div className=" gia mb-6 mt-2 flex gap-3">
                                                    {product.price} VNĐ/đêm
                                                </div>
                                                <div className=" kt mb-6 mt-2 flex gap-3">
                                                    {product.name_category}
                                                    {console.log(product.privacy_type)}
                                                </div>

                                                <div className=" mb-6 mt-2 flex gap-3">
                                                    {product.star}
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        className="heart-icon"
                                                        style={{
                                                            color: '#ff385c',
                                                        }}
                                                    />
                                                    {product.totalReviews}
                                                    <FontAwesomeIcon
                                                        icon={faComment}
                                                        className="heart-icon"
                                                        style={{
                                                            color: '#ff385c',
                                                        }}
                                                    />
                                                </div>

                                                <div className="mt-6 flex gap-6">
                                                    <span
                                                        className="custom-button"
                                                        onClick={() => {
                                                            handleAddToCart(
                                                                product.id,
                                                            )
                                                        }}>
                                                        <FontAwesomeIcon
                                                            icon={faHeart}
                                                            className="heart-icon"
                                                        />
                                                    </span>
                                                </div>
                                            </div>

                                            {product.image &&
                                                Array.isArray(
                                                    JSON.parse(product.image),
                                                ) && (
                                                    <>
                                                        {JSON.parse(
                                                            product.image,
                                                        )
                                                            .slice(0, 1)
                                                            .map(
                                                                (
                                                                    image,
                                                                    index,
                                                                ) => {
                                                                    const cleanedImagePath = image.replace(
                                                                        /[\[\]"]/g,
                                                                        '',
                                                                    )
                                                                    const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`

                                                                    return (
                                                                        <a
                                                                            href={`/show-product/${product.id}`}
                                                                            key={
                                                                                index
                                                                            }>
                                                                            <img
                                                                                key={
                                                                                    index
                                                                                }
                                                                                src={
                                                                                    imagePath
                                                                                }
                                                                                alt="Image"
                                                                                width="270px"
                                                                                height="200px"
                                                                                className="rounded-image"
                                                                            />
                                                                        </a>
                                                                    )
                                                                },
                                                            )}
                                                    </>
                                                )}
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </section>
                    ))}
                </div>{' '}
            </div>
        </div>
    )
}

export default Dashboard
