import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Componets/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/Menuitem";
import useMenu from "../../../hooks/useMenu";

const PopularItems = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div className="mb-8">
      <SectionTitle
        heading="from our menu"
        subHeading="Popular Items"
      ></SectionTitle>

      <div className="grid grid-cols-2 gap-12 mt-10 mb-16">
        {popular.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
      <div className=" flex  justify-center ">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          View More Items
        </button>
      </div>
    </div>
  );
};

export default PopularItems;
