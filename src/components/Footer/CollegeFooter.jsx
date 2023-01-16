import React from "react";
import { FaLinkedinIn, FaGooglePlay } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const CollegeFooter = () => {
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

      <div className="w-full flex mob:flex-col mob:justify-center desk:flex-row desk:justify-between desk:p-8 h-min-[45vh] bg-[#0E0E0E] text-white">
        <div className="mob:hidden desk:w-1/3">
          <img src="/KonsaCollege.png" className="w-[180px] text-center"></img>
          <p className="w-[350px] mt-[-20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            explicabo, nisi similique excepturi voluptatibus neque eveniet.
          </p>
        </div>

        <div className="mob:w-full desk:w-1/3 pt-5 desk:flex desk:flex-row desk:flex-wrap desk:justify-center desk:mt-6">
          {Link.map((item, id) => {
            return (
              <React.Fragment key={id}>
                <NavLink key={id} to={item.route}>
                  <div className="mob:text-center desk:w-[150px]">
                    {item.link}
                  </div>
                </NavLink>
                <br />
              </React.Fragment>
            );
          })}
        </div>

        <div className="mob:w-full desk:w-1/3 flex flex-col justify-center gap-y-2">
          <div className=" flex flex-row justify-center mob:gap-x-4 desk:gap-x-6 text-black desk:order-4 desk:mt-2">
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

          <div className="mob:flex mob:justify-center desk:hidden">
            <img src="/public/KonsaCollege.png" alt="logo"></img>
          </div>
          <h2 className="text-center p-1">Subscribe to Our Newsletter</h2>

          <div className=" flex flex-row justify-center">
            <div className=" bg-white rounded-lg flex flex-row items-center px-2">
              <input
                className="p-2 w-[70vw] md:w-[50vw] lg:w-[30vw] text-gray-500 text-center text-base focus:outline-none"
                placeholder="Please enter your mobile no"
              />
              <span>
                <img src="/line.png" className="mr-2" />
              </span>
              <button className="bg-white text-gray-500">
                <span>
                  <img src="/arrow.png" />
                </span>
              </button>
            </div>
          </div>
          <h2 className="desk:hidden text-center py-5">
            Konsa College @ Copyright 2022
          </h2>
        </div>
      </div>
      <div className="mob:hidden desk:w-full desk:h-[50px] desk:flex desk:justify-center desk:items-center bg-white text-gray-600">
        <h2 className="text-center ">Konsa College @ Copyright 2022</h2>
      </div>
    </div>
  );
};
export default CollegeFooter;
