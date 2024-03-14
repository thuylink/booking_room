'use client'

import { useEffect, useState } from 'react'
import { useCategory, getCategoryImage } from '../../../../hooks/category'
import '../show_category_css.scss'
import { Pannellum } from 'pannellum-react'

export const CategoryDetailWithPannellum = () => {
    const id = window.location.pathname.split('/').pop()
    const { getCategoryById, error } = useCategory()
    const [category, setCategory] = useState(null)
    const [showImage360, setShowImage360] = useState(false)

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await getCategoryById(id)
                setCategory(response)
                if (response.image360) {
                    setShowImage360(true)
                }
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchCategory()
    }, [getCategoryById, id])

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!category) {
        return <div>Loading...</div>
    }

    const categoryFields = Object.keys(category)

    return (
        <div>
            <h2>Chi tiết danh mục {id}</h2>
            {categoryFields.map(field => (
                <p key={field}></p>
            ))}
            <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th className="border">ID</th>
                        <th className="border">Tên</th>
                        <th className="border">Ảnh</th>
                        <th className="border borderimage">Ảnh 360</th>
                        <th className="border borderimage360">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={category.id} style={{ border: '1px solid black' }}>
                        <td className="border">{category.id}</td>
                        <td className="border">{category.name_category}</td>
                        <td className="border">
                            {category.image &&
                                (() => {
                                    try {
                                        const parsedImage = JSON.parse(
                                            category.image,
                                        )
                                        if (Array.isArray(parsedImage)) {
                                            return (
                                                <>
                                                    {parsedImage.map(
                                                        (image, index) => {
                                                            const cleanedImagePath = image.replace(
                                                                /[\[\]"]/g,
                                                                '',
                                                            )

                                                            const imagePath = `http://127.0.0.1:8000/uploads/category/${cleanedImagePath}`
                                                            return (
                                                                <img
                                                                    key={index}
                                                                    src={
                                                                        imagePath
                                                                    }
                                                                    alt="Image"
                                                                    width="100%"
                                                                    height="100%"
                                                                />
                                                            )
                                                        },
                                                    )}
                                                </>
                                            )
                                        }
                                    } catch (error) {
                                        console.error(
                                            'Error parsing JSON:',
                                            error,
                                        )
                                    }
                                })()}
                        </td>

                        <td className="border360">
                            {category.image360 &&
                                Array.isArray(JSON.parse(category.image360)) &&
                                JSON.parse(category.image360).map(
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
                        <td className="border">{category.status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CategoryDetailWithPannellum
