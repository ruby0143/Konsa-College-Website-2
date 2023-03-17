import React from 'react';
import {Link} from 'react-router-dom';

function BranchCard(props) {
  
  return (
    <Link to={props.link} >
      <div className='card w-[300px] h-[150px] xxs:w-[300px] xs:w-[240px] lg:w-[230px] p-3 shadow-md rounded-md border border-gray-100 bg-white '>
        <h2 className='m-2 text-base font-medium text-blue-600/100 '>{props.instName}</h2>
        <p className='m-2 mt-5 text-gray-500'>{props.state}</p>
      </div>
    </Link>

  )
}

export default BranchCard