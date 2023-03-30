import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const tool = () => {

  const tools = [
    {
      img: "./tool1.svg",
      heading: "College Predictor",
      link: "/collegePredictor",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/collegePredictor",
    },
    {
      img: "./tool2.svg",
      heading: "Exam Recommendation",
      link: "/examRecommender",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/examRecommender",
    },
    {
      img: "./tool1.svg",
      heading: "Preference List Generator",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/preferenceListGenerator",
    },
    {
      img: "./tool1.svg",
      heading: "View All Institutes",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/trends",
    },
    {
      img: "./tool1.svg",
      heading: "View All Branches",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/branches",
    },
    {
      img: "./tool1.svg",
      heading: "View Institute wise Cutoffs",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/InstCutoff",
    },
    {
      img: "./tool2.svg",
      heading: "College Comparator",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/collegeComparator",
    },
    {
      img: "./tool1.svg",
      heading: "Scheduler",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/scheduler",
    },
    {
      img: "./tool2.svg",
      heading: "Percentile Predictor",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/percentilePredictor",
    },
    {
      img: "./tool1.svg",
      heading: "View All Branches",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/branches",
    },
    {
      img: "./tool2.svg",
      heading: "Branch Wise Cut-Off",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/branch-wise-cut-off",
    },
    {
      img: "./tool1.svg",
      heading: "Analyze Branch Wise Cut-Off Trends",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/analyze-branch-wise-cut-off",
    },
  ];
  const BlackContainer = [
    {
      img: "./tool3.svg",
      heading: "Search Your College",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC.",
    },
    {
      img: "./tool4.svg",
      heading: "Get Your College List",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC.",
    },
    {
      img: "./tool5.svg",
      heading: "Certified Colleges",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC.",
    },
  ];
  return (
    <div className="flex flex-col w-100">
      <div className="bg-orange-50 relative w-100 flex justify-center">
        <div className="flex px-2 flex-row mobs:flex-col-reverse mt-20 mb-40">
          <div className="md:w-1/2 mobs:w-full flex justify-start flex-col items-start md:py-20 mobs:py-10">
            <div className="w-full">
              <div className="md:text-5xl mobs:text-4xl font-[1000] tracking-wider md:leading-7 font-roboto mobs:text-center">
                The <span className="text-[#EE7C00]">Smart</span>
              </div>
              <div className="md:text-5xl mobs:text-4xl font-[1000] tracking-wider md:leading-7 font-roboto md:mt-5 mobs:text-center">
                Choice For <span className="text-[#EE7C00]">Future</span>
              </div>
              <div className="text-[#8A8A8A] text-sm mt-5 md:w-[455px] mobs:w-full p-2 text-center">
                Lorem ipsum dolor sit amet consectetur. Enim venenatis posuere
                dictumst convallis enim est id sem congue. Nunc ullamcorper
                arcu.
              </div>
              <div className="bg-white mobs:w-full rounded-3xl w-[400px] flex justify-between items-center mt-5">
                <div className="flex justify-center items-center p-1 gap-2 gap-x-3 ml-2">
                  <div className="w-[20px]">
                    <img src="./search.svg"></img>
                  </div>
                  <div>
                    <input
                      className="placeholder-[#0F335E] font-semibold outline-none"
                      placeholder="Search for a Tools..."
                    />
                  </div>
                </div>
                <div className="bg-black text-white rounded-3xl px-5 py-3 text-[16px]">
                  <button>Continue</button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="./bg.svg"></img>
          </div>
        </div>
      </div>

      <div className="w-full  flex justify-center absolute top-[550px] mobs:top-[700px]">
        <div className="w-[90%]  bg-[#0E0E0E] rounded-lg text-white flex flex-row mobs:flex-col justify-center items-center flex-wrap p-5 mobs:p-2">
          {BlackContainer.map((card, id) => {
            return (
              <div
                key={id}
                className="flex flex-row md:w-1/3 justify-center items-center p-3 gap-3"
              >
                <div className="bg-[#FFFFFF33] rounded-lg p-1">
                  <img className="w-[40px] h-[40px]" src={card.img}></img>
                </div>
                <div>
                  <div className="text-[17px] font-bold">{card.heading}</div>
                  <div className="text-[#FFFFFF99] text-xs w-[200px]">
                    {card.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center align-center mt-[200px] mobs:mt-[280px] mb-[50px] mobs:mb-[25px]">
        <div>
          <h2 className="text-center font-roboto font-semibold text-3xl mobs:text-2xl tracking-wider md:leading-7">
            Our Tools
          </h2>
        </div>
        <div>
          <p className="text-center font-poppins text-[#8A8A8A] mobs:text-[14px] px-3 tracking-wide md:leading-7 mt-4 mobs:mt-2">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-20 mobs:gap-10 p-5 mt-10 mb-10 mobs:mt-5 mobs:mb-5">
          {tools.map((card, id) => {
            return (
              <Link
                to={card.route}
                key={id}
                className="w-[350px] flex justify-center items-center flex-col p-5 rounded-md shadow-lg md:cursor-pointer"
              >
                <img className="" src={card.img}></img>
                <h3 className="text-xl font-semibold mt-3 text-[#3C3B3B] text-center">
                  {card.heading}
                </h3>
                <p className="text-center text-xs tracking-wide mt-3 text-[#3C3B3B] mb-3 ">
                  {card.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default tool;
