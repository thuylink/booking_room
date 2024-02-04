import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios'
import useSWR from 'swr';

export const useAuth = ({ middleware } = {}) => {
    const router = useRouter(); 

    //Loading
    const [isLoading, setIsLoading] = useState(true);

    //User
    const {data: user, error, mutate} = useSWR("/api/user",
        () => axios
        .get("/api/user") 
        .then(response => response.data.data)
        .catch(error => {
            if(error.response.status !== 409)
                throw error
        })
    )

    //Register
    const register = async ({ setErrors, ...props }) => {
        setErrors([])

        await csrf()

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    //CSRF
    const csrf = () => axios.get("/sanctum/csrf-cookie");

    //Login
    const login = async ({setError, ...props}) => {
        setError([]);

        await csrf();

        axios
            .post("/login", props)
            .then(() => mutate() && router.push("/dashboard"))
            .catch(error => {
                if(error.response.status !== 422) throw error
                
                setErrors(Object.value(error.response.data.errors).flat())
            })
        }

    //Logout
    const logout = async () => {
        await axios.post("/logout");
        mutate(null); 

        router.push("/");
    }
     
    useEffect(() => {
        if(user || error) {
            setIsLoading(false);
        }

        if(middleware == "guest" && user) router.push("/");
        if(middleware == "auth" && error) router.push("login");
    })

    return {
        user,
        register,
        csrf,
        isLoading,
        login,
        logout
    }
}