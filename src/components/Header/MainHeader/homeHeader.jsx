// import axios from 'axios'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useCollegeDataStore from '../../../utils/AllCollegeData-Store'
import style from './home.module.css'

const HomeHeader = () => {
  
  const collegeDataList = useCollegeDataStore((state) => state.collegeDataList)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className='w-full'>

        <div className={` ${style.backgroundContainer} min-h-[270px] md:min-h-[450px] flex flex-col items-center justify-center w-full`}>
            <div className='text-2xl md:text-5xl md:inset-3 text-center font-semibold mb-[16px] text-white'>
                FIND BEST COLLEGES <span className='md:text-[#EE7C08]' >FOR YOURSELF</span>
            </div>    
            <div className='hidden md:inline-flex mb-[45px] text-white text-xl'>
                You can choose your college with us, Join our Counselling process to get our services.
            </div>
            <button className='bg-[#EE7C00] text-white md:text-2xl py-[6px] md:py-[10px] px-[20px] rounded-full md:rounded-md font-medium flex justify-center items-center' >
                Need Counselling
            </button>
        </div>

        <div className='flex items-center justify-center relative' >

            <div className='flex items-center shadow-md py-[8px] px-[16px] rounded-md absolute bg-white' >
                <FaSearch className='text-[#A7A7A7] ml-2 cursor-pointer text-lg' />
                <input 
                    type='search' 
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    placeholder='Search your Colleges, Exams, Counsellings, etc' className={`px-3 text-[13px] md:text-[1rem] lg:text-[1.1rem] outline-none border-none rounded-md leading-7 md:leading-9 lg:leading-10 w-[280px] md:w-[550px] lg:w-[750px]`} 
                />
            </div>

            <div className={` ${searchTerm !== "" ? "inline-flex" : "hidden"} w-[324px] md:w-[600px] lg:w-[780px] z-30 relative`}>
                <div className='absolute rounded-b-md max-h-[300px] w-full overflow-y-scroll overflow-x-hidden bg-white shadow-md mt-8 md:mt-10 transition-all duration-300'>
                    {
                        collegeDataList.filter(college => college.college_name.toLowerCase().includes(searchTerm.toLowerCase()) || college.college_uuid.toLowerCase().includes(searchTerm)).map((college,index)=>{
                            return <Link 
                                        key={index} 
                                        to={`/${college.college_uuid}`}
                                        className="text-gray-800 md:cursor-pointer block font-medium text-sm md:text-base px-6 py-2 shadow-sm hover:bg-slate-100"
                                    >
                                        {college.college_name}
                                    </Link>
                        })
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeHeader
