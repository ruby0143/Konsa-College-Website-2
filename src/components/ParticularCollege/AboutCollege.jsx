import React from 'react'

function AboutCollege() {
  return (
    <div className='about mt-10'>
      <h2 className='text-xl m-3 font-semibold'>About College</h2>
      <hr />
      <div className="pts m-3">
        <div className="positive">
          <h3 className='my-3 mb-5 text-lg m-3 font-semibold'>Positive</h3>
          <ul className='ml-5'>
            <li className='flex'>
              <img className="icon h-5 w-5" src="src\assets\icons\smile.png" />
              <p className='text-sm ml-3 mb-3 -mt-1'>Average package of about 13 LPU - strong Alumni base being one of the factors.</p>
            </li>
            <li className='flex'>
              <img className="icon h-5 w-5" src="src\assets\icons\smile.png"/>
              <p className='text-sm ml-3 mb-3 -mt-1'>A very competitive and healthy coding culture.</p>
            </li>
          </ul>
        </div>
        <div className="negative">
          <h3 className='my-3 mb-5 text-lg m-3 font-semibold'>Negative</h3>
          <ul className='ml-5'>
            <li className='flex'>
              <img className="icon  h-5 w-5" src="src\assets\icons\sad.png" />
              <p className='text-sm  ml-3 mb-3 -mt-1'>Most of the hostels are decades old and are congested. Which are regreted by some, coped with by most, and praised by those who feel like “living in monuments”.</p>
            </li>
            <li className='flex'>
              <img className="icon h-5 w-5" src="src\assets\icons\sad.png" />
              <p className='text-sm ml-3 mb-3 -mt-1'>Infrastructure is yet to reach expectations of students.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutCollege