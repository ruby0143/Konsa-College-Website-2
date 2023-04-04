import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdHighlightOff, MdLocationOn } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
const CollegeSelectContainer = () => {

    const [searchTerm, setSearchTerm] = useState("")  
    const [searchResults, setSearchResuts] = useState([])
    const [selectedCollege, setSelectedCollege] = useState(null)


    useEffect(()=>{
        if(searchTerm === ""){
            setSearchResuts([])
            setSelectedCollege(null)
            return
        }
        
        (async () => {
            const url = 'https://konsa-college-backend.vercel.app/search'
            const {data} = await axios.get(url,{
                params : {
                term: searchTerm
            },
        })
        
        setSearchResuts(data)
    })()
    
    },[searchTerm])

    const fetchData = async (collegeUuid) => {
        setSearchResuts([])
        
        const collegeFetchUrl = "https://konsa-college-backend.vercel.app/college/";
        
        await axios.get(`${collegeFetchUrl}`+`${collegeUuid}`)
            .then(res => {setSelectedCollege(res.data)})
            .catch(err => console.log("errr: ",err))
    }
  
  return (
    <div className='h-full relative flex-grow p-6 mob:p-2 border-b'>
        {
            selectedCollege !== null && selectedCollege !== 0 ? (
                <div className='w-full flex flex-col items-center gap-2 mb-4 mob:mb-2 transition-all duration-500 h-[220px] mob:h-[160px]'>
                    <div className='w-full flex justify-end items-center'>
                        <MdHighlightOff 
                            className='text-[#EE7C00] cursor-pointer'
                            onClick={()=>setSearchTerm("")}
                        />
                    </div>
                    <div className='flex w-full flex-col gap-2 items-center justify-center'>
                        <img 
                            src={selectedCollege.college_logo_link} 
                            alt="college logo" 
                            className='w-[100px] mob:w-[50px] h-[100px] mob:h-[50px] object-cover'
                        />
                        <div className='text-[#232323] text-center text-lg mob:text-xs font-medium w-[150px] md:w-[230px] lg:w-[300px]'>
                            {selectedCollege.college_name}
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center gap-1'>
                        <MdLocationOn
                            className='text-[#bbbbbb]'
                        />
                        <div className='text-[#bbbbbb] mob:text-xs'>
                            {selectedCollege.college_location.split(", ")[selectedCollege.college_location.split(", ").length - 1]}
                        </div>
                    </div>
                </div>
            ) : null
        }
        {
            selectedCollege === null ? (
                <div className='h-[220px] mob:h-[160px] flex flex-col justify-center items-center mb-4 mob:mb-2'>
                    <div className='flex flex-col items-center justify-center p-6 mob:p-4 rounded-full border bg-[#dddddd]'>
                        <FaSchool className='w-[100px] mob:w-[50px] h-[100px] mob:h-[50px] text-[#ffffff]'/>
                    </div>
                    <div className='text-[#636363] text-center text-xl mob:text-lg font-medium'>
                        Search College
                    </div>
                </div>
            ) : null
        }
        {
            selectedCollege === 0 ? (
                <div className='h-[220px] mob:h-[160px] flex flex-col justify-center items-center mb-4'>
                    <span className='text-xl mob:text-base text-center text-[#bbbbbb]'>
                        No College data found
                    </span>
                </div>
            ) : null
        }
        <div className='relative w-full'>    
            <div className='flex items-center justify-center w-full rounded-sm bg-white'>
                <input 
                    id="searchbar"
                    type='search'
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    placeholder='Search College' 
                    className={`px-2 outline-none border border-slate-300 focus:border-[#EE7C00] rounded-sm leading-8 w-full text-gray-500 mob:text-base`} 
                />
            </div>
            <div className={` ${searchTerm !== "" && searchResults.length !== 0 ? "inline-flex" : "hidden"} z-10 absolute flex-col bg-white overflow-x-hidden overflow-y-scroll max-h-[300px] mob:max-h-[200px] shadow-md transition-all duration-500 w-full`}>
                {
                    searchResults.map((college,index)=>{
                        return <div 
                                    key={index} 
                                    className="text-gray-600 md:cursor-pointer font-base text-sm mob:text-xs px-2 py-1 shadow-sm hover:bg-slate-100"
                                    onClick={()=>fetchData(college.college_uuid)}
                                >
                                    {college.college_name}
                                </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CollegeSelectContainer
