import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import RecommendedExamsContainer from '../components/ExamRecommendation/recommendedExams'
import ToolsModal from '../components/UI Components/Modal/toolsModal'
import { Helmet } from 'react-helmet'

const ExamRecommender = () => {

  const [apiRecommendedExamData, setApiREcommendedExamData] = useState([])
  const [selectedState, setSelectedState] = useState("-- Enter your state --")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userName, setUserName] = useState("")
  
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
      if(selectedState !== "-- Enter your state --"){
        (async () => {
          const url = "https://konsa-college-backend.vercel.app/recommendedExams";
          const {data} = await axios.get(url,{
            params : {
              location: selectedState
            },
          })
          setApiREcommendedExamData(data); 
          setSelectedState("-- Enter your state --");
          setUserName("");
          setIsModalOpen(true);
        })()
      }
    }

        return (
        <>

        {/* ---- SEO Configuration ----*/}
        <Helmet>
          <meta name="copyright" content="Konsa College" />
          <meta name="viewport" content="width=device-width, intial-scale=1.0" />
          <title>Konsacollege - Exam Recommender</title>
          <meta name="description" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
          <meta name="Abstract" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
          <meta property="og:title" content="Konsacollege - Find the Best Colleges in India" />
          <meta property="og:description" content="Looking for the best engineering college in India? Look no further than Konsacollege. Our comprehensive directory and user-friendly tools make it easy to find the right college hassle-free. Plus, our expert counselors are here to guide you every step of the way. Start your college search with Konsacollege today." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.konsacollege.com" />
          <meta property="og:site_name"
            content="Konsacollege - Exam Recommender"/>
          <meta property="og:image"
            content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
          <meta property="og:determiner" content="..." />
          <meta name="twitter:card" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
          <meta name="twitter:title" content="Konsacollege - Find the Best Colleges in India" />
          <meta name="twitter:description" content="Finding the right college can be overwhelming, but Konsacollege makes it easy. With a vast directory of top engineering colleges in India and personalized counseling, we help students make informed decisions about their education. Start your search today and discover your dream college with Konsacollege." />
          <meta name="twitter:image"
            content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
          <meta name="twitter:image:alt"
            content="Konsa College Logo" />
          <meta property="twitter:url" content="https://www.konsacollege.com" />
          <meta property="twitter:site" content="@konsacollege" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="keyword1, keyword2, keyword3, keyword4" />
          <meta name="audience" content="all" />
          <meta name="distribution" content="global"/>
        </Helmet>
        {/* ---- SEO Configuration ---- */}

        {
          isModalOpen && (
            apiRecommendedExamData.length > 0 ? (
              <ToolsModal>
                <RecommendedExamsContainer recommendedExams={apiRecommendedExamData} setIsModalOpen={setIsModalOpen}/>
              </ToolsModal> 
            ) : (
              <ToolsModal>
                <div className='w-full h-full flex flex-col'>
                  <AiOutlineClose 
                    className='self-end cursor-pointer'
                    onClick={()=>setIsModalOpen(false)}
                  />
                  <div className='h-full w-full flex justify-center items-center text-5xl text-[#E77C00] font-bold'>
                    Sorry, Exam data not found !!!
                  </div>
                </div>
              </ToolsModal>
            )
          )
        }

        <div className="bg-[#F5F5F5]">
          <h2 className="pt-[80px] mob:pt-[18px] font-roboto font-bold mob:font-semibold text-[30px] mob:text-[18px] text-[#3C3B3B] text-center tracking-wider">
            Exam Recommendation
          </h2>
      
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
                    {...register("name", { required: "name field is required" })} 
                    className={`rounded-[2px] bg-[#FFFFFF] text-[#ACACAC] text-sm mob:text-xs tracking-wide focus:outline-none border ${errors.name ? "border-red-500" : "border-gray-300"} w-full h-full p-[6px]`}
                    type="text"
                    value={userName}
                    placeholder="Enter Your Name"
                    onChange={(e)=>setUserName(e.target.value)}
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
                  value={selectedState}
                >
                  <option value="" className='text-[#ACACAC]'>{selectedState}</option>
                  {
                    locations.map((state,idx)=>{
                      return (
                        <option 
                          key={idx} 
                          value={state.name}
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
                      className="text-[#FFFFFF] w-full h-full p-1"
                      type='submit'
                      id='toolSubmit'
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
