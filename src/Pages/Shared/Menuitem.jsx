import React from 'react'

const Menuitem = ({item}) => {
    const {image,name,recipe,price} = item;
  return (
    <div className='flex space-x-2 '>
      <img style={{borderRadius: "0 200px 200px 200px"}} className='w-[100px] cursor-pointer' src={image} alt="" />
      <div>
        <h3 className='uppercase cursor-pointer'>{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <div className='text-yellow-500'>
        ${price}
      </div>
    </div>
  )
}

export default Menuitem
