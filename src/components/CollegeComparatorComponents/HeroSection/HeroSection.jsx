import React from 'react'
import ComparatorMenu from './InnerComponents/ComparatorMenu'

const HeroSection = ({collegeSelectorData,setCollegeSelectorData}) => {
  return (
    <div className='w-full bg-[#EE7C00] h-[500px] mob:h-[450px]'>
      <div className='w-full pt-14 mob:pt-8 h-full'>
        <div className='w-[90%] mx-auto flex mob:flex-col-reverse items-center justify-between transition-all duration-500'>
          <div className='w-[600px] mob:w-[300px] mob:text-center'>
              <div className='text-4xl mob:text-2xl font-bold text-white mb-6 mob:mb-3'>
                College Comparator Tool
              </div>
              <div className='text-white text-lg mob:text-sm'>
                Lorem ipsum dolor sit amet consectetur. Convallis habitant sit pellentesque quis risus pulvinar in mauris. 
              </div>
          </div>
          <div>
            <img 
              src="/collegeComparator-illustration.svg" 
              alt="illustration"
              className='mob:w-[150px] mob:h-[150px]'
            />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center m-auto">
        <ComparatorMenu collegeSelectorData={collegeSelectorData} setCollegeSelectorData={setCollegeSelectorData}/>
      </div>
    </div>
  )
}

export default HeroSection
