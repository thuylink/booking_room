'use client'

import { useEffect, useState } from 'react'
import { getAllProducts } from '../../../hooks/product'

const AllProduct = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getAllProducts()
                setProducts(products)
            } catch (error) {
                console.error(error)
                setError('Error loading products')
            }
        }

        fetchProducts()
    }, [])

    if (error) {
        return <div>{error}</div>
    }

    if (products.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>All Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllProduct
