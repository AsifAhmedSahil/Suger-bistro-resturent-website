import React from 'react'
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle'
import featured from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
  return (
    <div className='featured-item pt-8 mb-12 '>
        <SectionTitle subHeading="Check it out" heading={"Featured Items"}></SectionTitle>
        <div className='md:flex justify-center items-center py-12 pb-20 px-20 '>
            <div>
                <img src={featured} alt="" />
            </div>
            <div className='md:ml-10 text-white'>
                <p>March 10,2024</p>
                <p>Where can i get some?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet perferendis pariatur a culpa quis necessitatibus, repellat voluptatem, iusto enim libero saepe ex. Quisquam illum veniam eveniet beatae laboriosam eaque recusandae iste at cupiditate nostrum voluptatum amet dicta ipsa consequuntur laborum doloribus, ducimus quia nobis. Dolorem repudiandae nobis incidunt neque aut!</p>

                <button className="btn btn-outline">Order Now</button>

            </div>
        </div>
      
    </div>
  )
}

export default Featured
