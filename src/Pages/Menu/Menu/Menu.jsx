import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import PopularItems from '../../Home/PopularItems/PopularItems';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle';

const Menu = () => {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
        <Helmet>
            <title>Suger Bistro | Menu</title>
        </Helmet>
        <Cover img={menuImg} title={"our menu"}></Cover>
        <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
        {/* offered menu */}
        <MenuCategory item={offered}></MenuCategory>
        {/* pizzza manu */}
        <MenuCategory item={pizza} title="Pizza"  img={pizzaImg}></MenuCategory>
        <MenuCategory item={dessert} title="Dessert" img={dessertImg}></MenuCategory>
        <MenuCategory item={soup} title="Soup" img={soupImg}></MenuCategory>
        <MenuCategory item={salad} title="Salad" img={saladImg}></MenuCategory>
    </div>
  )
}

export default Menu
