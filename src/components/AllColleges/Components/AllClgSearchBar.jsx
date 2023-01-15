import React from 'react'

const AllClgSearchBar = () => {
  return (
    <div className='w-[full] bg-[#EFEFEF] h-[30vh] flex flex-col justify-center items-center p-3'>
    <div className='text-xl md:text-2xl font-semibold text-gray-700 font-roboto'>Explore From 200+ Colleges.....</div>
    
    <div className='w-[90%] md:w-[60%] lg:w-[45%]  flex flex-row justify-between items-center bg-white rounded-xl p-4 md:px-6 mt-3'>
        <input className='placeholder:text-xl w-[80%] font-roboto focus:outline-none text-gray-600 text-xl'
        placeholder="Search your Colleges....."></input>
        <span><img className='w-[23px] h-[23px]'
        src="/public/Vector.png"></img></span>
    </div>
    </div>
  
  )
}

export default AllClgSearchBar