import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularItems from '../../Home/PopularItems/PopularItems';

const Menu = () => {
  return (
    <div>
        <Helmet>
            <title>Suger Bistro | Menu</title>
        </Helmet>
        <Cover img={menuImg} title={"our menu"}></Cover>
        <PopularItems></PopularItems>
    </div>
  )
}

export default Menu
