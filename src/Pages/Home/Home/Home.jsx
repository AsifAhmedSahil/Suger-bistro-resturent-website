import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularItems from '../PopularItems/PopularItems'
import ClientReview from '../ClientReview/ClientReview'

const Home = () => {
  return (
    <div className='text-white'>
      <Banner/>
      <Category/>
      <PopularItems></PopularItems>
      <ClientReview></ClientReview>
    </div>
  )
}

export default Home
