import axios from 'axios'
import React, { useRef, useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const ExamRecommender = () => {

    const [apiRecommendedExamData, setApiRecommendedExamData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    let nameref = useRef()
    let stateref = useRef()

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
    
    function handleDataFetch(location){
      ( async () => {
        const url = "https://konsa-college-backend.vercel.app/recommendedExams";
        const {data} = await axios.get(url,{
          params : {
            location: location
          },
        })
        setApiRecommendedExamData(data[0])
      })()
      setIsOpen(false)
    }
    
        return (
        <div className="bg-[#F5F5F5]">
          <h2 className="pt-[80px] font-roboto font-bold text-[30px] text-[#3C3B3B] text-center tracking-wider">
            Exam Recommendation
          </h2>
          <h3 className="pt-[20px] font-roboto font-bold text-[22px] text-[#3C3B3B] text-center tracking-wider">
            JEE Mains 2023
          </h3>
          <div className=" flex justify-center mb-[60px]">
            <p className="text-center w-[80%] mt-[20px] text-xl font-normal text-[#3C3B3B] leading-6 tracking-wider">
              Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus
              pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut
              porttitor tellus imperdiet. Id nunc turpis donec aliquam .
            </p>
          </div>
          <div className="flex justify-center bg-[url('/cpbg.svg')] bg-cover ">
            <div
              className="w-[60%] h-[450px] bg-[#FFFFFF] flex flex-row mb-[80px]"
              style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain">
                <h4 className="mt-[22px] text-center font-bold">
                  Enter Your Details
                </h4>
                
                {/* NAME */}
                <h6 className="mt-[26px]">Your Name</h6>
                <div  
                  className="relative flex mt-[8px] justify-betweeb h-[34px] items-center w-full rounded-[2px] bg-[#ffffff]" style={{border:"1px solid #D3D3D3"}}
                >
                  <input
                    className="focus:outline-none text-[#ACACAC] text-sm tracking-wide w-[100%] h-full p-2"
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    ref={nameref}
                  />
                </div>
    
                {/* {inputMarksError !== "" && inputMarks === "" && (
                  <div className="text-red-600">{inputMarksError}</div>
                )} */}

                {/* STATE */}
                <h6 className="mt-[35px]">State of Eligibilty</h6>
                <div  
                  className="relative flex mt-[8px] justify-betweeb h-[34px] items-center w-full rounded-[2px] bg-[#ffffff]" style={{border:"1px solid #D3D3D3"}}
                >
                    <input 
                      type="text"
                      placeholder="Enter Your State" 
                      required
                      className="focus:outline-none text-[#ACACAC] text-sm tracking-wide w-[90%] h-full p-2"
                      ref={stateref}
                    />
                    <div onClick={()=>setIsOpen(prev=>!prev)} className="w-[10%] h-full flex justify-center items-center cursor-pointer">
                      {!isOpen ? (
                        <AiOutlineDown className="text-[#ACACAC]" />
                      ) : (
                        <AiOutlineUp className="text-[#ACACAC]" />
                      )}
                    </div> 
                 
                  {
                    isOpen && (
                    <div className="absolute z-10 top-[35px] left-0 right-[1px] w-full text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5] h-[150px] overflow-y-scroll overflow-x-hidden">
                      {locations.map((state,idx) => {
                        return (
                          <div
                            key={idx}
                            onClick={()=>handleDataFetch(state.name)}
                            className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                          >
                            {state.name}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
    
                {/* {shiftError !== "" && shift === "" && (
                  <div className="text-red-600">{shiftError}</div>
                )} */}
    
                <div className="w-full flex justify-center mt-[44px]">
                  <div
                    className="w-[50%] bg-[#EE7C00] cursor-pointer rounded-[2px] flex justify-center"
                    style={{
                      boxShadow:
                        "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                    }}
                  >
                    <button
                      className="text-[#FFFFFF] p-1"
                    >
                      Suggest Now
                    </button>
                  </div>
                </div>
              </div>
    
              <div
                className="w-[47%] flex justify-center flex-col p-3 items-center"
                style={{
                  background:
                    "linear-gradient(158.5deg, #FFC88B 5.02%, #EE7C00 101.84%)",
                }}
              >
              <p className="text-[#F3F3F3]  text-center  leading-9 tracking-wide text-[28px] font-bold">
                Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat
                tellus pellentes
              </p>
              </div>
            </div>
          </div>
        </div>
      );    
}

export default ExamRecommender
