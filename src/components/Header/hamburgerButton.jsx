import React, { useState } from 'react'

const HamburgerButton = () => {

  const [hamburgerActive,setHamburgerActive] = useState(false)

  return (
    <button className={` ${hamburgerActive ? "hamburger" : "is-active"} `}>
        <div className='bar'></div>
    </button>
  )
}

export default HamburgerButton