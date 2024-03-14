import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useCate = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()


const { data: categories, error, mutate } = useSWR('/category', () =>
axios
    .get('/category')
    .then(res => res.data.categories)
    .catch(error => {
        if (error.response.status !== 409) throw error

        router.push('/verify-email')
    }),
)
return {
    categories,
    error,
    mutate,
}
}