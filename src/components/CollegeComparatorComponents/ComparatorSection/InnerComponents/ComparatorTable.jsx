import React from 'react'

const ComparatorTable = () => {
  return (
    <div className='w-full'>
      
      {/* OVERVIEW */}
      <div className='w-full shadow-md rounded-md mb-8'>
        <div className='text-center text-xl mob:text-lg font-semibold bg-[#FDF2EF] py-3 mob:py-2 rounded-t-md'>Overview</div>
        <div className='flex justify-evenly items-center bg-white py-3 mob:py-2'>
            <div className='text-lg mob:text-sm font-medium'>
                Campus Size
            </div>
            {

            }
        </div>
        <div className='flex justify-evenly items-center bg-[#FDF2EF] py-3 mob:py-2'>
            <div className='text-lg mob:text-sm font-medium'>
                Nirf Ranking
            </div>
            {

            }
        </div>
      </div>

      {/* CONNECTIVITY */}
      <div className='w-full shadow-md rounded-md mb-8'>
        <div className='text-center text-xl mob:text-lg font-semibold bg-[#FDF2Ef] py-3 mob:py-2 rounded-t-md'>Connectivity</div>
        <div className='flex justify-evenly items-center bg-white py-3 mob:py-2'>
            <div className='text-lg mob:text-sm font-medium'>
                Railway Station
            </div>
            {

            }
        </div>
        <div className='flex justify-evenly items-center bg-[#FDF2EF] py-3 mob:py-2'>
            <div className='text-lg mob:text-sm font-medium'>
                Bus Stand
            </div>
            {
                
            }
        </div>
        <div className='flex justify-evenly items-center bg-white py-3 mob:py-2'>
            <div className='text-lg mob:text-sm font-medium'>
                Air Port
            </div>
            {
                
            }
        </div>
      </div>

      {/* FEES */}
      <div className='w-full shadow-md rounded-md mb-8'>
        <div className='text-center text-xl mob:text-lg font-semibold bg-[#FDF2Ef] py-3 mob:py-2 rounded-t-md'>Fees</div>
        <div className='flex justify-evenly items-center bg-white py-3 mob:py-2'>
            <div className='text-lg mob:text-sm font-medium'>
                Total Fees
            </div>
            {
                
            }
        </div>
      </div>

      {/* PLACEMENT */}
      <div className='w-full shadow-md rounded-md mb-8'>
        <div className='text-center text-xl mob:text-lg font-semibold bg-[#FDF2Ef] py-3 mob:py-2 rounded-t-md'>Placement</div>
        <div className='flex justify-evenly items-center bg-white py-3 mob:py-2'>
            <div className='text-lg mob:text-sm font-medium'>
                Highest package
            </div>
            {
                
            }
        </div>
        <div className='flex justify-evenly items-center bg-[#FDF2EF] py-3 mob:py-2'>
            <div className='text-lg mob:text-sm font-medium'>
                Median Package
            </div>
            {
                
            }
        </div>
      </div>
    </div>
  )
}

export default ComparatorTable
