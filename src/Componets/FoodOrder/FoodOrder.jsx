import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodOrder = ({item}) => {
    const {name,image,price,recipe,_id} = item
    const {user} = useAuth() 

    const navigate = useNavigate()

    const location = useLocation()

    const axiosSecure = useAxiosSecure()

    const handleAddToCart = food =>{
      // console.log(food)
      if(user && user.email){

        const cartItem = {
          menuId: _id,
          user:user.email,
          name,price,image
        }
        axiosSecure.post("/carts",cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title:  `${name} added to the cart`,
              showConfirmButton: false,
              timer: 2500
            });
          }
        })

      }
      else{
        Swal.fire({
          title: "You Are Not Login",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login?"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login",{state:{from:location}})
          }
        });
      }
      
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute bg-slate-900 text-white right-0 mr-4 mt-4 px-2 py-2 rounded-md">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          
          <button onClick={()=>{handleAddToCart(item)}} className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400 mt-4 rounded-xl">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default FoodOrder;
