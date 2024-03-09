import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { FaTrashAlt, FaUser, FaUserAlt, FaUserAltSlash, FaUsers } from 'react-icons/fa'
import Swal from 'sweetalert2'

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [],refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })

    const handleMakeAdmin = user =>{
        
    }

    const handleDelete = user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/users/${user._id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  refetch()
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success",
                  });
                }
              });
            }
          });
    }
  return (
    <div>
      <h2 className='text-4xl'>Total Users {users.length}</h2>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index) => <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-orange-600 btn-lg  rounded-xl text-2xl"
                  >
                    <FaUsers></FaUsers>
                  </button>
            </td>
            <td>
            <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-lg text-red-500 rounded-xl"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
            </td>
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
