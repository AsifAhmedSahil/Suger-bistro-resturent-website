import React from "react";
import SectionTitle from "../../../Componets/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensilSpoon } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading={"add a item"}
        subHeading={"what's New ?"}
      ></SectionTitle>
      <div>
        <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name",{required:true})}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex gap-6 my-6">
            {/* category */}

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select className="select select-bordered w-full ">
                <option disabled selected {...register("category",{required:true})}>
                  Select a category
                </option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soups">soups</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
              </select>
            </label>

            {/* price */}

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price",{required:true})}
                type="text"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <label className="form-control my-6">
            <div className="label">
              <span className="label-text">Recipe details</span>
              
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
              {...register("recipe",{required:true})}
            ></textarea>
            
          </label>

          <div>
          <input {...register("image",{required:true})} type="file" className="file-input w-full " />
          </div>

          <button className="btn my-6  rounded-xl">Add Items <FaUtensilSpoon className="ml-2"></FaUtensilSpoon> </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
