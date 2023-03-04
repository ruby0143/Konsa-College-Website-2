import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import RecommendedExamsContainer from '../components/ExamRecommendation/recommendedExams'
import ToolsModal from '../components/Modal/toolsModal'

const ExamRecommender = () => {

  const apiRecommendedExamData = useRef({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedState, setSelectedState] = useState("")
  // const [userName, setUserName] = useState("")
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
  const locations = [
     {
        "name":"All India"
     },
     {
        "name":"Andhra Pradesh"
     },
     {
        "name":"Arunachal Pradesh"
     },
     {
        "name":"Assam"
     },
     {
        "name":"Bihar"
     },
     {
        "name":"Chhattisgarh"
     },
     {
        "name":"Delhi"
     },
     {
        "name":"Goa"
     },
     {
        "name":"Gujarat"
     },
     {
        "name":"Haryana"
     },
     {
        "name":"Himachal Pradesh"
     },
     {
        "name":"Jharkhand"
     },
     {
        "name":"Karnataka"
     },
     {
        "name":"Kerala"
     },
     {
        "name":"Madhya Pradesh"
     },
     {
        "name":"Maharashtra"
     },
     {
        "name":"Manipur"
     },
     {
        "name":"Meghalaya"
     },
     {
        "name":"Mizoram"
     },
     {
        "name":"Nagaland"
     },
     {
        "name":"Odisha"
     },
     {
        "name":"Punjab"
     },
     {
        "name":"Rajasthan"
     },
     {
        "name":"Sikkim"
     },
     {
        "name":"Tamil Nadu"
     },
     {
        "name":"Telangana"
     },
     {
        "name":"Tripura"
     },
     {
        "name":"Uttar Pradesh"
     },
     {
        "name":"Uttarakhand"
     },
     {
        "name":"West Bengal"
     }
  ]
  
    const handleFormSubmit = () => {
      if(selectedState !== ""){
        ( async () => {
          const url = "https://konsa-college-backend.vercel.app/recommendedExams";
          const {data} = await axios.get(url,{
            params : {
              location: selectedState
            },
          })
          apiRecommendedExamData.current = data 
          setIsModalOpen(true)
          setSelectedState("");
        })()
      }
    }

        return (
        <>
        {
          isModalOpen && apiRecommendedExamData.current !== [] && <ToolsModal>
            <RecommendedExamsContainer recommendedExams={apiRecommendedExamData.current} setIsModalOpen={setIsModalOpen}/>
          </ToolsModal>
        }

        <div className="bg-[#F5F5F5]">
          <h2 className="pt-[80px] mob:pt-[18px] font-roboto font-bold mob:font-semibold text-[30px] mob:text-[18px] text-[#3C3B3B] text-center tracking-wider">
            Exam Recommendation
          </h2>
          <h3 className="pt-[20px] mob:pt-[8px] font-roboto font-bold mob:font-semibold text-[22px] mob:text-[17px] text-[#3C3B3B] text-center tracking-wider">
            JEE Mains 2023
          </h3>
          <div className=" flex justify-center mb-[60px] mob:mb-[40px]">
            <p className="text-center w-[80%]  mt-[20px] mob:mt-[8px] text-xl mob:text-base mob:font-light text-[#3C3B3B] desk:leading-6 mob:leading-5 desk:tracking-wider">
              Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus
              pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut
              porttitor tellus imperdiet. Id nunc turpis donec aliquam .
            </p>
          </div>
          <div className="flex justify-center bg-[url('/cpbg.svg')] desk:bg-cover  mob:bg-cover mob:bg-no-repeat mob:bg-bottom">
            <div
              className="desk:w-[60%] mob:w-[80%] desk:h-[450px] bg-[#FFFFFF] flex desk:flex-row mob:flex-col mb-[80px] mob:mb-[150px]"
              style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
              >
              <form 
                onSubmit={handleSubmit(handleFormSubmit)}
                className="desk:w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain bg-no-repeat"
              >
                <h4 className="mt-[22px] mob:mt-[11px] text-center font-bold text-sm mob:font-medium">
                  Enter Your Details
                </h4>
                
                {/* NAME */}
                <h6 className="mt-[35px] mob:mt-[20px] mob:text-[13px]">Your Name</h6>
                <div  
                  className="relative flex mt-[8px] justify-betweeb h-[34px] items-center w-full rounded-[2px]" 
                  >
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    // onChange={e=>setUserName(e.target.value)}
                    {...register("name", { required: "name field is required" })} 
                    className={`rounded-[2px] bg-[#FFFFFF] text-[#ACACAC] text-sm mob:text-xs tracking-wide focus:outline-none border ${errors.name ? "border-red-500" : "border-gray-300"} w-full h-full p-[6px]`}
                    />
                </div>
    
                {errors.name && <div 
                  className='text-sm text-red-500 mt-1'
                >
                  {errors.name.message}
                </div>}

                {/* STATE */}
                <h6 className="mt-[26px] mob:text-[13px] mob:mt-[18px] mb-2">State of Eligibilty</h6>

                <select 
                  className={`w-full rounded-[2px] px-1 h-[35px] text-[#ACACAC] text-sm bg-[#ffffff] cursor-pointer focus:outline-none border ${errors.state ? "border-red-500" : "border-gray-300"}`}
                  {...register("state",{required: "State field is required"})}
                  onChange={e=>setSelectedState(e.target.value)}
                >
                  <option value="" className='text-[#ACACAC]'>-- Enter Your State --</option>
                  {
                    locations.map((state,idx)=>{
                      return (
                        <option 
                          key={idx} 
                          className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer"
                        >
                          {state.name}
                        </option>
                      )
                    })
                  }
                </select>
    
                {errors.state && <div 
                  className='text-sm text-red-500 mt-1'
                >
                  {errors.state.message}
                </div>}
    
                <div className="w-full flex justify-center mt-[44px] mob:mt-[30px]">
                  <div
                    className="desk:w-[50%] bg-[#EE7C00] mob:px-8 rounded-[2px] flex justify-center"
                    style={{
                      boxShadow:
                      "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                    }}
                    >
                    <button
                      type='submit'
                      className="text-[#FFFFFF] p-1"
                      >
                      Suggest Now
                    </button>
                  </div>
                </div>
              </form>
    
              <div
                className="w-[47%] flex justify-center mob:hidden flex-col p-3 items-center"
                style={{
                  background:
                  "linear-gradient(158.5deg, #FFC88B 5.02%, #EE7C00 101.84%)",
                }}
                >
              <p className="text-[#F3F3F3] mob:hidden  text-center  leading-9 tracking-wide text-[28px] font-bold">
                Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat
                tellus pellentes
              </p>
              </div>
            </div>
          </div>
        </div>
      </>  
      );    
}

export default ExamRecommender
