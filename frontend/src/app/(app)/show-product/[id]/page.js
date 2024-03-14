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
                            {showImage360 && (
                                <Pannellum
                                    width="100%"
                                    height="300px"
                                    image={`data:image/jpeg;base64,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`}
                                    pitch={10}
                                    yaw={180}
                                    hfov={110}
                                    autoLoad
                                />
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
