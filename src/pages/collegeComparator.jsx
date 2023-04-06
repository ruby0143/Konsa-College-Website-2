import React, { useState } from 'react'
import HeroSection from '../components/CollegeComparatorComponents/HeroSection/HeroSection'
import ComparatorSection from '../components/CollegeComparatorComponents/ComparatorSection/ComparatorSection'

const CollegeComparator = () => {

  const [collegeSelectorData, setCollegeSelectorData] = useState({})
  const [showComparedData, setShowComparedData] = useState(false)

  return (
    <div className='bg-white w-full'>
      <HeroSection collegeSelectorData={collegeSelectorData} setCollegeSelectorData={setCollegeSelectorData} setShowComparedData={setShowComparedData}/>
      <ComparatorSection collegeSelectorData={collegeSelectorData} showComparedData={showComparedData} setShowComparedData={setShowComparedData}/>
    </div>
  )
}

export default CollegeComparator
