import React from 'react'
import FoodOrder from '../../../Componets/FoodOrder/FoodOrder'

const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 gap-10 mt-24">
                {
                    items.map(item => <FoodOrder key={item._id} item={item}></FoodOrder>)
                }
            </div>
  )
}

export default OrderTab
