import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useFormik } from 'formik'
import { signUpSchema } from '../../../schemas/authValidationSchema'


// auth config
import { auth, googleProvider } from '../../../config/auth/firebaseauth'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const RightFormContainer = ({setIsModalOpen,setIsLoginState}) => {

  // const [isVerifiedEmail, setIsVerifiedEmail] = useState(false);
  const initialValues = {
    fullName : "",
    email : "",
    phoneNumber : "",
    password : "",
    confirmPassword : "",
  }

      
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues : initialValues,
    validationSchema : signUpSchema,
    
    onSubmit : async (values,action) => {
      // firebase auth func for creating user
      await createUserWithEmailAndPassword(auth, values.email, values.password).then(
        (data) => console.log("User Signed In using email/password")
        ).catch(err => console.log("signUp error : ", err))
        
        action.resetForm();
        // setIsLoginState(true)
        setIsModalOpen(false)
      },
  }) 

  // google auth 
  const handleGoogleSignIn = async () => {
    // google auth popup
    await signInWithPopup(auth, googleProvider).
    then(data => {
        console.log("User LoggedIn using google");
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
          Create Account
        </div>
        <form 
          className="w-[32rem] flex flex-col items-center gap-14"
          onSubmit={handleSubmit}
        >
          <div className='w-full flex flex-col item-center gap-3'>
            <div  
              className="relative flex flex-col w-full" 
            >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide border-b focus:outline-none focus:border-gray-900 focus:text-black w-full h-[40px] py-4 px-2 transition-all duration-500`}
                  type="text"
                  name='fullName'
                  placeholder="Enter Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(errors.fullName && touched.fullName) ? <div className='px-2 text-sm text-red-500'>{errors.fullName}</div> : null}
            </div>
            <div  
              className="relative flex flex-col w-full" 
            >
              <div className='flex w-full items-end justify-between' >
                  <input
                    className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide border-b focus:outline-none focus:border-gray-900 focus:text-black ${!errors.email && touched.email ? "w-[80%]" : "w-full"} h-[40px] py-4 px-2 transition-all duration-500`}
                    type="email"
                    name='email'
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={(e)=>{
                      handleChange(e);
                      // handleEmailVerification(e.target.value)
                    }}
                    onBlur={handleBlur}
                  />
                  <button
                    className={`bg-[#EE7C00] text-sm text-white ml-1 h-[35px] ${!errors.email && touched.email ? "w-[18%]" : "w-0"} rounded-sm transition-all duration-500`}
                  >
                    {!errors.email && touched.email && "Verify Email"}
                  </button>
                </div>
                {(errors.email && touched.email) ? <div className='px-2 text-sm text-red-500'>{errors.email}</div> : null}
            </div>
            <div    
              className="relative flex flex-col w-full" 
            >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide border-b focus:outline-none focus:border-gray-900 focus:text-black w-full h-[40px] py-4 px-2 transition-all duration-500`}
                  type="number"
                  name='phoneNumber'
                  placeholder="+91  Phone Number"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(errors.phoneNumber && touched.phoneNumber) ? <div className='px-2 text-sm text-red-500'>{errors.phoneNumber}</div> : null}
            </div>
            <div  
              className="relative flex flex-col w-full" 
            >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide border-b focus:outline-none focus:border-gray-900 focus:text-black w-full h-[40px] py-4 px-2 transition-all duration-500`}
                  type="password"
                  name='password'
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(errors.password && touched.password) ? <div className='px-2 text-sm text-red-500'>{errors.password}</div> : null}
            </div>
            <div  
              className="relative flex mt-[8px] flex-col w-full" 
              >
                <input
                  className={`bg-[#FFFFFF] text-[#ACACAC] mob:text-xs tracking-wide border-b focus:outline-none focus:border-gray-900 focus:text-black border-gray-300 w-[full] h-[40px] py-4 px-2 transition-all duration-500`}
                  type="password"
                  name='confirmPassword'
                  placeholder="Confirm Entered Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(errors.confirmPassword && touched.confirmPassword) ? <div className='px-2 text-sm text-red-500'>{errors.confirmPassword}</div> : null}
            </div>
          </div>
          <button   
            type='submit'
            className='bg-[#EE7C00] py-2 w-full shadow-md rounded-md text-lg text-white font-medium'
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
          <button className='bg-[#1877F2] text-white shadow-md rounded-md py-2 px-10 flex gap-4 justify-center items-center font-medium border border-slate-100'>
            <div>
              <img src="/Facebook Logo.svg" className='w-[1.2rem]' alt=""/>  
            </div>
            <div>
              Sign In With Facebook
            </div>
          </button>
          <button 
            onClick={handleGoogleSignIn}
            className='shadow-md rounded-md py-2 px-10 flex gap-4 justify-center items-center font-medium border border-slate-100'
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
