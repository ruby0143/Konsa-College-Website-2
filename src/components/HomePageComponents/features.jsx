import React from 'react'
import CollegeCounselling from './collegeCounselling'
import Colleges from './colleges'
import Exams from './exams'

const FeaturesOffered = () => {
  return (
    <div className='w-full mt-12 px-4'>
      <CollegeCounselling/>
      <Exams/>
      <Colleges/>
    </div>
  )
}

export default FeaturesOffered