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

        <div className='flex-row'>
          <div className='overview mt-[3rem]'>
            <h2 className=' text-[#303030] text-xl m-3 font-semibold'>Overview</h2>
            <hr />
            <div className='mt-[1.4rem]'>
              <p className='text-[13px] leading-[15.75px] text-[#3A3A3A] mx-[10px]'>{props.result.overview}</p>
              <div className="flex-col mt-[2rem] mx-[10px] justify-around align-middle">
                <div className='flex items-center justify-around'>
                  {/* ranking  */}
                  <div className="nirf flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-around min-w-[150px] shadow-[1px_1px_6px_rgba(0,0,0,0.07)] hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.07)]
">
                    <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/NIRF.png" alt="NIRF logo" className='h-[32.31px]' />
                    <div className="rank">
                      <p className='text-[14px] text-[#2E2E2E] text-center font-semibold'>{props.result.nirf}</p>
                      <p className='text-[12px] text-[#434343] text-center'>NIRF Ranking</p>
                    </div>
                  </div>
                  {/* campus area  */}
                  <div className="area flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-evenly min-w-[150px] shadow-[1px_1px_6px_rgba(0,0,0,0.07)] hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.07)]">
                    <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/Area.png" alt="Area logo" className='h-[32.31px]' />
                    <div className="campusArea">
                      <p className='text-[14px] text-[#2E2E2E] text-center font-semibold'>568 Acres</p>
                      <p className='text-[14px] text-[#2E2E2E] text-center'>Campus Area</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Qualifying exams  */}
          <div className='my-[2rem] px-3'>
            <h3 className='font-semibold text-[15px] mb-[1.2rem]'>Qualifying Exams</h3>
            <div className="flex whitespace-nowrap" style={{ overflowX: "auto" }}>
              {props.result.exams?.map((exam, index) => {
                return <div id={index} className='rounded-md mr-4 border-[1px] border-[rgba(233,233,233,1)] px-4 py-[.2rem] text-center text-[#2E2E2E] text-[14px]'>{exam}</div>
              })}
            </div>
          </div>
          {/* mode of admission  */}
          <div className='mt-[2rem] px-3'>
            <h3 className='font-semibold text-[15px] mb-[1.2rem]'>Mode Of Admission</h3>
            <div className="flex whitespace-nowrap" style={{ overflowX: "auto" }}>
              {props.result.mode_of_admission?.map((exam, index) => {
                return <div id={index} className='rounded-md mr-4 border-[1px] border-[rgba(233,233,233,1)] px-4 py-[.2rem] text-center text-[#2E2E2E] text-[14px]'>{exam}</div>
              })}
            </div>
          </div>
        </div>

    </>
  )
}

export default Overview