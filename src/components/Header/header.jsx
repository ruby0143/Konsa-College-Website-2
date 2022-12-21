import React from 'react'
import NavBar from './NavBar'
import SearchBar from './searchBar'
// import NavBar from './NavBar'

import './headerstyle.css';

const Header = () => {
  return (
    <div className='setBg relative flex justify-between flex-col items-center w-full h-[50vh]' >
      {/* Header top / navbar */}
      <NavBar/>

      {/* Header mid*/}
      <div className='flex justify-center items-center flex-col w-full' >
        <div className="tracking-widest text-white text-[1.4em] mb-4 md:mb-6 md:text-3xl lg:text-5xl" >KNOW MORE, DO MORE</div>
        <SearchBar/>
      </div>

      {/* Header bottom */}
      <div className="flex justify-center items-center bg-[#333333] text-white py-1 w-full" >
        <div className="text-normal underline cursor-pointer tracking-wide md:text-base md:tracking-wider">Subscribe to Exam Updates</div>
      </div>
    </div>
  )
}

export default Header