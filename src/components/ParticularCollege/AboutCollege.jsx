import React from 'react'

function AboutCollege(props) {
  return (
    <div className='about mt-10'>
      <h2 className='text-xl my-3 font-bold text-[#303030]'>About College</h2>
      <hr />
      <div className="pts my-3 md:flex">
        <div className="positive md:w-[50%]">
          <h3 className='my-3 mb-5 md:my-8 md:mb-10 md:ml-3 text-lg font-semibold'>Positive</h3>
          <ul className='ml-2'>
            {props.result.positives?.map((point,id)=>{
              return(
                <li className='flex' key={id}>
                <img className="icon h-5 w-5" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/smile.png" />
                <p className='text-sm ml-3 mb-3 md:mb-5 md:tracking-[.03rem] -mt-1'>{point}</p>
              </li>
              )
            })}
           
            
          </ul>
        </div>
        <div className="negative md:w-[50%] md:ml-4">
          <h3 className='my-3 mb-5 md:my-8 md:mb-10 md:ml-3 text-lg font-semibold'>Negative</h3>
          <ul className='ml-2'>
            {props.result.negatives?.map((point,id)=>{
              return(
                <li className='flex' key={id}>
                <img className="icon  h-5 w-5" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/sad.png" />
                <p className='text-sm  ml-3 mb-3 -mt-1 md:mb-5 md:tracking-[.03rem]'>{point}</p>
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