import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'


const RecommendedExamsContainer = ({recommendedExams, setIsModalOpen}) => {
  
  let RecommendedExams = recommendedExams[0].Exams

  return (
    <div className='w-full h-full flex flex-col mob:justify-evenly justify-between'>
      <AiOutlineClose 
        className='self-end cursor-pointer'
        onClick={()=>setIsModalOpen(false)}
      />
      <div className='font-semibold text-center text-xl md:text-2xl mb-4'>
        Exams For Your
      </div>
      <div className='text-sm mb-4 md:hidden'>
        Lorem ipsum dolor sit amet consectetur. Amet nec at neque in volutpat adipiscing. Ut etiam suspendisse pharetra aliquet commodo.
      </div>
      <div className='text-sm mb-4 mob:hidden'>
      Lorem ipsum dolor sit amet consectetur. Amet nec at neque in volutpat adipiscing. Ut etiam suspendisse pharetra aliquet commodo. Vivamus etiam nisl neque elit. Suspendisse consequat tortor urna montes nunc mi laoreet. Dui ultrices id ornare ac sem mattis. Tellus a iaculis scelerisque suscipit arcu lectus placerat. Odio eu ullamcorper aliquet tincidunt pellentesque quis.
      </div>
      <div className='flex flex-wrap mob:justify-center justify-between w-full overflow-y-scroll overflow-x-hidden h-[300px] mob:h-[400px]'>
        {
          RecommendedExams.map((exam,idx) => {
            return <div 
                    key={idx}
                    className="flex flex-col justify-between border border-gray-2 my-3 h-[130px] w-[270px] p-3 rounded-sm"
                   >
                      <div className='flex h-[60px]'>
                        <div className='w-[60px] h-full bg-white'>
                          {exam.logo_link !== "" ? <img 
                            src={exam.logo_link} 
                            alt="exam logo" 
                            className='w-full h-full object-cover'
                          /> : null}
                        </div>
                        <div className='ml-2'>
                          <div>
                            {exam.name}
                          </div>
                          <div>
                            <div className='text-[12px] text-[#999999]'>
                              Location - {exam.target_location}
                            </div>
                            <div className='text-[12px] text-[#999999]'>
                              Date of Exam - 25 June 2023
                            </div>
                          </div>
                        </div>
                      </div>
                      <a>
                        <button
                          className='w-full text-center bg-[#EE7C00] text-white text-sm py-1 rounded-sm'
                        >
                          {/* {<a 
                            href={exam.apply_link ? exam.apply_link : ""}
                            className="w-full h-full"
                           > */}
                            Apply
                          {/* </a>} */}
                        </button>
                      </a>
                  </div>
          })
        }
      </div>
      <div className='w-full mob:hidden h-[100px] bg-[#d9d9d9]'>
        
      </div>
    </div>
  )
}

export default RecommendedExamsContainer
