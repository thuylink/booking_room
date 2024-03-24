'use client'

import React, { useEffect, useState } from 'react'
import { useProduct, getProductById } from '../../../../hooks/product'
import '../show_product_css.scss'
// import { Pannellum } from 'pannellum-react'

import Image from 'next/image'

import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import { Navbar, NavbarContent, Link } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { NavbarBrand, NavbarItem } from '@nextui-org/react'

export const ProductDetailWithPannellum = () => {
    const id = window.location.pathname.split('/').pop()
    const { getProductById, error } = useProduct()
    const [product, setProduct] = useState(null)
    const [showImage360, setShowImage360] = useState(false)
    const [showImageGallery, setShowImageGallery] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductById(id)
                setProduct(response)
                if (response.image360) {
                    setShowImage360(true)
                }
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchProduct()
    }, [getProductById, id])

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!product) {
        return <div>Loading...</div>
    }

    const productFields = Object.keys(product)

    return (
        <div className="container">
            <Navbar>
                <NavbarBrand>
                    <p className="font-bold text-inherit">LOGO AIRBNB</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center">
                    <NavbarItem>
  <Link color="foreground" href="#" onClick={() => setShowImageGallery(true)}>
    Ảnh
  </Link>
</NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Thông tin chi tiết và đặt phòng
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Đánh giá
                        </Link>
                    </NavbarItem>
                   
                </NavbarContent>
                <NavbarContent justify="end"></NavbarContent>
            </Navbar>
            <div className="left-section">
                <div>
                    <Button color="primary" className="title">
                        {' '}
                        {product.title}
                    </Button>

                    {productFields.map(field => (
                        <p key={field}></p>
                    ))}
                </div>
            </div>
            <div className="container flex items-center justify-center">
                <Card className="py-4 lg:w-3/4 xl:w-1/2">
                    <CardBody className="overflow-visible py-2">
                        <div className="flex flex-col-reverse gap-6">
                            <div className="right">
                                <h2 className="text-lg font-bold capitalize">
                                    Thông tin chi tiết:
                                </h2>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <div>
                                            <h2 className="text-lg font-bold capitalize">
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    className="mr-2"
                                                />
                                                <span className="address">
                                                    Địa chỉ:
                                                </span>
                                                <span className="value">
                                                    {product.location}
                                                </span>
                                            </h2>
                                        </div>

                                        <div>
                                            <h2 className="text-lg font-bold capitalize">
                                                <FontAwesomeIcon
                                                    icon={faDollarSign}
                                                    className="mr-2"
                                                />
                                                <span className="address">
                                                    Chi phí:
                                                </span>
                                                <span className="value">
                                                    {product.price} VNĐ/ngày đêm
                                                </span>
                                            </h2>
                                        </div>

                                        <div>
                                            <h2 className="text-lg font-bold capitalize">
                                                <FontAwesomeIcon
                                                    icon={faPenFancy}
                                                    className="mr-2"
                                                />
                                                <span className="address">
                                                    Mô tả:
                                                </span>
                                                <span className="value">
                                                    {product.description.replace(
                                                        /<\/?p>/g,
                                                        '',
                                                    )}
                                                </span>
                                            </h2>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <h2 className="text-lg font-bold capitalize">
                                                <FontAwesomeIcon
                                                    icon={faPerson}
                                                    className="mr-2"
                                                />
                                                <span className="address">
                                                    Sức chứa:
                                                </span>
                                                <span className="value">
                                                    {product.capacity} Người
                                                </span>
                                            </h2>
                                        </div>

                                        <div>
                                            <h2 className="text-lg font-bold capitalize">
                                                <FontAwesomeIcon
                                                    icon={faCircleInfo}
                                                    className="mr-2"
                                                />
                                                <span className="address">
                                                    Phạm vi sử dụng:
                                                </span>
                                                <span className="value">
                                                    {product.privacy_type}
                                                </span>
                                            </h2>
                                        </div>

                                        <div>
                                            <h2 className="text-lg font-bold capitalize">
                                                <FontAwesomeIcon
                                                    icon={faBars}
                                                    className="mr-2"
                                                />
                                                <span className="address">
                                                    Tiện ích:
                                                </span>
                                            </h2>

                                            <span>
                                                <div className="highlighted-box">
                                                    {product.amenities
                                                        .split(',')
                                                        .map(
                                                            (
                                                                amenity,
                                                                index,
                                                            ) => (
                                                                <div
                                                                    key={index}
                                                                    className="highlighted-value">
                                                                    {amenity}
                                                                </div>
                                                            ),
                                                        )}
                                                </div>
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mt-6 flex gap-6">
                                            <Button className="custom-button">
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                    className="heart-icon"
                                                />

                                                <span className="button-text">
                                                    Thêm vào yêu thích
                                                </span>
                                            </Button>
                                            <Link
                                                href={`/show-product/${product.id}`}
                                                className="underline-none text-sm hover:text-gray-900">
                                                <Button className="ml-4 bg-pink-500">
                                                    <span className="text-lg1 text-white cursor-pointer active:opacity-50">
                                                        Đánh giá
                                                    </span>
                                                </Button>
                                            </Link>
                                        </div>

                                        <div>
                                            <div className="container">
                                                <form
                                                    className="book"
                                                    method="post"
                                                    id="myform">
                                                    <div className="row mb-3">
                                                        <div className="col-sm-3">
                                                            <label
                                                                className="form-label"
                                                                htmlFor="event_date">
                                                                Nhận phòng:
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                type="date"
                                                                noValidate="novalidate"
                                                                name="event_date"
                                                                id="event_date"
                                                            />
                                                        </div>

                                                        <div className="col-sm-3">
                                                            <label
                                                                className="form-label"
                                                                htmlFor="event_date">
                                                                Trả phòng:
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                type="date"
                                                                noValidate="novalidate"
                                                                name="event_date"
                                                                id="event_date"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-sm-3">
                                                            <label
                                                                className="form-label"
                                                                htmlFor="phone">
                                                                Số khách:
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                name="phone"
                                                                id="phone"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <Link
                                                            href={`/show-product/${product.id}`}
                                                            className="underline-none text-sm hover:text-gray-900">
                                                            <Button className="ml-4 bg-pink-500">
                                                                <span className="text-lg1 text-white cursor-pointer active:opacity-50">
                                                                    Đặt phòng
                                                                </span>
                                                            </Button>
                                                        </Link>
                                                        <div className="col-sm-6"></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {product.image &&
                                Array.isArray(JSON.parse(product.image)) && (
                                    <div className="image-gallery">
                                        {JSON.parse(product.image).map(
                                            (image, index) => {
                                                const cleanedImagePath = image.replace(
                                                    /[\[\]"]/g,
                                                    '',
                                                )
                                                const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`

                                                return (
                                                    <img
                                                        key={index}
                                                        src={imagePath}
                                                        alt="Image"
                                                        width="400px"
                                                        height="370px"
                                                    />
                                                )
                                            },
                                        )}
                                    </div>
                                )}
                        </div>

                        <div class="container bootdey flex-grow-1 container-p-y">

                        <div class="bg-white p-4 ">


                        <div class="infor">
                              <div class="media align-items-center py-3 mb-3">
                          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="d-block ui-w-100 rounded-circle" />
                          <div class="media-body contact2">
                            <h4 class="font-weight-bold mb-0">John Doe <span class="text-muted font-weight-normal">@johndoe</span></h4>
                            <div class="text-muted mb-2">ID: 3425433</div>
                            <a href="javascript:void(0)" class="btn btn-default btn-sm icon-btn"><i class="fa fa-mail"></i></a>
                          </div>
                        </div>
                      
                        <div class="card mb-4">
                          <div class="card-body">
                            <table class="table1 user-view-table m-0">
                              <tbody>
                                <tr>
                                  <td>Tên:</td>
                                  <td><span class="fa fa-check text-primary"></span>&nbsp; Yes</td>
                                </tr>
                                <tr>
                                  <td>Tham gia:</td>
                                  <td>01/23/2017</td>
                                </tr>
                                <tr>
                                  <td>Ngày sinh:</td>
                                  <td>01/23/2018 (14 days ago)</td>
                                </tr>
                                <tr>
                                  <td>Giới tính:</td>
                                  <td>01/23/2018 (14 days ago)</td>
                                </tr>
                                <tr>
                                  <td>Điện thoại:</td>
                                  <td>1234567890</td>
                                </tr>
                                <tr>
                                  <td>Địa chỉ:</td>
                                  <td><span class="badge badge-outline-success">huhuhuhu</span></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="border-light m-0"></div>
                          <div class="table-responsive"></div>
                        </div>              
                        </div>

                        
                      </div>


          </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )

    // return (
    //     <div>
    //         <h2>Chi tiết sản phẩm {id}</h2>
    //         {productFields.map(field => (
    //             <p key={field}></p>
    //         ))}
    //         <table style={{ borderCollapse: 'collapse' }}>
    //             <thead>
    //                 <tr>
    //                     <th className="border">ID</th>
    //                     <th className="border">Tiêu đề</th>
    //                     <th className="border">Kiểu kiến trúc</th>
    //                     <th className="border">Phạm vi sử dụng</th>
    //                     <th className="border">Địa chỉ</th>
    //                     <th className="border">Sức chứa</th>
    //                     <th className="border">Tiện ích</th>
    //                     <th className="border">Ảnh</th>
    //                     <th className="border">Ảnh 360</th>
    //                     <th className="border">Mô tả</th>
    //                     <th className="border">Chi phí</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr key={product.id} style={{ border: '1px solid black' }}>
    //                     <td className="border">{product.id}</td>
    //                     <td className="border">{product.title}</td>
    //                     <td className="border">{product.id_product}</td>
    //                     <td className="border">{product.privacy_type}</td>
    //                     <td className="border">{product.location}</td>
    //                     <td className="border">{product.capacity}</td>
    //                     <td className="border">{product.amenities}</td>
    //                     <td className="border">
    //                         {product.image &&
    //                             Array.isArray(JSON.parse(product.image)) && (
    //                                 <>
    //                                     {JSON.parse(product.image).map(
    //                                         (image, index) => {
    //                                             const cleanedImagePath = image.replace(
    //                                                 /[\[\]"]/g,
    //                                                 '',
    //                                             )
    //                                             const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`

    //                                             return (
    //                                                 <img
    //                                                     key={index}
    //                                                     src={imagePath}
    //                                                     alt="Image"
    //                                                     width="100px"
    //                                                     height="70px"
    //                                                 />
    //                                             )
    //                                         },
    //                                     )}
    //                                 </>
    //                             )}
    //                     </td>

    //                     <td className="border360">
    //                         {product.image360 &&
    //                             Array.isArray(JSON.parse(product.image360)) &&
    //                             JSON.parse(product.image360).map(
    //                                 (image360, index) => {
    //                                     const cleanedImage360Path = image360.replace(
    //                                         /[\[\]"]/g,
    //                                         '',
    //                                     )
    //                                     const image360Path = `data:image/png;base64,${cleanedImage360Path}`
    //                                     console.log('image360', image360Path)

    //                                     return (
    //                                         showImage360 && (
    //                                             <Pannellum
    //                                                 key={index}
    //                                                 width="100%"
    //                                                 height="300px"
    //                                                 image={image360Path}
    //                                                 pitch={10}
    //                                                 yaw={180}
    //                                                 hfov={110}
    //                                                 autoLoad
    //                                                 alt="image360"
    //                                             />
    //                                         )
    //                                     )
    //                                 },
    //                             )}
    //                     </td>

    //                     <td className="border">{product.description}</td>
    //                     <td className="border">{product.price}</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>
    // )
}

export default ProductDetailWithPannellum
// <div className="flex-1">
//                                 {product.image360 &&
//                                     Array.isArray(
//                                         JSON.parse(product.image360),
//                                     ) &&
//                                     JSON.parse(product.image360).map(
//                                         (image360, index) => {
//                                             const cleanedImage360Path = image360.replace(
//                                                 /[\[\]"]/g,
//                                                 '',
//                                             )
//                                             const image360Path = `data:image/png;base64,${cleanedImage360Path}`
//                                             console.log(
//                                                 'image360',
//                                                 image360Path,
//                                             )

//                                             return (
//                                                 showImage360 && (
//                                                     <Pannellum
//                                                         key={index}
//                                                         width="500px"
//                                                         height="300px"
//                                                         image={
//                                                             image360Path
//                                                         }
//                                                         pitch={10}
//                                                         yaw={180}
//                                                         hfov={110}
//                                                         autoLoad
//                                                         alt="image360"
//                                                     />
//                                                 )
//                                             )
//                                         },
//                                     )}
//                             </div>
