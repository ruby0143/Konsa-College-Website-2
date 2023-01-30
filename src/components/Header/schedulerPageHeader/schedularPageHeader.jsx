import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SchedularPageHeader = () => {
  return (
    <div className='flex items-center flex-col py-4 bg-gradient-to-b from-[#fbe4ca] to-white' >
        <div className='text-2xl mb-2 font-semibold' >
            Scheduler
        </div>
        <div className='font-light mb-2 tracking-wider'>
            Don't Miss These Important Deadlines
        </div>
        <div className='flex items-center shadow-sm py-[8px] px-[12px] rounded-md bg-white w-[90%]' >
            <FaSearch className='text-[#EE7C00] ml-2 font-thin cursor-pointer text-lg'/>
            <input 
                type='search' 
                placeholder='Search' 
                className={`px-3 w-[70%] text-[14px] outline-none border-none rounded-md leading-6`} 
            />
        </div>
    </div>
  )
}

export default SchedularPageHeader
