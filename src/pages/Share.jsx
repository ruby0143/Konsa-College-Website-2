import React, { useState } from 'react'
import insta from "../assets/share-icons/instagram.png"
import fb from "../assets/share-icons/facebook.png"
import tw from "../assets/share-icons/twitter.png"
import link from "../assets/share-icons/linkedin.png"
import wp from "../assets/share-icons/whatsapp.png"

function Share() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "https://konsacollege.com";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className='bg-white rounded-xl mx-3 my-[2rem] lg:mx-6 lg:my-[4rem] p-3 lg:p-[2rem]'>
        <h2 className='font-roboto text-[25px] lg:text-[32px] font-semibold tracking-[0.1rem] mb-[1.2rem] text-[#505050]'>Share this with...</h2>
        <div className='flex items-center whitespace-nowrap overflow-x-auto'>
          <a href="" className='mr-5 lg:mr-8'>
            <div className='p-[0.8rem] lg:p-[1rem] border-[1px] rounded-full w-[3.5rem] lg:w-[5rem] h-[3.5rem] lg:h-[5rem]'>
              <img src={insta} alt="instagram logo" className='h-full w-full' />
            </div>
          </a>
          <a href="" className='mr-5 lg:mr-8'>
            <div className='p-[0.8rem] lg:p-[1rem] border-[1px] rounded-full w-[3.5rem] lg:w-[5rem] h-[3.5rem] lg:h-[5rem]'>
              <img src={tw} alt="twitter logo" className='h-full w-full' />
            </div>
          </a>
          <a href="" className='mr-5 lg:mr-8'>
            <div className='p-[0.8rem] lg:p-[1rem] border-[1px] rounded-full w-[3.5rem] lg:w-[5rem] h-[3.5rem] lg:h-[5rem]'>
              <img src={link} alt="linkedin logo" className='h-full w-full' />
            </div>
          </a>
          <a href="https://wa.me/?text=message" className='mr-5 lg:mr-8'>
            <div className='p-[0.8rem] lg:p-[1rem] border-[1px] rounded-full w-[3.5rem] lg:w-[5rem] h-[3.5rem] lg:h-[5rem]'>
              <img src={wp} alt="whatsapp logo" className='h-full w-full'/>
            </div>
          </a>
          <a href="">
            <div className='p-[0.8rem] lg:p-[1rem] border-[1px] rounded-full w-[3.5rem] lg:w-[5rem] h-[3.5rem] lg:h-[5rem]'>
              <img src={fb} alt="facebook logo" className='h-full w-full' />
            </div>
          </a>
        </div>
        <p className='mt-[2rem] mb-[1.2rem] font-roboto text-[1.2rem] lg:text-[1.5rem] text-[#505050]'>Or copy link</p>
        <div className=" bg-white rounded-lg">
          <div className='flex justify-between items-center border-[1px] border-[#CECECE] rounded-md p-2'>
            <p className="font-roboto text-[#8D8D8D] lg:text-[1.2rem]">{textToCopy}</p>
            <button
              className="bg-[#EE7C00] text-white font-semibold py-2 px-4 rounded font-roboto w-[5.5rem]"
              onClick={handleCopyClick}
            >
              Copy
            </button>
          </div>
          {copied && (
            <p className="mt-4 text-green-500 font-bold text-center">Copied to clipboard!</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Share