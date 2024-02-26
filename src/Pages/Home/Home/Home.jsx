import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularItems from '../PopularItems/PopularItems'

const Home = () => {
  return (
    <div className='text-white'>
      <Banner/>
      <Category/>
      <PopularItems></PopularItems>
    </div>
  )
}

export default Home
