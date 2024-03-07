import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
// import axios from "axios";


const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      // const res = await axiosSecure.get(`/carts?email=${user.email}`);
      const res = await axiosSecure.get("/carts");
      
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
