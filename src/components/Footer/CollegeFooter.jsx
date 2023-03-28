import React, { useState } from "react";
import { FaLinkedinIn, FaGooglePlay } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const CollegeFooter = () => {
  const [phone, setPhone] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const postPhone = () => {
    const doc = {
      name: "",
      phone: phone,
    };
const url = "https://konsa-college-backend.vercel.app";


    axios
      .post(
        url+"/phone",
        doc
      )
      .then((res) => {
        console.log(res);
        setShowAlert(true);
        Swal.fire({
          title: "Congratulations!",
          text: "You have been subscribed!",
          animation: false,
          customClass: {
            popup: "animated bounceIn faster",
          },
          showConfirmButton: false,
          timer: 5000,
          onClose: () => setShowAlert(false),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Link = [
    { link: "ABOUT", route: "/soon" },
    { link: "PRIVACY POLICY", route: "/privacy-policy" },
    { link: "TERM OF USE", route: "/TermsAndConditions" },
    { link: "CONTACT US", route: "/soon" },
    { link: "SUPPORT US", route: "/soon" },
  ];
  return (
    <>
      <div className="w-full h-[8px] bg-[#EE7C00]"></div>

      <div div className="w-full bg-black desk:p-14">
        <div className="w-full flex mob:flex-col mob:justify-center desk:flex-row desk:justify-between h-min-[45vh] text-white">
          <div className="mob:hidden desk:w-1/3 ">
            <div className=" flex flex-col justify-start items-start ">
              <div className="desk:mt-[-10px]">
                <img
                  src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/KonsaCollege.png"
                  className="w-[200px] text-center"
                ></img>
              </div>

              <div className="px-4 mt-[-20px]">
                <p className="text-[13px] font-roboto text-[#FFFFFF] w-[300px] tracking-tight leading-4">
                  KonsaCollege is the ultimate destination for engineering
                  counseling and support, offering comprehensive guidance and
                  resources to help aspiring engineers achieve their goals.
                </p>
              </div>
            </div>
          </div>

          <div className="mob:w-full desk:w-1/3 desk:p-3 ">
            <div className=" mob:pt-5 desk:flex desk:flex-row desk:p-10 desk:flex-wrap desk:justify-start h-full  ">
              {Link.map((item, id) => {
                return (
                  <React.Fragment key={id}>
                    <NavLink key={id} to={item.route} target="_blank" rel="noopener noreferrer">
                      <div className="mob:text-center desk:w-[150px] font-roboto  text-[14px]">
                        {item.link}
                      </div>
                    </NavLink>
                    <br />
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="mob:w-full desk:w-1/3 flex flex-col justify-center gap-y-2 ">
            <div className=" flex flex-row justify-center mob:gap-x-4 desk:gap-x-6 text-black desk:order-4 desk:mt-2">
              <a target="_blank"
                href={
                  "https://play.google.com/store/apps/details?id=com.konsa.college&hl=en_IN&gl=US&pli=1"
                }
              >
                <FaGooglePlay
                  size={40}
                  className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
                />
              </a>
              <a target="_blank" href={"https://www.linkedin.com/company/konsa-college/"}>
                <FaLinkedinIn
                  size={40}
                  className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
                />
              </a>
              <a target="_blank" href={"https://instagram.com/konsacollege.in"}>
                <FiInstagram
                  size={40}
                  className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
                />
              </a>
              <a target="_blank" href={"mailto:tech@konsacollege.com"}>
                <IoIosMail
                  size={40}
                  className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
                />
              </a>
              <a target="_blank" href={"https://youtube.com/@konsacollege8914"}>
                <BsYoutube
                  size={40}
                  className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
                />
              </a>
            </div>

            <div className="mob:flex mob:justify-center desk:hidden">
              <img
                src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/KonsaCollege.png"
                alt="logo"
              ></img>
            </div>

            <h2 className="text-center  p-1">Subscribe to Our Newsletter</h2>

            <div className=" flex flex-row justify-center ">
              <div className=" bg-[#FCFCFC] rounded-md flex flex-row items-center px-2">
                <input
                  className="p-2 mob:w-[70vw] desk:w-[350px] text-[#9F9F9F] text-center text-base focus:outline-none"
                  placeholder="Please enter your mobile no"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                />
                <span className="text-[#575757]">
                  <img
                    src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/line.png"
                    className="mr-2 "
                  />
                </span>
                <button className="bg-white text-gray-500" onClick={postPhone}>
                  <span className="text-[#575757]">
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
      </div>

      <div className="mob:hidden desk:w-full desk:h-[40px] desk:flex desk:justify-center desk:items-center text-white bg-[#0e0e0e] md:bg-white md:text-gray-600">
        <h2 className="text-center font-poppins text-[#363636]">
          Konsa College @ Copyright 2022
        </h2>
      </div>
    </>
  );
};
export default CollegeFooter;
