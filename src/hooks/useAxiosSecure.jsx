// import axios from "axios";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "http://localhost:3000",
// });

// const useAxiosSecure = () => {
//   const navigate = useNavigate();
//   const { logOut } = useAuth();
//   axiosSecure.interceptors.request.use(

//     function (config) {
//       const token = localStorage.getItem("access-token");
//       console.log("req stoped by interceptor")
//       config.headers.authorization = `Bearer ${token}`;
//       return config;
//     },
//     function (error) {
//       return Promise.reject(error);
//     }
//   );

  
//   axiosSecure.interceptors.response.use(function(response){
//     return response;
//   },
//   async(error) =>{
//     console.log("error in the interceptor",error)
//     const status = error.response.status;
//     if(status === 401 || status === 403){
//       await logOut()
//       navigate('/login')
//     }
//     return Promise.reject(error);
//   })

//   return axiosSecure;
// };

// export default useAxiosSecure;



// code copy from chatgpt

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  axiosSecure.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        await logOut();
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
