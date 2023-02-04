import React from 'react'

function Placements(props) {
  return (
    <div className='my-[2rem]'>
      <h2 className='text-xl m-3 font-bold text-[#303030] '>Placement Stats</h2>
      <hr />
      <div className="flex whitespace-nowrap mt-5 px-3" style={{ overflowX: "auto" }}>
        {props.result.highest_package ? <div className="highest p-3 rounded-lg md:px-6 mr-3 shadow-[0.952381px_1.90476px_4.7619px_rgba(0,0,0,0.1)]">
          <div className="amount flex justify-around">
            <img className="icon h-4 w-7" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/package.png" />
            <p className='font-semibold text-[#EE7C00] -mt-1'>{props.result.highest_package}</p>
          </div>
          <hr />
          <p className='mt-2'>Highest Package</p>
        </div>:<div></div>}
        {props.result.average_package ? <div className="average p-3 rounded-lg md:px-6 mr-3 shadow-[0.952381px_1.90476px_4.7619px_rgba(0,0,0,0.1)]">
          <div className="amount flex justify-around">
            <img className="icon h-4 w-7" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/package.png" />
            <p className='font-semibold text-[#EE7C00] -mt-1'>{props.result.average_package}</p>
          </div>
          <hr />
          <p className='mt-2'>Average Package</p>
        </div>:<div></div>}
        {props.result.median_package ? <div className="Median p-3 rounded-lg md:px-6 shadow-[0.952381px_1.90476px_4.7619px_rgba(0,0,0,0.1)]">
          <div className="amount flex justify-around">
            <img className="icon h-4 w-7" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/package.png" />
            <p className='font-semibold text-[#EE7C00] -mt-1'>{props.result.median_package}</p>
          </div>
          <hr />
          <p className='mt-2'>Median Package</p>
        </div>:<div></div>}
      </div>
    </div>
  )
}

export default Placements