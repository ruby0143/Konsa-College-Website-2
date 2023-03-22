import React from 'react'
import LeftContainer from '../common/LeftContainer'
import RightFormContainer from './RightFormContainer'

const LoginUser = ({setIsModalOpen,setIsLoginState}) => {
  return (
    <div className='w-full h-full flex'>
      <LeftContainer/>
      <RightFormContainer setIsModalOpen={setIsModalOpen} setIsLoginState={setIsLoginState}/>
    </div>
  )
}

export default LoginUser
