'use client'

import React, { useEffect, useState } from 'react'
import { useProduct, getProductById } from '../../../../hooks/product'
import '../show_product_css.scss'
import { Pannellum } from 'pannellum-react'

export const ProductDetailWithPannellum = () => {
    const id = window.location.pathname.split('/').pop()
    const { getProductById, error } = useProduct()
    const [product, setProduct] = useState(null)
    const [showImage360, setShowImage360] = useState(false)

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

    // var base64DataPrefix = base64Image.substring(
    //     0,
    //     base64Image.indexOf(',') + 1,
    // )
    // var binaryStringData = base64Image.substring(
    //     base64Image.indexOf(',') + 1,
    //     base64Image.length,
    // )
    // var binaryString = window.atob(binaryStringData)
    // var binaryLen = binaryString.length
    // var fileContent = new Uint8Array(binaryLen)
    // for (var i = 0; i < binaryLen; i++) {
    //     var ascii = binaryString.charCodeAt(i)
    //     fileContent[i] = ascii
    // }
    // var blob = new Blob([fileContent], { type: 'application/octet-stream' })
    // var fileURL = window.URL.createObjectURL(blob)

    return (
        <div>
            <h2>Chi tiết sản phẩm {id}</h2>
            {productFields.map(field => (
                <p key={field}></p>
            ))}
            <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th className="border">ID</th>
                        <th className="border">Tiêu đề</th>
                        <th className="border">Kiểu kiến trúc</th>
                        <th className="border">Phạm vi sử dụng</th>
                        <th className="border">Địa chỉ</th>
                        <th className="border">Sức chứa</th>
                        <th className="border">Tiện ích</th>
                        <th className="border">Ảnh</th>
                        <th className="border">Ảnh 360</th>
                        <th className="border">Mô tả</th>
                        <th className="border">Chi phí</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={product.id} style={{ border: '1px solid black' }}>
                        <td className="border">{product.id}</td>
                        <td className="border">{product.title}</td>
                        <td className="border">{product.id_product}</td>
                        <td className="border">{product.privacy_type}</td>
                        <td className="border">{product.location}</td>
                        <td className="border">{product.capacity}</td>
                        <td className="border">{product.amenities}</td>
                        <td className="border">
                            {product.image &&
                                Array.isArray(JSON.parse(product.image)) && (
                                    <>
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
                                                        width="100px"
                                                        height="70px"
                                                    />
                                                )
                                            },
                                        )}
                                    </>
                                )}
                        </td>

                        
                        <td className="border360">
                            {product.image360 &&
                                Array.isArray(JSON.parse(product.image360)) &&
                                JSON.parse(product.image360).map(
                                    (image360, index) => {
                                        const cleanedImage360Path = image360.replace(
                                            /[\[\]"]/g,
                                            '',
                                        )
                                        const image360Path = `data:image/png;base64,${cleanedImage360Path}`
                                        console.log('image360',image360Path);

                                        return (
                                            showImage360 && (
                                                <Pannellum
                                                    key={index}
                                                    width="100%"
                                                    height="300px"
                                                    image={image360Path}
                                                    pitch={10}
                                                    yaw={180}
                                                    hfov={110}
                                                    autoLoad
                                                    alt="image360"
                                                />
                                            )
                                        )
                                    },
                                )}
                        </td>
                        
                        <td className="border">{product.description}</td>
                        <td className="border">{product.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetailWithPannellum
