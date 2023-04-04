import React from 'react'
import CollegeSelectContainer from './CollegeSelectContainer'

const ComparatorMenu = () => {
  return (
    <div className='z-10 bg-white rounded-sm shadow-md absolute'>  
      <div className='flex justify-between items-center'>
        {[...Array(4).fill(null)].map((_,idx) => {
          return <CollegeSelectContainer key={idx}/>
        })}
      </div>
      <div className='bg-white px-[24px] py-[24px] w-full flex items-center justify-end'>
        {<button className='py-2 text-white font-medium w-[380px] bg-[#EE7C00] rounded-sm cursor-pointer'>
          Compare
        </button>}
      </div>
    </div>
  )
}

export default ComparatorMenu
