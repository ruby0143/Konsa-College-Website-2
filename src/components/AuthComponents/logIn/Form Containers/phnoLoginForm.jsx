import React from 'react'
import { useFormik } from 'formik';
import { phnoLoginSchema } from '../../../../schemas/authValidationSchema';

const PhnoLoginForm = ({setIsPhnoLogin, setIsModalOpen}) => {
    
    const initialValues = {
        phoneNumber: "",
    }
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : phnoLoginSchema,
  
        onSubmit : async (values, action) => {
          // firebase auth func for signIn user
          console.log("phnoValues: ",values);
    
          action.resetForm();
          setIsModalOpen(false)
        },
  
      })    

  return (
    <form 
        className={`w-[32rem] h-[330px] flex flex-col items-center justify-evenly`}
        onSubmit={handleSubmit}
    >
     <div className='w-full flex flex-col item-center'>
            <div  
              className="relative flex flex-col w-full" 
            >
              <div className='w-full flex items-center border-b border-gray-400'>
                <div className='w-[5%] h-[45px] flex item-center justify-center'>
                    <img src="/IndiaFlag.svg" alt="country flag"/>
                </div>
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide focus:outline-none focus:text-black w-[95%] h-[45px] py-4 px-3`}
                  type="number"
                  placeholder="+91 Phone Number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            {(errors.phoneNumber && touched.phoneNumber) ? <div className='text-sm text-red-500'>{errors.phoneNumber}</div> : null}
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
  )
}

export default PhnoLoginForm
