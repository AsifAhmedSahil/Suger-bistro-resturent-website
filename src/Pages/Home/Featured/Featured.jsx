import React from 'react'
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle'
import featured from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
  return (
    <div className='featured-item pt-8 mb-12 bg-fixed  '>
        <SectionTitle  subHeading="Check it out" heading={"Featured Items"}></SectionTitle>
        <div className='md:flex justify-center items-center py-12 pb-20 px-20 bg-slate-700 bg-opacity-60 '>
            <div>
                <img src={featured} alt="" />
            </div>
            <div className='md:ml-10 text-white '>
                <p className='py-4'>March 10,2024</p>
                <p className='py-2'>Where can i get some?</p>
                <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet perferendis pariatur a culpa quis necessitatibus, repellat voluptatem, iusto enim libero saepe ex. Quisquam illum veniam eveniet beatae laboriosam eaque recusandae iste at cupiditate nostrum voluptatum amet dicta ipsa consequuntur laborum doloribus, ducimus quia nobis. Dolorem repudiandae nobis incidunt neque aut!</p>

                <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>

            </div>
        </div>
      
    </div>
  )
}

export default Featured
