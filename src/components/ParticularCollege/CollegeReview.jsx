import React from 'react'
import { NavLink } from 'react-router-dom';
import {TbBuildingSkyscraper} from "react-icons/tb"

const CollegeReview = () => {
    const companiesvisited=[
        { comp: "Google", link: "#" },
        { comp: "Youtube", link: "#" },
        { comp: "Netflix", link: "#" },
        { comp: "Paytm", link: "#" },
        { comp: "Apple", link: "#" },
        { comp: "Netflix", link: "#" },
        { comp: "Paytm", link: "#" },
        { comp: "Apple", link: "#" },
      ];
  return (
    <>
    <div className='w-[100vw] p-2 flex flex-col md:flex-row'>
        <div className='w-full p-2'>
          <h3 className='text-gray-500 text-xl md:text-2xl font-semibold p-2'>Companies Visited</h3>
          <hr className='w-full text-gray-400'/>
          <ul className="text-gray-700 font-medium">
            {companiesvisited.map((item, id) => {
              return (
                <>
                <div className='flex flex-row items-center '>
                    <TbBuildingSkyscraper className='text-yellow-500' size={20}/>
                  <NavLink key={id} to={item.link}>
                    <li className='p-2 md:text-xl'>{item.comp}</li>
                  </NavLink></div>
                </>
              );
            })}
          </ul>
       
        </div>
        
        
        <div className='w-full p-2'>
        <h3 className='text-gray-500 text-xl md:text-2xl font-semibold p-2'>College Review Video</h3>
          <hr className='w-full text-gray-400'/>
        <iframe 
        className="py-5 md:w-[500px] md:h-[350px]"
        src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        // width='500'
        // height='350'
        allowfullscreen
        title='video'/>

        </div>
    </div>
    </>
  )
}
export default CollegeReview
