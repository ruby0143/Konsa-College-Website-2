import React, { useContext } from 'react'
import { useFormik } from 'formik'

// auth config
import { auth } from '../../../../config/auth/firebaseauth'
import { AuthCheck } from '../../../../Context/authContext'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { logInSchema } from '../../../../schemas/authValidationSchema'

const EmailLoginForm = ({setIsPhnoLogin, setIsModalOpen}) => {

    const {setIsLoggedIn} = useContext(AuthCheck)
    const initialValues = {
      email : "",
      password : ""
    }
    
    // submit function for email/password authentication
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues : initialValues,
      validationSchema : logInSchema,

      onSubmit : async (values, action) => {
        // firebase auth func for signIn user
        await signInWithEmailAndPassword(auth, values.email, values.password).then((data) => console.log("signIn data: ", data.user)
        ).catch(err => console.log("signIn error: ", err))
  
        action.resetForm();
        setIsLoggedIn(true)
        setIsModalOpen(false)
      },

    })

  return (
    <form 
        className={`w-[32rem] h-[330px] flex flex-col items-center justify-evenly`}
        onSubmit={handleSubmit}
    >
     <div className='w-full flex flex-col item-center gap-2'>
            <div  
              className="relative flex flex-col w-full" 
            >
              <div className='w-full'>
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
              <div className='text-[#838383] cursor-pointer mt-1 self-end hover:underline text-sm'>
                Forgot Email?
              </div>
            </div>
            <div  
              className="relative flex flex-col w-full" 
            >
              <div className='w-full'>
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
              <div className='text-[#838383] cursor-pointer mt-1 self-end hover:underline text-sm'>
                Forget Password?
              </div>
            </div>
          </div>
          <div className='w-full mt-4   '>
            <button 
              type='submit'
              className='bg-[#EE7C00] py-2 w-full shadow-md rounded-md text-lg text-white font-medium'
            >
                Login
            </button>
            <button 
              type='button'
              onClick={()=>setIsPhnoLogin(true)}
              className='bg-white py-2 w-full shadow-md rounded-md text-lg text-[#EE7C00] font-medium mt-3 border border-[#EE7C00]'
            >
                Login With Mobile No.
            </button>
          </div> 
    </form>
  )
}

export default EmailLoginForm
