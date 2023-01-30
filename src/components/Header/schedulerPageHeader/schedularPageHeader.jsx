import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SchedularPageHeader = () => {
  return (
    <div className='flex items-center flex-col py-4 md:py-8 bg-gradient-to-b from-[#fbe4ca] to-white' >
        <div className='text-[#343434] text-2xl md:text-4xl mb-4 md:mb-8 font-medium md:font-semibold' >
            Scheduler
        </div>
        <div className='mb-3 md:mb-6 tracking-wider md:text-2xl '>
            Don't Miss These Important Deadlines
        </div>
        <div className='mb-4 flex items-center shadow-sm md:shadow-md py-[8px] px-[16px] rounded-md bg-white' >
                <input 
                    type='search' 
                    placeholder='Search' 
                    className={`px-3 text-[13px] md:text-[1rem] lg:text-[1.1rem] outline-none border-none rounded-md leading-7 md:leading-9 lg:leading-10 w-[290px] md:w-[550px] lg:w-[750px]`} 
                />
                <FaSearch className='text-[#EE7C00] ml-2 cursor-pointer text-lg'/>
            </div>
    </div>
  )
}

export default SchedularPageHeader
