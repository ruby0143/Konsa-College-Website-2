import React from 'react'

const CollegeContainer = ({collegeName, collegeLogo, collegeBanner}) => {
  return (
    <div className='min-w-[210px] h-[164px] shadow-md rounded-md border border-gray-100 bg-white'>
        <div className='relative w-full h-[108px] rounded-t-md flex items-end justify-center' >
            <div className={`absolute w-full h-[108px] brightness-50`} >
              <img src={collegeBanner} alt="College Banner" className='w-[210px] h-[108px]'/>
            </div>
            <div className='bg-white rounded-full z-10 mb-2' >
              <img src={collegeLogo} alt="College Logo"/>
            </div>
        </div>
        <div className='h-[64px] flex items-center justify-center' >
            <div className='text-sm text-center' >
              {collegeName}
            </div>
        </div>
    </div>
  )
}

export default CollegeContainer
