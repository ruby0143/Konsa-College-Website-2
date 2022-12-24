import React from 'react'
import KnsaCollegeNavbar from './Navbar'
import '../konsaCollegeHeader/headerstyle.css'
import {BsFillGeoAltFill} from "react-icons/bs";

const KnsaCollegeHeader = () => {
  return (
    <div>
        <KnsaCollegeNavbar/>
        <div className='midHeader flex items-end'>
          <div className='h-full px-4 pb-8'>
            <div className='mb-2' >
              <img src="https://www.iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.png" alt="college image" className='h-[128px]'/>
            </div>
            <div className='text-white w-[96%] text-xl leading-6 font-semibold mb-2' >
                Indian Institute of Technology, Banaras Hindu University(BHU)
            </div>
            <div className='flex items-center'>
              <div className='mr-1' >
                <BsFillGeoAltFill className='text-white text-xl' />
              </div>
              <div className='text-white leading-4 w-[90%] font-light'>
                IIT-BHU, Banaras Hindu University Campus, Varanasi, Uttar Pradesh 221005
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default KnsaCollegeHeader