import React, { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import axios from "axios";
import state from "../components/toolsPage/states";

const CollegePredictor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [Eligibility, setEligibility] = useState("");
  const [Category, setCategory] = useState("");
  const [selectedGender, setGender] = useState("Gender-Neutral");
  const [data, setData] = useState();
  const [rank, setRank] = useState();
  const [pwd, setPwd] = useState(false);

  const url = "https://konsa-college-backend.vercel.app";

  useEffect(() => {
    let temp1;
    let temp2;
    axios
      .get(url + "/allrounds")
      .then((resp) => {
        let clg = resp?.data?.filter((clg) => {
          if (clg?.Opening_Rank.length > 0) {
            temp1 = clg.Opening_Rank;
            temp2 = clg.Closing_Rank;
            clg.Opening_Rank = Number.parseInt(temp1);
            clg.Closing_Rank = Number.parseInt(temp2);
            return clg;
          }
        });
        setData(clg);
        console.log(clg);
      })
      .catch((err) => {
        console.log(err);
      });

   
  }, [setPwd, setCategory]);

  const handleSubmit = () => {
    console.log(Category)
    // let filter = data?.filter((clg) => {
    //   if (
    //     clg.Seat_Type === Category &&
    //     clg.Gender === selectedGender &&
    //     clg.Opening_Rank > rank &&
    //     rank < clg.Closing_Rank
    //   ) {
    //     return clg;
    //   }
    // });

    // let homeclg = filter?.filter((clg) => {
    //   if (
    //     clg.Institute.split(" ")[clg.Institute.split(" ").length - 1] ===
    //     Eligibility
    //   ) {
    //     return clg;
    //   }
    // });
    // let othclg = filter?.filter((clg) => {
    //   if (
    //     clg.Institute.split(" ")[clg.Institute.split(" ").length - 1] !==
    //     Eligibility
    //   ) {
    //     return clg;
    //   }
    // });

    // console.log(filter, homeclg, othclg);
  };

  const CategoryList = ["EWS", "OBC-NCL", "OPEN", "SC", "ST"];

  const castes = [
    "EWS (PwD)",
    "OBC-NCL (PwD)",
    "OPEN (PwD)",
    "SC (PwD)",
    "ST (PwD)",
  ];

  return (
    <div className="bg-[#F5F5F5]">
      <h2 className="pt-[30px] mob:pt-[16px] font-roboto font-bold mob:font-semibold text-[32px] mob:text-[18px] text-[#3C3B3B] text-center tracking-wider">
        College Predictor
      </h2>
      <div className=" flex justify-center mb-[50px] mob:mb-[40px]">
        <p className="text-center w-[80%]  mt-[10px] mob:mt-[8px] text-xl mob:text-base font-normal mob:font-light text-[#3C3B3B] desk:leading-6 mob:leading-4 desk:tracking-wider">
          Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus
          pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut
          porttitor tellus imperdiet. Id nunc turpis donec aliquam .
        </p>
      </div>
      <div className=" flex justify-center bg-[url('/cpbg.svg')] desk:bg-cover  mob:bg-cover mob:bg-no-repeat mob:bg-bottom">
        <div
          className="desk:w-[60%] mob:w-[80%]  bg-[#FFFFFF] flex desk:flex-row mob:flex-col mb-[50px] mob:mb-[150px]"
          style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="desk:w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain bg-no-repeat">
            <h4 className="mt-[18px] mob:mt-[11px] text-center font-bold text-sm mob:font-medium">
              Enter your JEE Mains 2023 Details
            </h4>
            <h6 className="mt-[25px] mob:mt-[20px] mob:text-[13px]">
              Your Rank
            </h6>
            <input
              onChange={(e) => setRank(e.target.value)}
              className="rounded-[2px] bg-[#FFFFFF] mt-[6px] text-[#ACACAC] text-sm mob:text-xs tracking-wide focus:outline-none w-full p-[6px]"
              style={{
                boxShadow:
                  "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                border: "0.760417px solid #CCCCCC",
              }}
              type="text"
              placeholder="Enter Your Rank"
            ></input>

            <h6 className="mt-[25px] mob:mt-[15px] mob:text-[13px]">State Your Eligibility</h6>

            <div
              className="relative flex flex-row mt-[6px] justify-start items-center w-full p-[6px] rounded-[2px] bg-[#ffffff]"
              style={{ border: "1px solid #D3D3D3" }}
            >
              <button
                className="text-[#ACACAC] text-sm tracking-wide w-[90%] flex justify-start"
                onClick={() => {
                  setIsOpen((prevState) => !prevState);
                }}
              >
                {Eligibility !== "" ? (
                  <p className="text-[#ACACAC] text-sm mob:text-xs tracking-wide ">
                    {Eligibility}
                  </p>
                ) : (
                  <p className="text-[#ACACAC] text-sm mob:text-xs tracking-wide">
                    Enter Your State
                  </p>
                )}
              </button>
              {!isOpen ? (
                <AiOutlineDown className="text-[#ACACAC] w-[10%]" />
              ) : (
                <AiOutlineUp className="text-[#ACACAC] w-[10%]" />
              )}

              {isOpen && (
                <div className="absolute top-[35px] left-0 right-[1px] w-full z-50 text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5]">
                  {state.map((state) => {
                    return (
                      <div
                        key={state.key}
                        className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                        onClick={() => {
                          setEligibility(state.name);
                          setIsOpen(false);
                        }}
                      >
                        {state.name}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <h6 className="mt-[25px] mob:mt-[15px] mob:text-[13px]">Your Category</h6>

            <div
              className="relative flex flex-row mt-[8px] justify-start  items-center w-full p-[6px] rounded-[2px] bg-[#ffffff]"
              style={{ border: "1px solid #D3D3D3" }}
            >
              <button
                className="text-[#ACACAC] text-sm tracking-wide w-[90%] flex justify-start"
                onClick={() => {
                  setIsOpens((prevState) => !prevState);
                }}
              >
                {Category !== "" ? (
                  <p className="text-[#ACACAC] text-sm mob:text-xs tracking-wide">
                    {Category}
                  </p>
                ) : (
                  <p className="text-[#ACACAC] text-sm mob:text-xs tracking-wide ">
                    Select Your Category
                  </p>
                )}
              </button>
              {!isOpens ? (
                <AiOutlineDown className="text-[#ACACAC] w-[10%]" />
              ) : (
                <AiOutlineUp className="text-[#ACACAC] w-[10%]" />
              )}

              {isOpens && (
                <div className="absolute top-[35px] left-0 right-[1px] w-full z-50 text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5]">
                  {pwd ? (
                    <>
                      {castes.map((Category) => {
                        return (
                          <div
                            key={Category}
                            className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                            onClick={() => {
                              setCategory(Category);
                              setIsOpens(false);
                            }}
                          >
                            {Category}
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      {CategoryList.map((Category) => {
                        return (
                          <div
                            key={Category}
                            className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                            onClick={() => {
                              setCategory(Category);
                              setIsOpens(false);
                            }}
                          >
                            {Category}
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-col mt-[25px] mob:mt-[5px] justify-start">
              <div className="w-full">
                <h6 className=" mob:text-[13px] ">Gender</h6>
                <div className="flex w-full flex-row mt-[5px] gap-x-4">
                  <div className="w-[70%] flex  gap-x-2">
                    <input
                      type="radio"
                      id="Gender"
                      name="gender"
                      value="Male"
                      onChange={() => setGender("Gender-Neutral")}
                    />
                    <label className="mob:text-[13px]" for="html">Male</label>
                  </div>
                  <div className="w-[30%] flex gap-x-2">
                    <input
                      onChange={() =>
                        setGender("Female-only (including Supernumerary)")
                      }
                      type="radio"
                      id="Gender"
                      name="gender"
                      value="Female"
                    />
                    <label className="mob:text-[13px]" for="css">Female</label>
                  </div>
                </div>
              </div>
              <div className="w-full mt-[20px] mob:mt-[5px]">
                <h6 className=" mob:text-[13px] ">Are You Pwd</h6>
                <div className="w-full flex flex-row mt-[5px] ">
                  <div className="w-[70%] flex gap-x-2">
                    <input
                      type="radio"
                      id="pwd"
                      name="pwd"
                      value="Yes"
                      onChange={() => {
                        setPwd(true);
                        setCategory("Enter your Pwd Category")
                      }}
                    />
                    <label className="mob:text-[13px]" for="html">Yes</label>
                  </div>
                  <div className="w-[30%] flex pl-1  gap-x-2">
                    <input
                      type="radio"
                      id="pwd"
                      name="pwd"
                      value="No"
                      onChange={() => {
                        setPwd(false);
                      }}
                    />
                    <label className="mob:text-[13px]" for="css">No</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-[30px] mob:mt-[30px]">
              <div
                className="desk:w-[50%] bg-[#EE7C00] mob:px-8 rounded-[2px] mob:rounded-2xl flex justify-center"
                style={{
                  boxShadow:
                    "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                }}
              >
                <button
                  className="text-[#FFFFFF] p-1 mob:text-sm"
                  onClick={() => handleSubmit()}
                >
                  Predict Now
                </button>
              </div>
            </div>
          </div>

          <div
            className="desk:w-[47%]  flex justify-center p-10 items-center mob:hidden"
            style={{
              background:
                "linear-gradient(158.5deg, #FFC88B 5.02%, #EE7C00 101.84%)",
            }}
          >
            <p className="text-[#F3F3F3]  text-center  leading-9 tracking-wide text-[28px] font-bold">
              Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat
              tellus pellentes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegePredictor;
