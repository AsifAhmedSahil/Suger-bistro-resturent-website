import React from "react";

const FoodOrder = ({item}) => {
    const {name,image,price,recipe} = item
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
          {/* <button className="btn text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-xl">Add To Card</button> */}
          <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400 mt-4 rounded-xl">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default FoodOrder;
