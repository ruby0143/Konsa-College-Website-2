import React from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";

function toolsHead(props) {
  return (
    <>
      <div
        className="w-full h-[376px] relative"
        style={{ filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.25))" }}
      >
        <div className="absolute h-full w-full brightness-50">
          <img
            src={
              "https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/Percentile_Predictor.png"
            }
            alt="College Page Banner"
            className="h-full w-full"
          />
        </div>
        <div className="absolute ">
          <div className="mt-14">
            <div className="text-white m-6 text-xl leading-6 mb-[.8rem] md:text-center">
              <div className="m-2 text-left text-white">Percentile Predictor</div>

              <div className="text-left text-white m-2 mt-6">JEE Mains 2023</div>
            </div>
          </div>

          <div className="m-7 mt-16 sm:mt-20">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat
              tellus pellentesque sodales eget quam enim. Risus et diam quis
              risus nunc ut porttitor tellus imperdiet. Id nunc turpis donec
              aliquam amet aliquam quam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default toolsHead;
