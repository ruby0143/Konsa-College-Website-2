import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CollegeSelectContainer = () => {

    const [searchTerm, setSearchTerm] = useState("")  
    const [searchResults, setSearchResuts] = useState([])
    
    useEffect(()=>{
        if(!searchTerm){
            setSearchResuts([])
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
        .then(res => console.log("college data: ", res.data))
        .catch(err => console.log("errr: ",err))
}
  
  return (
    <div className='h-full relative w-[430px] p-6 border'>
        <div className=''>
            
        </div>
        <div className='relative'>    
            <div className='flex items-center justify-center w-full rounded-sm bg-white'>
                <input 
                    id="searchbar"
                    type='search'
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value,500)}
                    placeholder='Search College' 
                    className={`px-2 outline-none border focus:border-[#EE7C00] rounded-sm leading-8 w-full text-gray-500`} 
                />
            </div>
            <div className={` ${searchTerm !== "" && searchResults.length !== 0 ? "inline-flex" : "hidden"} z-10 absolute flex-col bg-white overflow-x-hidden overflow-y-scroll max-h-[300px] shadow-md transition-all duration-500 w-full`}>
                {
                    searchResults.map((college,index)=>{
                        return <div 
                                    key={index} 
                                    className="text-gray-600 md:cursor-pointer font-base text-sm px-2 py-1 shadow-sm hover:bg-slate-100"
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
