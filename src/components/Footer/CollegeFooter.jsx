import React, { useState } from "react";
import { FaLinkedinIn, FaGooglePlay } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import axios from "axios";
const CollegeFooter = () => {
  const [phone, setPhone] = useState();
  const postPhone = () => {
    const doc = {
      name: "",
      phone: phone,
    };

    axios
      .post("https://konsa-college-backend-production-0c4c.up.railway.app/phone", doc)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

      <div className="w-full flex mob:flex-col mob:justify-center desk:flex-row desk:justify-between desk:p-4 desk:px-16 h-min-[45vh] bg-[#0E0E0E] text-white">
        <div className="mob:hidden desk:w-1/3 desk:mb-6">
          <img
            src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/KonsaCollege.png"
            className="w-[180px] text-center"
          ></img>
          <p className="w-[250px] mt-[-20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            explicabo, nisi similique excepturi voluptatibus neque eveniet.
          </p>
        </div>

        <div className="mob:w-full desk:w-1/3 pt-5 desk:flex desk:flex-row desk:flex-wrap desk:justify-start desk:mt-6">
          {Link.map((item, id) => {
            return (
              <React.Fragment key={id}>
                <NavLink key={id} to={item.route}>
                  <div className="mob:text-center desk:w-[200px]">
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
              className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
            />
            <FaLinkedinIn
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
            />
            <FiInstagram
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
            />
            <IoIosMail
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
            />
            <BsYoutube
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
            />
          </div>

          <div className="mob:flex mob:justify-center desk:hidden">
            <img
              src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/KonsaCollege.png"
              alt="logo"
            ></img>
          </div>
          <h2 className="text-center p-1">Subscribe to Our Newsletter</h2>

          <div className=" flex flex-row justify-center">
            <div className=" bg-white rounded-lg flex flex-row items-center px-2">
              <input
                className="p-2 w-[70vw] md:w-[50vw] lg:w-[30vw] text-gray-500 text-center text-base focus:outline-none"
                placeholder="Please enter your mobile no"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
              />
              <span>
                <img
                  src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/line.png"
                  className="mr-2"
                />
              </span>
              <button className="bg-white text-gray-500" onClick={postPhone}>
                <span>
                  <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/arrow.png" />
                </span>
              </button>
            </div>
          </div>
          <h2 className="desk:hidden text-center py-5">
            Konsa College @ Copyright 2022
          </h2>
        </div>
      </div>
      <div className="mob:hidden desk:w-full desk:h-[50px] desk:flex desk:justify-center desk:items-center text-white bg-[#0e0e0e] md:bg-white md:text-gray-600">
        <h2 className="text-center ">Konsa College @ Copyright 2022</h2>
      </div>
    </div>
  );
};
export default CollegeFooter;
