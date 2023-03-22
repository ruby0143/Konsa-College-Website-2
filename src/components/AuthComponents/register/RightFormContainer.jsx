import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const RightFormContainer = ({setIsModalOpen,setIsLoginState}) => {
  return (
    <div className='w-[70%] h-full lg:rounded-l-3xl bg-white p-10 flex justify-center items-center'>
      <div className='w-full h-full flex flex-col items-center justify-between'>
        <div className='w-full flex justify-end' onClick={()=>setIsModalOpen(false)}>
          <AiOutlineClose
            className='cursor-pointer'
            onClick={()=>setIsModalOpen(false)}
          />
        </div>
        <div className='text-3xl text-center font-semibold'>
          Create Account
        </div>
        <form className="w-[32rem] flex flex-col items-center gap-14">
          <div className='w-full flex flex-col item-center gap-6'>
            <div  
              className="relative flex mt-[8px] justify-betweeb h-[40px] items-center w-full" 
              >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide focus:outline-none focus:border-[#ee7c00] focus:text-[#EE7C00] border-b border-gray-300 w-full h-full py-4 px-2`}
                  type="text"
                  placeholder="Enter Full Name"
                />
            </div>
            <div  
              className="relative flex mt-[8px] justify-betweeb h-[40px] items-center w-full" 
            >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide focus:outline-none focus:border-[#ee7c00] focus:text-[#EE7C00] border-b border-gray-300 w-full h-full py-4 px-2`}
                  type="email"
                  placeholder="Enter Email"
                  />
            </div>
            <div  
              className="relative flex mt-[8px] justify-betweeb h-[40px] items-center w-full" 
            >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide focus:outline-none focus:border-[#ee7c00] focus:text-[#EE7C00] border-b border-gray-300 w-full h-full py-4 px-2`}
                  type="tel"
                  placeholder="+91  Phone Number"
                  />
            </div>
            <div  
              className="relative flex mt-[8px] justify-betweeb h-[40px] items-center w-full" 
              >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide focus:outline-none focus:border-[#ee7c00] focus:text-[#EE7C00] border-b border-gray-300 w-full h-full py-4 px-2`}
                  type="password"
                  placeholder="Enter Password"
                  />
            </div>
          </div>
          <button 
            className='bg-[#EE7C00] py-1 px-28 rounded-md text-lg text-white font-medium'
          >
              Create Account
          </button>
        </form>

        <div className='flex justify-center items-center gap-3'>
          <div className='w-4 h-[3px] bg-[#838383] rounded-sm'></div>
          <div className='text-[#838383] font-medium text-xl'>OR</div>
          <div className='w-4 h-[3px] bg-[#838383] rounded-sm'></div>
        </div>
        <div className='flex justify-evenly w-full'>
          <button className='bg-[#1877F2] text-white shadow-md rounded-md py-2 px-10 flex gap-4 justify-center items-center font-medium active:shadow-none border border-slate-100'>
            <div>
              <img src="/Facebook Logo.svg" className='w-[1.2rem]' alt=""/>  
            </div>
            <div>
              Sign In With Facebook
            </div>
          </button>
          <button className='shadow-md rounded-md py-2 px-10 flex gap-4 justify-center items-center font-medium active:shadow-none border border-slate-100'>
            <div>
              <img src="/Google Logo.svg" className='w-[1.2rem]' alt=""/>  
            </div>
            <div>
              Sign In With Google
            </div>
          </button>
        </div>
        <div className='text-lg font-medium'>
          <span>
            Already have an Account? 
          </span>
          <button 
            onClick={()=>setIsLoginState(true)}
            className='text-[#EE7C00] ml-2 cursor-pointer hover:underline'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightFormContainer
