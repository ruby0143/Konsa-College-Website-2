import React from 'react'
import CollegeReview from '../components/ParticularCollege/CollegeReview'
import { useLocation, useParams } from 'react-router-dom'
import Connectivity  from '../components/ParticularCollege/Connectivity'
import FeeStructure  from '../components/ParticularCollege/FeeStructure'
import Scholarship  from '../components/ParticularCollege/Scholarship'
import AboutCollege from '../components/ParticularCollege/AboutCollege'
import Cutoff from '../components/ParticularCollege/Cutoff'
import Placements from '../components/ParticularCollege/Placements'
import CollegePageHeader from '../components/Header/collegePageHeader/collegePageHeader'

const CollegePage = () => {
   const {college}=useParams()
    const data = useLocation()
    const query = useLocation().search
    const path = useLocation().pathname
    const name = new URLSearchParams(query).get('name')
    console.log(data,query,path,name)
  return (
    <>
    <div className='bg-[#F5F5F5]'>
      <CollegePageHeader/>
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