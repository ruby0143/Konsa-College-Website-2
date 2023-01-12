import React from 'react'

function AboutCollege(props) {
  return (
    <div className='about mt-10'>
      <h2 className='text-xl m-3 font-semibold'>About College</h2>
      <hr />
      <div className="pts m-3">
        <div className="positive">
          <h3 className='my-3 mb-5 text-lg m-3 font-semibold'>Positive</h3>
          <ul className='ml-5'>
            {props.result.positives.map((point,id)=>{
              return(
                <li className='flex' key={id}>
                <img className="icon h-5 w-5" src="src\assets\icons\smile.png" />
                <p className='text-sm ml-3 mb-3 -mt-1'>{point}</p>
              </li>
              )
            })}
           
            
          </ul>
        </div>
        <div className="negative">
          <h3 className='my-3 mb-5 text-lg m-3 font-semibold'>Negative</h3>
          <ul className='ml-5'>
            {props.result.negatives.map((point,id)=>{
              return(
                <li className='flex' key={id}>
                <img className="icon  h-5 w-5" src="src\assets\icons\sad.png" />
                <p className='text-sm  ml-3 mb-3 -mt-1'>{point}</p>
              </li>
              )
            })}
           
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutCollege