import React from 'react'
import { NavLink } from 'react-router-dom';
import {TbBuildingSkyscraper} from "react-icons/tb"

const CollegeReview = (props) => {
  return (
    <>
    <div className='w-[100vw] py-2 flex flex-col md:flex-row'>
        <div className='w-full py-2'>
          <h3 className='text-xl m-3 font-semibold'>Companies Visited</h3>
          <hr className='w-full text-gray-500'/>
          <ul className="pt-5">
            {props.result.top_recruiters.map((item,id) => {
              return (
                <React.Fragment key={id}>
                <div className='flex flex-row items-center '>
                    <TbBuildingSkyscraper className='text-yellow-500' size={20}/>
                  <NavLink key={id} to={item}>
                    <li className='p-2 md:text-xl'>{item}</li>
                  </NavLink></div>
                </React.Fragment>
              );
            })}
          </ul>
       
        </div>
        
        
        <div className='w-full py-2'>
        <h3 className='text-xl m-3 font-semibold'>College Review Video</h3>
          <hr className='w-full text-gray-500'/>
        <div className='flex justify-center md:justify-start'><iframe 
        className="py-5 px-2 w-full h-full md:w-[500px] md:h-[350px]"
        src={props.result.review_video_link}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'/></div>

        </div>
    </div>
    </>
  )
}
export default CollegeReview
