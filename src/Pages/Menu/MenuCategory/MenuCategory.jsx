import React from 'react'
import Menuitem from '../../Shared/Menuitem'
import Cover from '../../Shared/Cover'

const MenuCategory = ({item ,title ,img}) => {
  return (
    <div className='pt-12'>
    {title && <Cover img={img} title={title}></Cover>}
    <div className="grid grid-cols-2 gap-12 mt-16 mb-16">
       
        {item.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
      </div>
  )
}

export default MenuCategory
