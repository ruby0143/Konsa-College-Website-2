import React, { useEffect, useState } from 'react'
import CollegeSelectContainer from './CollegeSelectContainer'


const ComparatorMenu = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = () =>{
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize",handleResize)
    return () => {
      window.removeEventListener("resize",handleResize)
    }
  },[])
  
  return (
    <div className='z-10 bg-white rounded-sm shadow-md absolute w-[90%] mx-auto'>  
      <div className='flex w-full justify-between items-center'>
        {[...Array(windowWidth <= 600 ? 2 : 4).fill(null)].map((_,idx) => {
          return <CollegeSelectContainer key={idx}/>
        })}
      </div>
      <div className='bg-white px-[24px] mob:px-[8px] py-[24px] mob:py-[12px] w-full flex items-center justify-end mob:justify-center'>
        {<button className='py-2 mob:py-1 w-[356px] mob:w-full text-white font-medium bg-[#EE7C00] rounded-sm cursor-pointer'>
          Compare
        </button>}
      </div>
    </div>
  )
}

export default ComparatorMenu
