import React from 'react'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='md:w-4/12 mx-auto text-center mt-16 mb-16'>
      <p className='text-yellow-600 text-xl mb-8'>--- {subHeading} ---</p>
      <h3 className='uppercase text-4xl border-y-4 my-4 py-4'>{heading}</h3>
    </div>
  )
}

export default SectionTitle
