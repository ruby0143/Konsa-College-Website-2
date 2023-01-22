import React from 'react'
import JEE_Main_logo from "../../assets/Exams/JEE_Main.svg"
import JEE_Advance_logo from "../../assets/Exams/JEE_Advance.svg"
import BITS_JEE_Main_logo from "../../assets/Exams/BITS_JEE_Main.svg"

const Exams = () => {

  const Exams = [
    { id: 1, exam: "JEE (Mains)", logo: JEE_Main_logo},
    { id: 2, exam: "JEE Advance", logo: JEE_Advance_logo},
    { id: 3, exam: "JEE (Mains)", logo: BITS_JEE_Main_logo},
    { id: 4, exam: "JEE (Mains)", logo: JEE_Main_logo},
    { id: 5, exam: "JEE Advance", logo: JEE_Advance_logo},
  ]

  return (
    <div className='mb-4'>
      <div className='text-center text-xl md:text-2xl mb-1 font-semibold text-[#303030]' >
        Exams
      </div>
      <div className='flex md:max-w-[1100px] md:m-auto items-center overflow-x-auto gap-2 py-2'>
        {
          Exams.map(exam => {
            return <div key={exam.id} className='h-[56px] md:h-[158px] min-w-[158px] flex md:flex-col items-center justify-evenly shadow-md rounded-md border border-gray-100 bg-white'>
              <div>
                <img src={exam.logo} alt="exam logo" className='w-[30px] md:w-[100px] md:h-[80px]' />  
              </div>
              <div className='font-semibold md:font-bold' >
                {exam.exam}
              </div>
            </div>
          })
        }
        <button className='min-w-[158px] h-[56px] md:h-[158px] flex justify-center items-center shadow-md rounded-md border border-gray-200 bg-gradient-to-r from-white to-[#fff6ec] font-medium cursor-pointer'>
            <div className='text-sm text-[#EE7C00]'>
              Show More &#10140;
            </div>
          </button>
      </div>
    </div>
  )
}

export default Exams