import React from "react";

function toolsHead(props) {
  return (
    <>
      <div
        className="w-full h-[476px] md:h-[426px] relative"
        style={{ filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.25))" }}
      >
        <div className="absolute h-full w-full object-cover brightness-50">
          <img
            src={
              "https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/Percentile_Predictor.png"
            }
            alt="College Page Banner"
            className="h-full w-full"
          />
        </div>
        <div className="absolute w-full md:flex md:items-center md:flex-col">
          <div className="mt-14">
            <div className="text-white m-6 text-xl leading-6 mb-[.8rem] md:text-center">
              <div className="m-2 text-left text-white md:text-center md:text-2xl">Percentile Predictor</div>
              <div className="text-left text-white m-2 mt-6 md:text-center md:text-2xl">JEE Mains 2023</div>
            </div>
          </div>

          <div className="m-7 mt-14 md:mt-13 sm:mt-20 md:w-full">
            <p className="text-white md:w-[70vw] md:m-auto md:text-center">
              KonsaCollege introduces its percentile predictor, a helpful tool for engineering aspirants to determine their expected percentile. This innovative feature provides personalized insights and predictions based on the student's performance and helps them gauge their chances of getting into their desired college. With its user-friendly interface and accurate predictions, KonsaCollege's percentile predictor is a must-have tool for every aspiring engineer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default toolsHead;
