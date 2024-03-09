import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = []} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
  return (
    <div>
      <h2 className='text-4xl'>Total Users {users.length}</h2>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default AllUsers
