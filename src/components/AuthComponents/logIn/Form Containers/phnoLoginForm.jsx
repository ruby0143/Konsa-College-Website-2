import React, { useState } from 'react'
import { useFormik } from 'formik';
import { phnoLoginSchema } from '../../../../schemas/authValidationSchema';

// auth imports
import { RecaptchaVerifier, signInWithPhoneNumber } from '@firebase/auth';
import { auth } from '../../../../config/auth/firebaseauth';

const PhnoLoginForm = ({setIsPhnoLogin, setIsModalOpen}) => {
    
    const [otpComponent, setOtpComponent] = useState(true)
    const [inputOtp, setInputOtp] = useState("")
    const initialValues = {
        phoneNumber: "+91",
    }
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : phnoLoginSchema,
  
        onSubmit : async (values, action) => {
          // firebase auth func for signIn user
          console.log("phnoValues: ",values);
          if(values.phoneNumber.length >= 12){
            
            window.recaptchaVerifier = new RecaptchaVerifier("captcha-verify-container",{
              'size': 'visible',
              'callback': (response) => {
                
              }
            }, auth)
            
            await signInWithPhoneNumber(auth, values.phoneNumber, window.recaptchaVerifier)
            .then(confirmationResult => {
              window.confirmationResult = confirmationResult
            }).catch(err => console.log(err))
            
            setOtpComponent(true)
          }
          
          action.resetForm();
        },
      })    
      
      const handleVerifyOTP = (e) =>{
        e.preventDefault()
        if(inputOtp.length === 6){
          let confirmationResult = window.confirmationResult
          confirmationResult.confirm(inputOtp).then((result) => {
            const user = result.user;
            console.log("otp login user: ",user);
          }).catch(err => console.log("OTP SignIn error: ",err))  
        }
        setIsModalOpen(false)
    }

  return (
    <>
    {!otpComponent ? (
      <form 
        className={`w-[32rem] mob:w-full h-[330px] flex flex-col items-center justify-evenly`}
        onSubmit={handleSubmit}
        >
          <div className='w-full flex flex-col item-center'>
            <div className='w-full flex items-center border-b border-gray-400'>
              <div className='w-[5%] h-[45px] flex item-center justify-center'>
                  <img src="/IndiaFlag.svg" alt="country flag" className='w-[25px] h-[45px]'/>
              </div>
              <input
                className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide focus:outline-none focus:text-black w-[95%] h-[45px] py-4 px-3`}
                type="text"
                placeholder="+91 Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {(errors.phoneNumber && touched.phoneNumber) ? <div className='text-sm text-red-500'>{errors.phoneNumber}</div> : null}
            <div id='captcha-verify-container'></div>
          </div>
          <div className='w-full'>
            <button 
              type='submit'
              className='bg-[#EE7C00] py-2 w-full shadow-md rounded-md text-lg text-white font-medium'
              >
                Get OTP
            </button>
            <button 
              type='button'
              onClick={()=>setIsPhnoLogin(false)}
              className='bg-white py-2 w-full shadow-md rounded-md text-lg text-[#EE7C00] font-medium mt-3 border border-[#EE7C00]'
            >
                Login With Email
            </button>
          </div> 
     </form>
    ) : (
      <form 
        className={`w-[32rem] mob:w-full h-[330px] flex flex-col items-center justify-evenly`}
        onSubmit={handleVerifyOTP}
      >
        <div className='w-full flex flex-col item-center'>
              <input
                max={6}
                min={6}
                required
                type="text"
                name="phoneNumber"
                value={inputOtp}
                placeholder="Enter OTP"
                onChange={e=>setInputOtp(e.target.value)}
                className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide focus:outline-none focus:text-black w-full h-[45px] py-4 px-3 border-b border-gray-400`}
              />
            <div className='text-sm text-red-500 mt-1'>Enter OTP that has been sent to your Mobile Number</div>
          </div>
          <button 
              type='submit'
              className='bg-[#EE7C00] py-2 w-full shadow-md rounded-md text-lg text-white font-medium'
          >
                Continue
          </button>
      </form>
    )}
    </>
  )
}

export default PhnoLoginForm
