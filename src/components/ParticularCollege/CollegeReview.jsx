import React from 'react'
import { NavLink } from 'react-router-dom';
import { TbBuildingSkyscraper } from "react-icons/tb"

const CollegeReview = (props) => {
  return (
    <>
      <div className='w-[100vw] py-2 flex flex-col'>
        <div className='w-full py-2'>
          <h3 className='text-xl m-3 font-semibold text-[#303030]'>Companies Visited</h3>
          <hr className='w-full text-gray-500' />
          <ul className="mx-4">
            {props.result.top_recruiters?.map((item, id) => {
              return (
                <React.Fragment key={id}>
                  <div className='flex flex-row items-center md:my-4'>
                    <TbBuildingSkyscraper className='text-yellow-500' size={20} />
                    <NavLink key={id} to={item}>
                      <li className='p-2 text-[17px] font-semibold'>{item}</li>
                    </NavLink></div>
                </React.Fragment>
              );
            })}
          </ul>

        </div>


        <div className='w-full py-2 mb-[3rem]'>
          <h3 className='text-xl m-3 font-semibold text-[#303030]'>College Review Video</h3>
          <hr className='w-full text-gray-500' />
          <div className='flex justify-center md:justify-start'>
            <section
              className="py-5 px-6 w-full h-[14rem] sm:h-[35rem]"
            >
              <div className='flex justify-center w-full h-full'>
              <iframe src={props.result.review_video} style={{ boxShadow: "1px 2px 18px 2px rgba(0, 0, 0, 0.25)" }} className="rounded-xl w-full h-full" frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
export default CollegeReview
