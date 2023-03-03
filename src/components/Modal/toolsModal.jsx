import React from 'react'

const ToolsModal = ({children}) => {
  return (
    <div 
        className='fixed top-0 left-0 w-full h-full bg-[#00000080] z-[999]'
    >
      <div 
        className='fixed rounded-sm top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-12 mob:p-6 overflow-auto z-[1000] w-[60rem] mob:w-[90%] h-[44rem] mob:h-[90%]'
      >
        {children}
      </div>
    </div>
  )
}

export default ToolsModal
