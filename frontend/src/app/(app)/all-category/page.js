'use client'

import { useEffect, useState } from 'react'
import { useCategory } from '../../../hooks/category'

const AllCategoryPage = () => {
    const { categories, error} = useCategory()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (categories) {
            setLoading(false)
        }
    }, [categories])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Failed to fetch categories.</p>
    }

    if (categories.length === 0) {
        return <p>No categories found.</p>
    }

    return (
        <div>
            <h1>All Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name_category}</li>
                ))}
            </ul>
        </div>
    )
}

export default AllCategoryPage