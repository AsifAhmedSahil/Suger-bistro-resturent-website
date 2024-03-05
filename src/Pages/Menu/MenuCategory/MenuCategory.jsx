import React from "react";
import Menuitem from "../../Shared/Menuitem";
import Cover from "../../Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ item, title, img }) => {
  return (
    <div className="pt-12">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-12 mt-16 mb-16">
        {item.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex  justify-center">
      <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
