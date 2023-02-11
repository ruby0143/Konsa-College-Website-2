import React from 'react'

function Placements(props) {
  return (
    <div className='my-[2rem]'>
      <h2 className='text-xl my-3 font-bold text-[#303030]'>Placement Stats</h2>
      <hr />
      <div className=" flex whitespace-nowrap  mt-5 py-3 pl-[.5rem]" style={{ overflowX: "auto" }}>
        {props.result.highest_package ? <div className=" p-3 rounded-lg md:px-8 mr-5 bg-[#FFFFFF] shadow-[0.952381px_1.90476px_4.7619px_rgba(0,0,0,0.1)] md:shadow-[0px_3.09489px_7.73723px_rgba(0,0,0,0.25)]">
          <div className="amount flex justify-center items-center mb-[.3rem] h-[40%]">
            <img className="icon h-4 w-7" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/package.png" />
            <p className='font-semibold text-[#EE7C00] ml-3'>{props.result.highest_package}</p>
          </div>
          <hr />
          <p className='text-[14px] my-[.6rem] mx-2 tracking-[1px]'>Highest Package</p>
        </div>:<div></div>}
        {props.result.average_package ? <div className=" p-3  rounded-lg md:px-8 mr-5 bg-[#FFFFFF] shadow-[0.952381px_1.90476px_4.7619px_rgba(0,0,0,0.1)] md:shadow-[0px_3.09489px_7.73723px_rgba(0,0,0,0.25)]">
          <div className="amount flex justify-center items-center mb-[.3rem] h-[40%]">
            <img className="icon h-4 w-7" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/package.png" />
            <p className='font-semibold text-[#EE7C00] ml-3'>{props.result.average_package}</p>
          </div>
          <hr />
          <p className='text-[14px] my-[.6rem] mx-2 tracking-[1px]'>Average Package</p>
        </div>:<div></div>}
        {props.result.median_package ? <div className=" p-3  rounded-lg md:px-8 bg-[#FFFFFF] shadow-[0.952381px_1.90476px_4.7619px_rgba(0,0,0,0.1)] md:shadow-[0px_3.09489px_7.73723px_rgba(0,0,0,0.25)]">
          <div className="amount flex justify-center items-center mb-[.3rem] h-[40%]">
            <img className="icon h-4 w-7" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/package.png" />
            <p className='font-semibold text-[#EE7C00] ml-3'>{props.result.median_package}</p>
          </div>
          <hr />
          <p className='text-[14px] my-[.6rem] mx-2 tracking-[1px]'>Median Package</p>
        </div>:<div></div>}
      </div>
    </div>
  )
}

export default Placements