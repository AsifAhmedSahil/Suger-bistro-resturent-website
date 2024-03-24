import React from 'react'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

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
          <Helmet>
            <title>Suger Bistro | Payment History</title>
        </Helmet>
            <h3 className='text-3xl'>Total Payments:{payments.length} </h3>

            <div className="overflow-x-auto mt-24">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='font-bold text-xl text-black'>
        <th></th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((payment,index)=> <tr key={payment._id}>
        <th>{index+1}</th>
        <td>{payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.status}</td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
}

export default PaymentHistory;

