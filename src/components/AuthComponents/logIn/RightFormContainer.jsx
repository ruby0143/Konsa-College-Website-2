import React, { useContext, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useFormik } from 'formik'
import { logInSchema } from '../../../schemas/authValidationSchema'

// auth config
import { auth, provider } from '../../../config/auth/firebaseauth'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const RightFormContainer = ({setIsModalOpen,setIsLoginState}) => {

  const initialValues = {
    email : "",
    password : ""
  }

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues : initialValues,
    validationSchema : logInSchema,
    onSubmit : async (values, action) => {

      // firebase auth func for signIn user
      await signInWithEmailAndPassword(auth, values.email, values.password).then((data) => console.log("signUp data: ", data.user)
      ).catch(err => console.log("signIn error: ", err))

      action.resetForm();
      setIsModalOpen(false)
    },
  })

  // google auth 
  const handleGoogleSignIn = async () => {
    // google auth popup
    await signInWithPopup(auth, provider).
    then(data => {
        console.log("User LoggedIn");
      }
    ).catch(err => console.log("signIn with google auth err: ",err)) 
    
    setIsModalOpen(false)
  }

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
          Login to Your Account
        </div>
        <form 
          className="w-[32rem] flex flex-col items-center gap-16"
          onSubmit={handleSubmit}
        >
          <div className='w-full flex flex-col item-center gap-6'>
            <div  
              className="relative flex flex-col w-full" 
            >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide border-b focus:outline-none focus:border-gray-900 focus:text-black w-full h-[40px] py-4 px-2`}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(errors.email && touched.email) ? <div className='px-2 text-sm text-red-500'>{errors.email}</div> : null}
            </div>
            <div  
              className="relative flex flex-col w-full" 
              >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide border-b focus:outline-none focus:border-gray-900 focus:text-black w-full h-[40px] py-4 px-2`}
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(errors.password && touched.password) ? <div className='px-2 text-sm text-red-500'>{errors.password}</div> : null}
            </div>
          </div>
          <button 
            type='submit'
            className='bg-[#EE7C00] py-1 shadow-md px-28 rounded-md text-lg text-white font-medium'
          >
              Login
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
          <button 
            onClick={handleGoogleSignIn}
            className='shadow-md rounded-md py-2 px-10 flex gap-4 justify-center items-center font-medium active:shadow-none border border-slate-100'
          >
            <div>
              <img src="/Google Logo.svg" className='w-[1.2rem]' alt=""/>  
            </div>
            <div>
              Sign In With Google
            </div>
          </button>
        </div>
        <div>
          <span>
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