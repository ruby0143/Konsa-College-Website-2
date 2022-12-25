import React from 'react'
import CollegeReview from '../components/ParticularCollege/CollegeReview'
import Connectivity  from '../components/ParticularCollege/Connectivity'
import FeeStructure  from '../components/ParticularCollege/FeeStructure'
import Scholarship  from '../components/ParticularCollege/Scholarship'


const CollegePage = () => {
  return (
    <>
    <div className='bg-[#F5F5F5]'>
  
    <Connectivity/>
    <FeeStructure/>
    <Scholarship/>
    <CollegeReview/>
   
    </div>

    </>
  )
}

export default CollegePage