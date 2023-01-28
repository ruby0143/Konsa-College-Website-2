import React from 'react'

function Overview(props) {

  return (
    <>
      {/* before Overview  */}
      <div className='mt-[3rem] flex sm:hidden' style={{ overflowX: "auto" }}>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{ borderRadius: "5px" }}>Overview</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{ boxShadow: "0px 0px 2.13793px rgba(0, 0, 0, 0.25)", borderRadius: "5px" }}>Connectivity</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{ boxShadow: "0px 0px 2.13793px rgba(0, 0, 0, 0.25)", borderRadius: "5px" }}>Fee Structure</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{ boxShadow: "0px 0px 2.13793px rgba(0, 0, 0, 0.25)", borderRadius: "5px" }}>Scholarship</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{ boxShadow: "0px 0px 2.13793px rgba(0, 0, 0, 0.25)", borderRadius: "5px" }}>About College</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{ boxShadow: "0px 0px 2.13793px rgba(0, 0, 0, 0.25)", borderRadius: "5px" }}>Cut Off</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{ boxShadow: "0px 0px 2.13793px rgba(0, 0, 0, 0.25)", borderRadius: "5px" }}>Placement Stats</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{ boxShadow: "0px 0px 2.13793px rgba(0, 0, 0, 0.25)", borderRadius: "5px" }}>College Review Video</div>
      </div>


      <div className='flex'>
        <div className='overview mt-[3rem] md:max-w-[60%] md:mx-[3rem] md:mt-[5rem]'>
          <h2 className=' text-[#303030] text-xl m-3 font-semibold'>Overview</h2>
          <hr />
          <div className='mt-[1.4rem]'>
            <p className='text-[13px] leading-[15.75px] text-[#3A3A3A] mx-[10px]'>{props.result.overview}</p>
            <div className="grid grid-rows-2 grid-cols-2 mt-[2rem] mx-[10px] gap-2 md:grid-cols-4 md:grid-rows-1">
              <div className="nirf flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-around" style={{ boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.07)" }}>
                <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/NIRF.png" alt="NIRF logo" className='h-[32.31px]' />
                <div className="rank">
                  <p className='text-[14px] text-[#2E2E2E] text-center font-semibold'>{props.result.nirf}</p>
                  <p className='text-[12px] text-[#434343] text-center'>NIRF Ranking</p>
                </div>
              </div>
              <div className="exam flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-around" style={{ boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.07)" }}>
                <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/Exams.png" alt="Exam logo" className='h-[32.31px]' />
                <div className='examType'>
                  {props.result.exams?.map((exam, index) => {
                    return <p id={index} className='text-[14px] text-[#2E2E2E] text-center font-semibold'>{exam}</p>
                  })}
                </div>
              </div>
              <div className="area flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-evenly" style={{ boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.07)" }}>
                <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/Area.png" alt="Area logo" className='h-[32.31px]' />
                <div className="campusArea">
                  <p className='text-[14px] text-[#2E2E2E] text-center font-semibold'>568 Acres</p>
                  <p className='text-[14px] text-[#2E2E2E] text-center font-semibold'>Campus Area</p>
                </div>
              </div>
              <div className="modeOfAdmission flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-around" style={{ boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.07)" }}>
                <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/Admission.png" alt="mode of admission logo" className='h-[32.31px]' />
                <div className="mode">
                  {props.result.mode_of_admission?.map((mode, index) => {
                    return <p id={index} className='text-[14px] text-[#2E2E2E] text-center font-semibold'>{mode}</p>
                  })}
                  <p className='text-[12px] text-[#2E2E2E] text-center'>Mode of Admission</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="newsFeeds mt-[3rem] md:max-w-[40%] md:mx-[1.5rem] md:mt-[5rem]">
          <h2 className=' text-[#303030] text-md m-3 font-semibold'>News Feeds</h2>
          <hr />
          <div className='flex'>
            <div className='flex'>
              <img src="" alt="" />
              <div className="content flex-col">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ut temporibus dolorem, dolor tempore nemo?</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, natus?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview