import React from 'react'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const PaymentHistory = () => {
    const { user } = useAuth()
    console.log(user.email)
    const axiosSecure = useAxiosSecure()


    const {data: payments=[]} = useQuery({
        queryKey:['payments',user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    

    

    return (
        <div>
            <h3 className='text-3xl'>Total Payments: </h3>
        </div>
    );
}

export default PaymentHistory;

