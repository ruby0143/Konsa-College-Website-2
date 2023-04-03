import React from 'react'
import ComparatorMenu from './InnerComponents/ComparatorMenu'

const HeroSection = () => {
  return (
    <div className='w-full bg-[#EE7C00] h-[450px]'>
      <div className='w-full h-[450px]'>
        <div className='w-[90%] mx-auto flex items-center justify-between pt-16  transition-all duration-500'>
          <div className='w-[600px]'>
              <div className='text-4xl font-bold text-white mb-6'>
                College Comparator Tool
              </div>
              <div className='text-white text-lg'>
                Lorem ipsum dolor sit amet consectetur. Convallis habitant sit pellentesque quis risus pulvinar in mauris. 
              </div>
          </div>
          <div>
            <img src="/collegeComparator-illustration.svg" alt="illustration"/>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center m-auto">
        <ComparatorMenu/>
      </div>
    </div>
  )
}

export default HeroSection
