import React from 'react'
import { Link } from 'react-router-dom'

const Err_404 = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <div className='flex flex-col items-center max-w-[70%]'>
            <div className='text-4xl font-bold mb-4'>Ooops...</div>
            <div className='text-4xl mb-8'>Page Not Found</div>
            <div className='mb-8 text-center'>
                <div className='md:text-xl'>We're sorry, the page you requested could not be found <br/> Please go back to home page</div>    
            </div>
            <button className='w-[180px] md:w-[240px] rounded-full bg-[#EE7C00] md:text-3xl text-white py-1 md:py-2 mb-10'>
                <Link to="/" >
                    Go Home
                </Link>
            </button>
            <img src="/err_404.png" alt="404 image" />
        </div>
    </div>
  )
}

export default Err_404
