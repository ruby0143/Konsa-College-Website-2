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
          <h3 className='text-[20px] py-2'>Companies Visited</h3>
          <hr className='w-full text-gray-500'/>
          <ul className="pt-5">
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
        
        
        <div className='w-full py-2'>
        <h3 className='text-[20px] p-2'>College Review Video</h3>
          <hr className='w-full text-gray-500'/>
        <div className='flex justify-center md:justify-start'><iframe 
        className="py-5 px-2 w-full h-full md:w-[500px] md:h-[350px]"
        src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        // width='500'
        // height='350'
        allowfullscreen
        title='video'/></div>

        </div>
    </div>
    </>
  )
}
export default CollegeReview
