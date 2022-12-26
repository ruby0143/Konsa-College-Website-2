import React from 'react'

function Placements() {
  return (
    <div className='mt-10'>
      <h2 className='text-xl m-3 font-semibold'>Placement Stats</h2>
      <hr />
      <div className="m-3 flex justify-around">
        <div className="highest p-3 shadow-md rounded-lg">
          <div className="amount flex justify-around">
            <img className="icon h-4 w-7" src="src\assets\icons\package.png" />
            <p className='font-semibold text-[#EE7C00] -mt-1'>RS 3.6 Cr</p>
          </div>
          <hr />
          <p className='mt-2'>Highest Package</p>
        </div>
        <div className="average p-3 shadow-md rounded-lg">
          <div className="amount flex justify-around">
            <img className="icon h-4 w-7" src="src\assets\icons\package.png" />
            <p className='font-semibold text-[#EE7C00] -mt-1'>RS 3.6 Cr</p>
          </div>
          <hr />
          <p className='mt-2'>Average Package</p>
        </div>
      </div>
    </div>
  )
}

export default Placements