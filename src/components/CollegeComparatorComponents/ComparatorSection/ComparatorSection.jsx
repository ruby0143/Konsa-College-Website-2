import React from 'react'
import ComparatorTable from './InnerComponents/ComparatorTable'

const ComparatorSection = ({collegeSelectorData, showComparedData}) => {

  return (
    <div className='bg-white mx-auto max-w-[90%]'>
        {Object.keys(collegeSelectorData).length >= 2 && JSON.stringify(collegeSelectorData) !== "{}" && showComparedData ? (
          <div className='mt-[14rem] mb-[4rem] mob:mt-[10rem] mob:mb-[2rem] w-full rounded-md '>
              <div className='w-full flex justify-center items-center mb-8'>
                {
                  Object.keys(collegeSelectorData).map((objectKey,idx) => {
                    return (
                      <div key={idx} className='flex items-center'>
                        <span
                          className='text-lg mob:text-xs font-semibold mr-4 text-center'
                        >
                          {collegeSelectorData[objectKey].college_name}
                        </span>
                        {idx !== Object.keys(collegeSelectorData).length -1 && (
                        <span
                          className='mr-4 font-medium'
                        >
                          Vs
                        </span>
                        )}
                      </div>
                    )
                  })
                }
              </div>
              <div className='w-full'>
                <ComparatorTable collegeSelectorData={collegeSelectorData}/>
              </div>
          </div>
        ) : (
          Object.keys(collegeSelectorData).length >= 2 && JSON.stringify(collegeSelectorData) !== "{}" && !showComparedData ? (
            <div className='mt-[15rem] mb-[4rem] mob:mt-[10rem] mob:mb-[2rem] w-full h-[30vh] rounded-md shadow-md flex justify-center items-center text-3xl mob:text-lg font-bold text-[#EE7C00] p-8 text-center'>
                Click Compare!
            </div>
           ) : (
            <div className='mt-[15rem] mb-[4rem] mob:mt-[10rem] mob:mb-[2rem] w-full h-[30vh] rounded-md shadow-md flex justify-center items-center text-3xl mob:text-lg font-bold text-[#EE7C00] p-8 text-center'>
                Select atleast 2 colleges from College Selector Menu
            </div>
           )
        )}
    </div>
  )
}

export default ComparatorSection
