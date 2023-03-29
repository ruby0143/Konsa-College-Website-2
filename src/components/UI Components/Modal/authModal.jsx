import React from 'react'

const AuthModal = ({children}) => {
  return (
    <div 
        className='fixed top-0 left-0 w-full h-full bg-[#00000080] z-[999]'
    >
      <div 
        className='fixed md:rounded-sm top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EE7C00] z-[1000] md:w-[75rem] mob:w-[100%] md:h-[45rem] mob:h-[100%]'
      >
        {children}
      </div>
    </div>
  )
}

export default AuthModal
