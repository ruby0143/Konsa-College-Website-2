import React from "react";
import { Link } from "react-router-dom";

const tool = () => {
  const tools = [
    {
      img: "./tool1.svg",
      heading: "College Predictor",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/collegePredictor"
    },
    {
      img: "./tool2.svg",
      heading: "Exam Recommendation",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/examRecommender"
    },
    {
      img: "./tool1.svg",
      heading: "Preference List Generator",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/soon"
    },
    {
      img: "./tool1.svg",
      heading: "Trend Analysis Tool",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/trendsAnalysis"
    },
    {
      img: "./tool2.svg",
      heading: "College Comparator",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/soon"
    },
    {
      img: "./tool1.svg",
      heading: "Scheduler",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/scheduler"
    },
    {
      img: "./tool1.svg",
      heading: "Percentile Predictor",
      desc: "Lorem ipsum dolor sit amet consectetur. Laoreet non feugiat at viverra sagittis praesent rutrum habitasse. Congue turpis ipsum mattis eu posuere.",
      route: "/percentilePredictor"
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
        <div className="flex w-[90%] flex-row mt-20 mb-40">
          <div className="w-1/2 flex justify-start flex-col items-start py-20">
            <div>
              <div className="text-5xl font-[1000] tracking-wider leading-7 font-roboto">
                The <span className="text-[#EE7C00]">Smart</span>
              </div>
              <div className="text-5xl font-[1000] tracking-wider leading-7 font-roboto mt-5">
                Choice For <span className="text-[#EE7C00]">Future</span>
              </div>
              <div className="text-[#8A8A8A] text-sm mt-5 w-[455px]">
                Lorem ipsum dolor sit amet consectetur. Enim venenatis posuere
                dictumst convallis enim est id sem congue. Nunc ullamcorper
                arcu.
              </div>
              <div className="bg-white rounded-3xl w-[400px] flex justify-between items-center mt-5">
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
          <div className="w-1/2">
            <img src="./bg.svg"></img>
          </div>
        </div>
      </div>

      <div className="w-full  flex justify-center absolute top-[550px]">
        <div className="w-[90%] bg-[#0E0E0E] rounded-lg text-white flex flex-row justify-center items-center flex-wrap p-5 ">
          {BlackContainer.map((card,id)=>{return(
            <div key={id} className="flex flex-row w-1/3 justify-center items-center p-10 gap-5">
            <div
              className="bg-[#FFFFFF33] rounded-lg p-3"
            >
              <img className="w-[40px]" src={card.img}></img>
            </div>
            <div>
              <div className="text-[17px] font-bold">{card.heading}</div>
              <div className="text-[#FFFFFF99] text-xs w-[200px]">{card.desc}</div>
            </div>
          </div>
          )})}
        </div>
      </div>

     

      <div className="flex flex-col justify-center align-center  mt-[200px] mb-[100px]">

        <div>
          <h2 className="text-center font-roboto font-semibold text-3xl tracking-wider leading-7">
            Our Tools
          </h2>
        </div>
        <div>
          <p className="text-center font-poppins text-[#8A8A8A] tracking-wide leading-7 mt-4">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-20 p-5 mt-10 mb-10">
          {tools.map((card,id) => {
            return (
              <Link to={card.route} key={id} className="w-[350px] flex justify-center items-center flex-col p-5 rounded-md shadow-lg md:cursor-pointer">
                <img src={card.img}></img>
                <h3 className="text-xl font-semibold mt-3 text-[#3C3B3B] ">
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
