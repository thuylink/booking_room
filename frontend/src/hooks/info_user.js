import useSWR from 'swr'
import axios from '@/lib/axios'

export const useUser = () => {
    const { data: users, error, mutate } = useSWR('/users', () =>
        axios
            .get('/users')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    return {
        users,
        error,
        mutate,
    }
}
