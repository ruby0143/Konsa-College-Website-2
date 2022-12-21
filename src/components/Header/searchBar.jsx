import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center h-[40px] md:h-[48px] lg:h-[52px] w-[84%] m-auto md:w-[600px] lg:w-[632px]" >
      <div className='flex bg-white h-[98%] justify-center items-center w-[100%] md:w-[80%]' >  
        <div className='px-2 bg-white h-[98%] flex justify-center items-center w-[10%] md:hidden' >
            <FaSearch className='text-[#FC7C57] cursor-pointer' />
        </div>  
        <input type="text" placeholder='Search for Colleges, Courses or Exams' className='w-[90%] shadow-md text-sm md:text-base md:w-[100%] md:pl-8 h-[98%] bg-white outline-none pr-2'/>
      </div>  
      <div className='md:flex items-center justify-center md:bg-[#cb2027] hover:bg-red-600 shadow-md md:cursor-pointer p-2 h-[98%] hidden md:w-[20%]' >
        <FaSearch className='text-white mr-2 ' />
        <div className='text-white' >
            Search
        </div>  
      </div>
    </div>
  )
}

export default SearchBar
