import React, { useState } from 'react'
import HeroSection from '../components/CollegeComparatorComponents/HeroSection/HeroSection'
import ComparatorSection from '../components/CollegeComparatorComponents/ComparatorSection/ComparatorSection'

const CollegeComparator = () => {

  const [collegeSelectorData, setCollegeSelectorData] = useState(null)

  console.log("College Selector Data Array: ", collegeSelectorData);

  return (
    <div className='bg-white w-full h-[100vh]'>
      <HeroSection collegeSelectorData={collegeSelectorData} setCollegeSelectorData={setCollegeSelectorData}/>
      <ComparatorSection/>
    </div>
  )
}

export default CollegeComparator
