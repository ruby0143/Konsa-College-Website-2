import React,{useState} from "react";
import { FaLinkedinIn, FaGooglePlay } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";

function Subscribe() {
  const [phone, setPhone] = useState();
  const url = "https://konsa-college-backend.vercel.app";


  const postPhone = () => {
    const doc = {
      name: "",
      phone: phone,
    };

    axios
      .post(
        url+"/phone",
        doc
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="subscribe my-[3rem] "
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
        bordeRadius: "10px",
      }}
    >
      <h3 className="text-center pt-5 text-[18px] font-semibold">
        Subscribe to Our Newsletter
      </h3>
      <div className=" flex justify-center p-3">
        <div
          className=" bg-[#FCFCFC] rounded-md flex flex-row items-center justify-center w-[100%]  "
          style={{
            boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <input
            className="px-2 text-[#9F9F9F] text-center text-base focus:outline-none lg:px-3"
            placeholder="Please enter your mobile"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          />
          <span className="text-[#575757]">
            <img
              src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/line.png"
              className="mr-1 p-1 lg:p-3 lg:mr-2"
            />
          </span>
          <button className="bg-white text-gray-500" onClick={postPhone}>
            <span className="text-[#575757]">
              <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/arrow.png" />
            </span>
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className=" flex flex-row justify-center  text-black desk:order-4 desk:mt-2 ">
          <a target="_blank"
            href={
              "https://play.google.com/store/apps/details?id=com.konsa.college&hl=en_IN&gl=US&pli=1"
            }
            className="px-1"
          >
            <FaGooglePlay
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
            />
          </a>
          <a target="_blank"
            href={"https://www.linkedin.com/company/konsa-college/"}
            className="px-1"
          >
            <FaLinkedinIn
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
            />
          </a>
          <a target="_blank" href={"https://instagram.com/konsacollege.in"} className="px-1">
            <FiInstagram
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-[#EE7C00] ease-in-out duration-300 hover:scale-105"
            />
          </a>
          <a target="_blank" href={"mailto:tech@konsacollege.com"} className="px-1">
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
      </div>
    </div>
  );
}

export default Subscribe;
