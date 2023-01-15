import React,{useState,useEffect} from "react";
import { FaLinkedinIn, FaGooglePlay } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "../../style/commonStyle.module.css"

const CollegeFooter = () => {
  const [mobile , setMobile]=useState(false)
  useEffect(() => {
    if(window.innerWidth<600){
      setMobile(true)
    }
  }, [window.innerWidth])
  
  const Link = [
    { link: "ABOUT", route: "/particularcollege" },
    { link: "PRIVACY POLICY", route: "/particularcollege" },
    { link: "TERM OF USE", route: "/particularcollege" },
    { link: "CONTACT US", route: "/particularcollege" },
    { link: "SUPPORT US", route: "/particularcollege" },
  ];
  return (
    <div div className="w-full">
      <div className="w-full h-[2vh] bg-[#EE7C00]"></div>

      {
        mobile? (<>
         <div className="w-full flex flex-col justify-center h-min-[45vh] bg-[#0E0E0E] text-white">
      <div className="w-full pt-5">
        <ul className="text-center align-middle ">
          {Link.map((item, id) => {
            return <React.Fragment key={id}>
                <NavLink key={id} to={item.route}>
                  <li>{item.link}</li>
                </NavLink>
                <br />
              </React.Fragment>
          })}
        </ul>
      </div>

      <div className="flex  justify-center py-1">
        <div className=" flex flex-row gap-x-6 text-black">
          <FaGooglePlay
            size={40}
            className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
          />
          <FaLinkedinIn
            size={40}
            className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
          />
          <FiInstagram
            size={40}
            className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
          />
          <IoIosMail
            size={40}
            className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
          />
          <BsYoutube
            size={40}
            className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex  justify-center">
        <img src="/public/KonsaCollege.png" alt="logo"></img>
      </div>

      <h2 className="text-center p-1">Subscribe to Our Newsletter</h2>

      <div className=" flex flex-row justify-center">
        <div className=" bg-white rounded-lg px-2 flex flex-row items-center">
        <input
                className="p-2 w-[70vw] md:w-[50vw] lg:w-[30vw] text-gray-500 text-center text-base focus:outline-none"
                placeholder="Please enter your mobile no"
              />
              <span><img src="/line.png" className="mr-2"/></span>
              <button className="bg-white text-gray-500">
                <span>
                  <img src="/arrow.png" />
                </span>
              </button>
        </div>
      </div>

      <h2 className="text-center py-5">Konsa College @ Copyright 2022</h2>
    </div>
    </>) : (<>
        <div className="w-full flex flex-row  justify-between md:p-8 md:px-20 h-min-[45vh] bg-[#0E0E0E] text-white">
        
        
        <div className="w-1/3">
          <img src="/KonsaCollege.png" className="w-[180px] text-center"></img>
          <p className="w-[350px] mt-[-20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            explicabo, nisi similique excepturi voluptatibus neque eveniet.
            
          </p>
        </div>

        <div className=" md:w-1/3 py-10 p-5 mt-8 mr-[20px] flex justify-between flex-row flex-wrap">
          {/* <ul className="text-center align-middlebg-red-500"> */}
            {Link.map((item, id) => {
              return (
                <React.Fragment key={id}>
                  <NavLink key={id} to={item.route}>
                    <div className="w-[150px]">{item.link}</div>
                  </NavLink>
                  <br />
                </React.Fragment>
              );
            })}
          {/* </ul> */}
        </div>

        <div className="md:w-1/3 flex flex-col justify-center gap-y-2 ">
          

          {/* <div className="md:hidden flex justify-center">
            <img src="/public/KonsaCollege.png" alt="logo"></img>
          </div> */}
          <h2 className="text-center p-1">Subscribe to Our Newsletter</h2>
          <div className=" flex flex-row justify-center">
            <div className=" bg-white rounded-lg px-2 flex flex-row items-center">
              <input
                className="p-2 w-[70vw] md:w-[50vw] lg:w-[30vw] text-gray-500 text-center text-base focus:outline-none"
                placeholder="Please enter your mobile no"
              />
             <span><img src="/line.png" className="mr-2"/></span>
              <button className="bg-white text-gray-500">
                <span>
                  <img src="/arrow.png" />
                </span>
              </button>
            </div>
          </div>
          <div className=" flex flex-row gap-x-3 md:gap-x-6 justify-center mt-3 text-black">
            <FaGooglePlay
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
            <FaLinkedinIn
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
            <FiInstagram
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
            <IoIosMail
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
            <BsYoutube
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
          </div>

          {/* <h2 className="text-center py-5 md:hidden">
            Konsa College @ Copyright 2022
          </h2> */}
        </div>
      </div>
      <div className="hidden md:w-full md:h-[50px] md:flex md:justify-center items-center bg-white text-gray-600">
        <h2 className="text-center ">Konsa College @ Copyright 2022</h2>
      </div>
      </>)
      }

      
    </div>
  );
};
export default CollegeFooter;
