import React from 'react'

function Placements(props) {
  return (
    <div className='mt-10 md:max-w-[60%] md:mx-[3rem] md:my-[5rem]'>
      <h2 className='text-xl m-3 font-semibold text-[#303030] mt-[3.5rem]'>Placement Stats</h2>
      <hr />
      <div className="m-3 flex justify-around mt-5">
        <div className="highest p-3 shadow-md rounded-lg md:px-6">
          <div className="amount flex justify-around">
            <img className="icon h-4 w-7" src="src/assets/icons/package.png" />
            <p className='font-semibold text-[#EE7C00] -mt-1'>RS {props.result.highest_package} Cr</p>
          </div>
          <hr />
          <p className='mt-2'>Highest Package</p>
        </div>
        <div className="average p-3 shadow-md rounded-lg md:px-6">
          <div className="amount flex justify-around">
            <img className="icon h-4 w-7" src="src/assets/icons/package.png" />
            <p className='font-semibold text-[#EE7C00] -mt-1'>RS {props.result.median_package} Cr</p>
          </div>
          <hr />
          <p className='mt-2'>Average Package</p>
        </div>
      </div>
    </div>
  )
}

export default Placements