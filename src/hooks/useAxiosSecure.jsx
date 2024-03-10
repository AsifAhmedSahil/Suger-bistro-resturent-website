import axios from 'axios'
import React from 'react'

const axiosSecure = axios.create({
    baseURL: "http://localhost:3000"
})

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    config.headers.authorization = `Bearer ${token}`
    return config
  },function(error){
    return Promise.reject(error);
});

// axiosSecure 401 & 403 status
axiosSecure.interceptors.response.use(function(response){
  return response;
},(error) =>{
  const status = error.response.status;
  return Promise.reject(error);
})
  
  return axiosSecure
}

export default useAxiosSecure
