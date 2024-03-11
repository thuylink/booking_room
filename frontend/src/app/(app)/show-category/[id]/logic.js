import { useEffect, useState } from 'react'
import { useCategory } from '../../../../hooks/category'

const CategoryDetailWithPannellumLogic = () => {
    const id = window.location.pathname.split('/').pop()
    const { getCategoryById, error } = useCategory()
    const [category, setCategory] = useState(null)


    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await getCategoryById(id)
                setCategory(response)
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
}

export default CategoryDetailWithPannellumLogic
