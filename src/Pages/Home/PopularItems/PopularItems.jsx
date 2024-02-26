import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle'
import Menuitem from '../../Shared/Menuitem';

const PopularItems = () => {

    const [menu,setMenu] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res =>res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular")
            setMenu(popularItems)
        })
    },[])

  return (
    <div>
      <SectionTitle heading="from our menu" subHeading="Popular Items">

      </SectionTitle>

      <div className='grid grid-cols-2 gap-12 mt-10 mb-16'>
        {
            menu.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
            
        }
      </div>
    </div>
  )
}

export default PopularItems
