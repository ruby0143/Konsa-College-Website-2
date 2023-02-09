import React from "react";
import toolHead from "../../assets/background/toolPageHeader.png";
function toolsHead(props) {
  return (
    <>
      <div
        className="w-full h-[476px] xxs:h-[400px] xs:h-[440px]  md:h-[400px] relative"
        style={{ filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.25))" }}
      >
        <div className="absolute h-full w-full object-cover">
          <img
            src={toolHead}
            alt="College Page Banner"
            className="h-full w-full"
          />
        </div>
        <div className="absolute w-full md:flex xs:items-center xs:flex-col">
          <div className="mt-10 md:mt-8">
            <div className="text-black m-4  text-xl leading-6 mb-[.8rem] xs:text-center">
              <div className="m-2  text-left text-2xl text-black font-medium xs:text-center xs:text-3xl md:text-5xl xs:my-5">Percentile Predictor</div>
              <div className="text-left text-black text-xl font-normal m-2 mt-3 xs:text-2xl xs:text-center md:text-3xl">JEE Mains 2023</div>
            </div>
          </div>

          <div className="m-6  mt-10 md:mt-12  sm:mt-20 md:w-full ">
            <p className="text-black text-md font-normal md:w-[82vw] md:m-auto xs:mx-3 xs:text-lg xs:text-center md:text-xl ">
            KonsaCollege introduces its percentile predictor, a helpful tool for engineering aspirants to determine their expected percentile. This innovative feature provides personalized insights and predictions based on the student's performance and helps them gauge their chances of getting into their desired college. With its user-friendly interface and accurate predictions, KonsaCollege's percentile predictor is a must-have tool for every aspiring engineer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}



export default toolsHead;
