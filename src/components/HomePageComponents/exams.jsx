import React from 'react'
import JEE_Main_logo from "../../assets/Exams/JEE_Main.svg"
import JEE_Advance_logo from "../../assets/Exams/JEE_Advance.svg"
import BITS_JEE_Main_logo from "../../assets/Exams/BITS_JEE_Main.svg"

const Exams = () => {

  const Exams = [
    { id: 1, exam: "JEE (Mains)", logo: JEE_Main_logo},
    { id: 2, exam: "JEE Advance", logo: JEE_Advance_logo},
    { id: 3, exam: "JEE (Mains)", logo: BITS_JEE_Main_logo},
  ]

  return (
    <div className='mb-4'>
      <div className='text-center text-xl font-semibold text-[#303030]' >
        Exams
      </div>
      <div className='text-[#848484] mt-1 text-[12px] text-end'>
        <div>
          Show more &#10140;
        </div>
      </div>
      <div className='flex overflow-x-auto gap-2 py-2'>
        {
          Exams.map(exam => {
            return <div key={exam.id} className='h-[56px] min-w-[158px] flex items-center justify-evenly shadow-md rounded-md border border-gray-100 bg-white'>
              <div>
                <img src={exam.logo} alt="exam logo"/>  
              </div>
              <div className='font-bold' >
                {exam.exam}
              </div>
            </div>
          })
        }
        <div className='min-w-[158px] h-[56px] flex justify-center items-center shadow-md rounded-md border border-gray-200 bg-gradient-to-r from-white to-[#fff6ec] font-medium'>
            <div className='text-sm text-[#EE7C00]'>
              Show More &#10140;
            </div>
          </div>
      </div>
    </div>
  )
}

export default Exams