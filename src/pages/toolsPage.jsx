import React from 'react'
import ToolsHead from '../components/toolsPage/toolsHead'
import ToolBody from '../components/toolsPage/toolBody'
import RightSection from '../components/ParticularCollege/RightSection'
const ToolsPage = () => {
  return (
    <div>
      <ToolsHead />
      <div className='flex w-full'>  
        <div className='w-full md:w-[74%] bg-white px-4 md:px-8'>
          <ToolBody />
        </div>
        <div className='hidden md:inline-flex md:w-[26%] bg-white px-8'>
          <RightSection/>
        </div>
      </div>
    </div>
  )
}

export default ToolsPage    