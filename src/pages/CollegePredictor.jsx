import React, { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp,AiOutlineClose} from "react-icons/ai";
import axios from "axios";
import state from "../components/toolsPage/states";
import { CSVDownload } from "react-csv";

const CollegePredictor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [Eligibility, setEligibility] = useState("");
  const [Category, setCategory] = useState("");
  const [selectedGender, setGender] = useState("Gender-Neutral");
  const [rank, setRank] = useState("");
  const [pwd, setPwd] = useState(false);
  const [isError, setIsError] = useState(false);
  const [RankError, setRankError] = useState(false);
  const [CategoryError, setCategoryError] = useState(false);
  const [EligibilityError, setEligibilityError] = useState(false);
  // const [CasteError, setCasteError] = useState(false);
  // const [GenderError, setGenderError] = useState(false);
  // const [PwdError, setPwdError] = useState(false);
  const [res, setRes] = useState(false);
  const [predictedColleges, setPredictedColleges] = useState([]);
  const [mapColleges, setMapColleges] = useState([]);
  const [download, setDownload] = useState(false);
  const [dreamBtn, setDreamBtn] = useState(true);
  const [sureBtn, setSureBtn] = useState(false);
  const [safeBtn, setSafeBtn] = useState(false);

  // const url = "http://localhost:5000";
  const url = "https://konsa-college-backend.vercel.app";

  const handleValidationError = () => {
    if (
      rank === "" ||
      Eligibility === "" ||
      // selectedGender === "" ||
      Category === ""
    ) {
      setIsError(true);
    }

    if (isError) {
      if (rank === "") {
        setRankError("Rank required to be entered!");
      setIsError(false)
      setRank("")

      }

      if (Eligibility === "") {
        setEligibilityError("State required to be selected!");
      setIsError(false)
      setEligibility("")

      }
      if (Category === "") {
        setCategoryError("Category required to be selected!");
      setIsError(false)
      setCategory("")

      }
      // if (selectedGender === "") {
      //   setGenderError("Gender required to be selected!");
      // }
      // if (PwdError === "") {
      //   setPwdError("PwD required to be selected!");
      // }
      console.log("error m aya");
      return;
    } else if (
      rank !== "" &&
      Eligibility !== "" &&
      castes !== "" &&
      // selectedGender !== "" &&
      Category !== ""
    ) {
      handleSubmit();
      setIsError(false)

    }
  };

  const handleSubmit = () => {
    console.log(Category, rank, Eligibility, selectedGender);
    let temp1;
    let temp2;
    axios
      .post(url + "/collegePredictor", {
        Gender: selectedGender,
        Caste: Category,
      })
      .then((resp) => {
        let clg = resp?.data?.filter((clg) => {
          if (clg?.Opening_Rank.length > 0) {
            temp1 = clg.Opening_Rank;
            temp2 = clg.Closing_Rank;
            clg.Opening_Rank = Number.parseInt(temp1);
            clg.Closing_Rank = Number.parseInt(temp2);
            if (clg.Opening_Rank < rank && rank < clg.Closing_Rank) {
              return clg;
            }
          }
        });
        console.log("Dream", clg);
        setPredictedColleges(clg);
        setMapColleges(clg);
      })
      .catch((err) => {
        console.log(err);
      });
    setRes(true);
  };

  const handleDream = () => {
    console.log("Dream", predictedColleges);
    setDreamBtn(true);
    setSureBtn(false);
    setSafeBtn(false);
    setMapColleges(predictedColleges);
  };

  const handleSafe = async () => {
    let home = await predictedColleges?.filter((clg) => {
      if (
        clg.Institute.split(" ")[clg.Institute.split(" ").length - 1] ===
        Eligibility
      ) {
        return clg;
      }
    });
    console.log("safe", home);
    setSafeBtn(true);
    setDreamBtn(false);
    setSureBtn(false);
    setMapColleges(home);
  };

  const handleSure = async () => {
    let othclg = await predictedColleges?.filter((clg) => {
      if (
        clg.Institute.split(" ")[clg.Institute.split(" ").length - 1] !==
        Eligibility
      ) {
        return clg;
      }
    });
    console.log("sure", othclg);
    setSureBtn(true);
    setDreamBtn(false);
    setSafeBtn(false);
    setMapColleges(othclg);
  };
  const CategoryList = ["EWS", "OBC-NCL", "OPEN", "SC", "ST"];
  const castes = [
    "EWS (PwD)",
    "OBC-NCL (PwD)",
    "OPEN (PwD)",
    "SC (PwD)",
    "ST (PwD)",
  ];
  const skeleton=[0,1,2,3,4,5,6,7,8,9,10]

  return (
    <div
      className="bg-[#F5F5F5] relative "
      style={{ backgroundColor: res ? "rgba(0,0,0,0.6)" : null }}
    >
      {res && (
        <div className="absolute z-50 w-[70%] top-[50px] left-[230px] mob:w-[90%] bg-[#FCFCFC] h-[80%] flex flex-col p-5">
          <div className="w-full flex flex-row justify-between  ">
            <div className="w-9/12 flex flex-row items-center justify-start gap-x-10 cursor-pointer">
              <div
                className={
                  dreamBtn
                    ? "text-[#505050] font-semibold hover:text-[#505050]"
                    : "text-[#818181] font-semibold hover:text-[#505050]"
                }
                onClick={() => {
                  handleDream();
                }}
              >
                Dream(15)
              </div>
              <div
                className={
                  sureBtn
                    ? "text-[#505050] font-semibold hover:text-[#505050]"
                    : "text-[#818181] font-semibold hover:text-[#505050]"
                }
                onClick={() => {
                  handleSure();
                }}
              >
                Sure(20)
              </div>
              <div
                className={
                  safeBtn
                    ? "text-[#505050] font-semibold hover:text-[#505050]"
                    : "text-[#818181] font-semibold hover:text-[#505050]"
                }
                onClick={() => {
                  handleSafe();
                }}
              >
                Safe(15)
              </div>
            </div>
            <div className="w-3/12 flex flex-row justify-end gap-x-2">
              <button
                onClick={() => {
                  setDownload(true);
                }}
                className="bg-[#EE7C00] rounded-[2px] text-white p-[5px] px-4"
              >
                {download && (
                  <CSVDownload data={predictedColleges} target="_blank" />
                )}
                Download
              </button>
              <button
                onClick={() => {
                  if (res) {
                    setRes(false);
                    setRank("");
                    {
                      setEligibility("");
                      setCategory("");
                      // setPwd(false);
                      // setGender("Gender-Neutral");
                    }
                  }
                }}
                className="bg-[#EE7C00] rounded-[2px] text-white p-[5px] px-2"
              >
                <AiOutlineClose size={25} />
              </button>
            </div>
          </div>

          <div
            className="mt-2 p-4 rounded-[3px] flex items-center font-semibold  "
            style={{ backgroundColor: "rgba(238, 124, 0, 0.05)" }}
          >
            College
          </div>
          <div className="h-full overflow-x-hidden overflow-y-auto">
            {mapColleges.length > 0 ? (
              <>
                {mapColleges?.map((clg, id) => {
                  return (
                    <div key={id}>
                      <div className="w-full flex flex-row  items-center p-1">
                        <div className="w-[5%]">
                          <img
                            src={id % 2 === 0 ? "./cp1.svg" : "./redlogo.svg"}
                          ></img>
                        </div>
                        <div className="w-[75%] p-2 first-letter:flex flex-col">
                          <div className="text-sm">{clg.Institute}</div>
                          <div className="text-xs">
                            {clg.Academic_Program_Name}
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                  );
                })}
              </>
            ) : (
              <div
                role="status"
                className="w-full p-4 space-y-4  divide-y divide-gray-200  animate-pulse "
              >
                {skeleton?.map((item,i)=>{
                 return(<>
                  <div className="flex items-center justify-start gap-x-2 pt-2">
                  <div class="flex items-center justify-center h-10 w-10 bg-gray-300 rounded-full">
                    <svg
                      class="w-6 h-6 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="h-2.5 bg-gray-300 rounded-full  w-72 mb-2.5"></div>
                    <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
                  </div>
                  {/* <div className="h-2.5 bg-gray-300 rounded-full w-16"></div> */}
                </div>
                </>)
                })}
              </div>
            )}
          </div>
        </div>
      )}
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
      <div className="flex justify-center bg-[url('/cpbg.svg')] desk:bg-cover  mob:bg-cover mob:bg-no-repeat mob:bg-bottom">
        <div
          className={
            res
              ? "invisible"
              : "desk:w-[60%] mob:w-[80%]  bg-[#FFFFFF] flex desk:flex-row mob:flex-col mb-[50px] mob:mb-[150px]"
          }
          style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
        >
          <div
            className="desk:w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain bg-no-repeat"
            style={{ backgroundColor: res ? "rgba(0,0,0,0.5)" : null }}
          >
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
              type="number"
              required
              value={rank}
              placeholder="Enter Your Rank"
            ></input>
            {RankError !== "" && rank === "" && (
              <div className="text-red-600 mob:text-xs">{RankError}</div>
            )}

            <h6 className="mt-[25px] mob:mt-[15px] mob:text-[13px]">
              State Your Eligibility
            </h6>

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
            {EligibilityError !== "" && Eligibility === "" && (
              <div className="text-red-600 mob:text-xs">{EligibilityError}</div>
            )}

            <h6 className="mt-[25px] mob:mt-[15px] mob:text-[13px]">
              Your Category
            </h6>

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
            {CategoryError !== "" && Category === "" && (
              <div className="text-red-600 mob:text-xs">{CategoryError}</div>
            )}

            <div className="flex flex-col mt-[25px] mob:mt-[5px] justify-start">
              <div className="w-full">
                <h6 className=" mob:text-[13px] ">Gender</h6>
                <div className="flex w-full flex-row mt-[5px] gap-x-4">
                  <div className="w-[70%] flex  gap-x-2">
                    <input
                      checked="checked"
                      type="radio"
                      id="Gender"
                      name="gender"
                      value="Male"
                      onChange={() => setGender("Gender-Neutral")}
                    />
                    <label className="mob:text-[13px]">Male</label>
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
                    <label className="mob:text-[13px]">Female</label>
                  </div>
                </div>
              </div>
              {/* {GenderError !== "" && selectedGender === "" && (
                <div className="text-red-600 mob:text-xs">{GenderError}</div>
              )} */}
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
                        if (!pwd) {
                          setPwd(true);
                          setCategory("");
                        }
                      }}
                    />
                    <label className="mob:text-[13px]">Yes</label>
                  </div>
                  <div className="w-[30%] flex pl-1  gap-x-2">
                    <input
                      checked
                      type="radio"
                      id="pwd"
                      name="pwd"
                      value="No"
                      onChange={() => {
                        if (pwd) {
                          setPwd(false);
                          setCategory("");
                        }
                      }}
                    />
                    <label className="mob:text-[13px]">No</label>
                  </div>
                </div>
              </div>
            </div>
            {/* {PwdError !== "" && castes === "" && (
              <div className="text-red-600 mob:text-xs">{PwdError}</div>
            )} */}

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
                  onClick={() => handleValidationError()}
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