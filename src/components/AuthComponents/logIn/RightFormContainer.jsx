import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import PhnoLoginForm from './Form Containers/phnoLoginForm'
import EmailLoginForm from './Form Containers/emailLoginForm'

// auth config
import { auth, googleProvider } from '../../../config/auth/firebaseauth'
import { signInWithPopup } from 'firebase/auth'

const RightFormContainer = ({setIsModalOpen,setIsLoginState}) => {

  const [isPhnoLogin, setIsPhnoLogin] = useState(false);
  
  // google auth 
  const handleGoogleSignIn = async () => {
    // google auth popup
    await signInWithPopup(auth, googleProvider).
    then(data => {
        console.log("User LoggedIn");
      }
    ).catch(err => console.log("signIn with google auth err: ",err)) 
    
    setIsModalOpen(false)
  }

  return (
    <div className='md:w-[70%] mob:w-full h-full lg:rounded-l-3xl bg-white md:p-10 mob:p-4 flex justify-center items-center'>
      <div className='w-full h-full flex flex-col items-center justify-between'>
      <div className='w-full flex flex-col'>
          <div className='w-full flex justify-end' onClick={()=>setIsModalOpen(false)}>
            <AiOutlineClose
              className='cursor-pointer'
              onClick={()=>setIsModalOpen(false)}
            />
          </div>          
          <div className='text-3xl mob:text-2xl text-center font-semibold'>
            Login to your account
          </div>
        </div>
          {isPhnoLogin ? (
              <PhnoLoginForm setIsPhnoLogin={setIsPhnoLogin} setIsModalOpen={setIsModalOpen}/>
            ) : (
              <EmailLoginForm setIsPhnoLogin={setIsPhnoLogin} setIsModalOpen={setIsModalOpen}/>
          )}
        <div className='flex justify-center items-center gap-3'>
          <div className='w-4 h-[3px] mob:h-[1px] bg-[#838383] rounded-sm'></div>
          <div className='text-[#838383] font-medium text-xl mob:text-base'>OR</div>
          <div className='w-4 h-[3px] mob:h-[1px] bg-[#838383] rounded-sm'></div>
        </div>
        <div className='flex mob:flex-col justify-evenly mob:gap-2 w-full mob:w-[70%]'>
          <button 
            className='bg-[#1877F2] text-white mob:text-xs shadow-md rounded-md py-2 px-10 flex justify-center gap-4 items-center font-medium border border-slate-100'
          >
            <div>
              <img src="/Facebook Logo.svg" className='w-[1.2rem]' alt=""/>  
            </div>
            <div>
              Sign In With Facebook
            </div>
          </button>
          <button 
            onClick={handleGoogleSignIn}
            className='shadow-md rounded-md py-2 px-10 flex justify-center gap-4 items-center mob:text-xs font-medium border border-slate-100'
          >
            <div>
              <img src="/Google Logo.svg" className='w-[1.2rem]' alt=""/>  
            </div>
            <div>
              Sign In With Google
            </div>
          </button>
        </div>
        <div className='mob:text-sm'>
          <span className='mob:text-sm'>
            Don't have an Account? 
          </span>
          <button 
            onClick={()=>setIsLoginState(false)}
            className='text-[#EE7C00] ml-2 cursor-pointer hover:underline'
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightFormContainer