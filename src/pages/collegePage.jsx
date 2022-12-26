import React from 'react'
import CollegeReview from '../components/ParticularCollege/CollegeReview'
// import CollegeFooter  from '../components/ParticularCollege/CollegeFooter'
import Connectivity  from '../components/ParticularCollege/Connectivity'
import FeeStructure  from '../components/ParticularCollege/FeeStructure'
import Scholarship  from '../components/ParticularCollege/Scholarship'
import AboutCollege from '../components/ParticularCollege/AboutCollege'
import Cutoff from '../components/ParticularCollege/Cutoff'
import Placements from '../components/ParticularCollege/Placements'

const CollegePage = () => {
  return (
    <>
    <div className='bg-[#F5F5F5]'>
    <Connectivity/>
    <FeeStructure/>
    <Scholarship/>
    <AboutCollege/>
    <Cutoff/>
    <Placements/>
    <CollegeReview/>
    {/* <CollegeFooter/> */}
    </div>
    </>
  )
}

export default CollegePage