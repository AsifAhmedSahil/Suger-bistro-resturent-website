// import React from 'react'
// import useAuth from './useAuth'
// import useAxiosSecure from './useAxiosSecure'
// import { useQuery } from '@tanstack/react-query'

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const {user} = useAuth()
//     const axiosSecure = useAxiosSecure()

//     const {data: isAdmin} = useQuery({
        
//         queryKey: [user?.email, 'isAdmin'],
        
//         queryFn: async() =>{
//             console.log(user?.email)
//             const res = await axiosSecure.get(`/users/admin/:${user.email}`);
//             console.log(res.data)
//             return res.data?.admin;
//         }
//     })
//     return [isAdmin]
// }

// export default useAdmin


const useAdmin = () =>{
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin} = useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin
        }

    })
    return [isAdmin]

}

export default useAdmin;