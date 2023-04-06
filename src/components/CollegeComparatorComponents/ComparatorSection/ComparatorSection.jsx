import React from 'react'

const ComparatorSection = ({collegeSelectorData, showComparedData, setShowComparedData}) => {

  console.log("length: ",Object.keys(collegeSelectorData).length);

  return (
    <div className='bg-white mx-auto max-w-[90%]'>
        {Object.keys(collegeSelectorData).length >= 2 && JSON.stringify(collegeSelectorData) !== "{}" && showComparedData ? (
          <div className='mt-[15rem] mb-[4rem] mob:mt-[10rem] mob:mb-[2rem] w-full h-[50vh] rounded-md shadow-md'>
              data showing
          </div>
        ) : (
           <div className='mt-[15rem] mb-[4rem] mob:mt-[10rem] mob:mb-[2rem] w-full h-[30vh] rounded-md shadow-md flex justify-center items-center text-3xl mob:text-lg font-bold text-[#EE7C00] p-8 text-center'>
              Select atleast 2 colleges from College Selector Menu
           </div>
        )}
    </div>
  )
}

export default ComparatorSection
