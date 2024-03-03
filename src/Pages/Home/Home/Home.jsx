import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularItems from '../PopularItems/PopularItems'
import ClientReview from '../ClientReview/ClientReview'
import Featured from '../Featured/Featured'

const Home = () => {
  return (
    <div >
      <Banner/>
      <Category/>
      <PopularItems></PopularItems>
      {/* <ClientReview></ClientReview> */}
      <Featured></Featured>
    </div>
  )
}

export default Home
