import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const tool = () => {

  const tools = [
    {
      img: "./tool1.svg",
      heading: "College Predictor",
      link: "/collegePredictor",
      desc: "Discover your ideal engineering college effortlessly based on your rank, thanks to our College Predictor Tool. Let the magic unfold as you find your perfect match!",
      route: "/collegePredictor",
    },
    {
      img: "./tool2.svg",
      heading: "Exam Recommendation",
      link: "/examRecommender",
      desc: "There are more than 100 engineering exams in India! Use our innovative tool to discover the best exams to target!",
      route: "/examRecommender",
    },
    {
      img: "./tool1.svg",
      heading: "Preference List Generator",
      desc: "Solving JEE Advance questions is still easier than making the best preference list, but not anymore with this tool!",
      route: "/preferenceListGenerator",
    },
    {
      img: "./tool1.svg",
      heading: "View All Institutes",
      desc: "View a list of all institutes in JOSSA counseling",
      route: "/trends",
    },
    {
      img: "./tool1.svg",
      heading: "View All Branches",
      desc: "View a list of all branches in JOSSA counseling",
      route: "/branches",
    },
    {
      img: "./tool1.svg",
      heading: "View Institute wise Cutoffs",
      desc: "Filter the cutoff data with selected Institutes",
      route: "/InstCutoff",
    },
    {
      img: "./tool2.svg",
      heading: "College Comparator",
      desc: "Stuck between two colleges? Use this tool to compare colleges and make informed decisions for your future.",
      route: "/collegeComparator",
    },
    {
      img: "./tool1.svg",
      heading: "Scheduler",
      desc: "Your go-to tool to help you stay updated on all exam and counseling dates! Never miss any deadlines again!",
      route: "/scheduler",
    },
    {
      img: "./tool2.svg",
      heading: "Rank Predictor",
      desc: "A comprehensive tool to help you take an approximate guess at your Rank based on your marks!",
      route: "/percentilePredictor",
    },
    {
      img: "./tool1.svg",
      heading: "View Branch wise Cutoffs",
      desc: "Filter the cutoff data with selected Branches",
      route: "/branch-wise-cut-off",
    },
    {
      img: "./tool2.svg",
      heading: "Trend Analysis Tool",
      desc: "Numbers can be confusing, but with this innovative tool, you can easily understand past cutoff trends with graphs!",
      route: "/trendsAnalysis",
    },
    {
      img: "./tool1.svg",
      heading: "Analyze Branch Wise Cut-Off Trends",
      desc: "Compare the cutoff trends of a course in a engineering branch",
      route: "/analyze-branch-wise-cut-off",
    },
    {
      img: "./tool2.svg",
      heading: "Analyze Institute Wise Cut-Off Trends",
      desc: "Compare the cutoff trends of a courses offered by an institute",
      route: "/analyze-branch-wise-cut-off",
    },
  ];
  const BlackContainer = [
    {
      img: "./tool3.svg",
      heading: "Search Your College",
      desc: "We have more than 300 colleges listed on our website. What's stopping you from exploring more? Discover your dream college NOW!",
    },
    {
      img: "./tool4.svg",
      heading: "Get Your College List",
      desc: "Crafting a preference list has never been easier! Say goodbye to the struggle with this tool!",
    },
    {
      img: "./tool5.svg",
      heading: "Certified Colleges",
      desc: "All the data on our platform is curated and authentic.",
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
              Introducing KC innovative tools, designed to assist you at every 
              stage of your counseling journey. Discover the perfect tool for your
               needs and take control of your future. Try them NOW!
                arcu. Explore our smart tools!
              </div>
              <div className="bg-white mobs:w-full rounded-3xl w-[400px] flex justify-between items-center mt-5">
                <div className="flex justify-center items-center p-1 gap-2 gap-x-3 ml-2">
                  <div className="w-[20px]">
                    <img src="./search.svg"></img>
                  </div>
                  <div>
                    <input
                      className="placeholder-[#0F335E] font-semibold outline-none"
                      placeholder="Search for a Tool..."
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

      <div className="w-full  flex justify-center absolute top-[640px] mobs:top-[750px]">
        <div className="w-[90%]  bg-[#0E0E0E] rounded-lg text-white flex flex-row mobs:flex-col justify-center items-center flex-wrap p-5 mobs:p-2">
          {BlackContainer.map((card, id) => {
            return (
              <div
                key={id}
                className="flex flex-row md:w-1/3 justify-center items-center py-2  gap-3"
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

      <div className="flex flex-col justify-center align-center mt-[180px] mobs:mt-[250px] mb-[50px] mobs:mb-[25px]">
        <div>
          <h2 className="text-center font-roboto font-semibold text-3xl mobs:text-2xl tracking-wider md:leading-7">
            Our Tools
          </h2>
        </div>
        <div>
          <p className="text-center font-poppins text-[#8A8A8A] mobs:text-[14px] px-3 tracking-wide md:leading-7 mt-4 mobs:mt-2">
            Have a look at our freshly brewed counseling tools!
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
