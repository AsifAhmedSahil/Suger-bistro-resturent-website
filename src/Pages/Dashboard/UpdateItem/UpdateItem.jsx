import React from 'react'
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle'
import { useLoaderData } from 'react-router-dom'
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UpdateItem = () => {
    const items = useLoaderData()
    const {name} = items
    console.log(name);

  //   const axiosSecure = useAxiosSecure();
  // const { data: users = [], refetch } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get("/users");
  //     return res.data;
  //   },
  // });
    
  return (
    <div>
      <SectionTitle heading='update item' subHeading='Update New'></SectionTitle>
    </div>
  )
}

export default UpdateItem
