import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const CollegePredictor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [Eligibility, setEligibilty] = useState("");
  const [Category, setCategory] = useState("");

  const EligibilityList = [
    { Eligibility: "Easy" },
    { Eligibility: "Moderate" },
    { Eligibility: "Hard" },
  ];

  const CategoryList = [
    { Category: "Easy" },
    { Category: "Moderate" },
    { Category: "Hard" },
  ];

  return (
<div>
    <div className="bg-[#F5F5F5] mob:hidden">
      <h2 className="pt-[80px] font-roboto font-bold text-[30px] text-[#3C3B3B] text-center tracking-wider">
        College Predictor
      </h2>
      <div className=" flex justify-center mb-[60px]">
        <p className="text-center w-[80%] mt-[30px] text-xl font-normal text-[#3C3B3B] leading-6 tracking-wider">
          Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus
          pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut
          porttitor tellus imperdiet. Id nunc turpis donec aliquam .
        </p>
      </div>
      <div className="flex justify-center bg-[url('/cpbg.svg')] bg-cover ">
        <div
          className="w-[60%] h-[550px] bg-[#FFFFFF] flex flex-row mb-[80px]"
          style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain">
            <h4 className="mt-[22px] text-center font-bold">
              Enter your JEE Mains 2023 Details
            </h4>
            <h6 className="mt-[35px]">Your Percentile</h6>
            <input
              className="rounded-[2px] bg-[#FFFFFF] mt-[8px] text-[#ACACAC] text-sm tracking-wide focus:outline-none w-full p-[6px]"
              style={{
                boxShadow:
                  "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                border: "0.760417px solid #CCCCCC",
              }}
              type="text"
              placeholder="Enter Your Percentile"
            ></input>

            <h6 className="mt-[18px]">State Your Eligibility</h6>

            <div
              className="relative flex flex-row mt-[8px] justify-start items-center w-full p-[6px] rounded-[2px] bg-[#ffffff]"
              style={{ border: "1px solid #D3D3D3" }}
            >
              <button
                className="text-[#ACACAC] text-sm tracking-wide w-[90%] flex justify-start"
                onClick={() => {
                  setIsOpen((prevState) => !prevState);
                }}
              >
                {Eligibility !== "" ? (
                  <p className="text-[#ACACAC] text-sm tracking-wide ">
                    {Eligibility}
                  </p>
                ) : (
                  <p className="text-[#ACACAC] text-sm tracking-wide ">
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
                  {EligibilityList.map((Eligibility) => {
                    return (
                      <div
                        key={Eligibility.Eligibility}
                        className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                        onClick={() => {
                          setEligibilty(Eligibility.Eligibility);
                          setIsOpen(false);
                        }}
                      >
                        {Eligibility.Eligibility}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <h6 className="mt-[18px]">Your Category</h6>

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
                  <p className="text-[#ACACAC] text-sm tracking-wide ">
                    {Category}
                  </p>
                ) : (
                  <p className="text-[#ACACAC] text-sm tracking-wide ">
                    Enter Your Category
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
                  {CategoryList.map((Category) => {
                    return (
                      <div
                        key={Category.Category}
                        className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                        onClick={() => {
                          setCategory(Category.Category);
                          setIsOpens(false);
                        }}
                      >
                        {Category.Category}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex flex-row mt-[18px] justify-start">
              <div className="w-[50%]">
                <h6>Gender</h6>
                <div className="flex flex-row mt-[8px] gap-x-4">
                  <input type="radio" id="Gender" name="gender" value="Male" />
                  <label for="html">Male</label>
                  <input
                    type="radio"
                    id="Gender"
                    name="gender"
                    value="Female"
                  />
                  <label for="css">Female</label>
                </div>
              </div>
              <div className="w-[50%]">
                <h6>Are You Pwd</h6>
                <div className="flex flex-row mt-[8px] gap-x-4">
                  <input type="radio" id="pwd" name="pwd" value="Yes" />
                  <label for="html">Yes</label>
                  <input type="radio" id="pwd" name="pwd" value="No" />
                  <label for="css">No</label>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-[30px]">
              <div
                className="w-[50%] bg-[#EE7C00] rounded-[2px] flex justify-center"
                style={{
                  boxShadow:
                    "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                }}
              >
                <button className="text-[#FFFFFF] p-1">Predict Now</button>
              </div>
            </div>
          </div>

          <div
            className="w-[47%] flex justify-center p-10 items-center mob:hidden"
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
    
    
    
    <div className="bg-[#F5F5F5] desk:hidden">
    <h2 className="pt-[80px] font-roboto font-bold text-[30px] text-[#3C3B3B] text-center tracking-wider">
      College Predictor
    </h2>
    <div className=" flex justify-center mb-[60px]">
      <p className="text-center w-[80%] mt-[30px] text-xl font-normal text-[#3C3B3B] leading-6 tracking-wider">
        Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus
        pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut
        porttitor tellus imperdiet. Id nunc turpis donec aliquam .
      </p>
    </div>
    <div className="flex justify-center bg-[url('/cpbg.svg')] bg-cover ">
      <div
        className="w-[60%] h-[550px] bg-[#FFFFFF] flex flex-row mb-[80px]"
        style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
      >
        <div className="w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain">
          <h4 className="mt-[22px] text-center font-bold">
            Enter your JEE Mains 2023 Details
          </h4>
          <h6 className="mt-[35px]">Your Percentile</h6>
          <input
            className="rounded-[2px] bg-[#FFFFFF] mt-[8px] text-[#ACACAC] text-sm tracking-wide focus:outline-none w-full p-[6px]"
            style={{
              boxShadow:
                "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
              border: "0.760417px solid #CCCCCC",
            }}
            type="text"
            placeholder="Enter Your Percentile"
          ></input>

          <h6 className="mt-[18px]">State Your Eligibility</h6>

          <div
            className="relative flex flex-row mt-[8px] justify-start items-center w-full p-[6px] rounded-[2px] bg-[#ffffff]"
            style={{ border: "1px solid #D3D3D3" }}
          >
            <button
              className="text-[#ACACAC] text-sm tracking-wide w-[90%] flex justify-start"
              onClick={() => {
                setIsOpen((prevState) => !prevState);
              }}
            >
              {Eligibility !== "" ? (
                <p className="text-[#ACACAC] text-sm tracking-wide ">
                  {Eligibility}
                </p>
              ) : (
                <p className="text-[#ACACAC] text-sm tracking-wide ">
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
                {EligibilityList.map((Eligibility) => {
                  return (
                    <div
                      key={Eligibility.Eligibility}
                      className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                      onClick={() => {
                        setEligibilty(Eligibility.Eligibility);
                        setIsOpen(false);
                      }}
                    >
                      {Eligibility.Eligibility}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <h6 className="mt-[18px]">Your Category</h6>

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
                <p className="text-[#ACACAC] text-sm tracking-wide ">
                  {Category}
                </p>
              ) : (
                <p className="text-[#ACACAC] text-sm tracking-wide ">
                  Enter Your Category
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
                {CategoryList.map((Category) => {
                  return (
                    <div
                      key={Category.Category}
                      className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                      onClick={() => {
                        setCategory(Category.Category);
                        setIsOpens(false);
                      }}
                    >
                      {Category.Category}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-row mt-[18px] justify-start">
            <div className="w-[50%]">
              <h6>Gender</h6>
              <div className="flex flex-row mt-[8px] gap-x-4">
                <input type="radio" id="Gender" name="gender" value="Male" />
                <label for="html">Male</label>
                <input
                  type="radio"
                  id="Gender"
                  name="gender"
                  value="Female"
                />
                <label for="css">Female</label>
              </div>
            </div>
            <div className="w-[50%]">
              <h6>Are You Pwd</h6>
              <div className="flex flex-row mt-[8px] gap-x-4">
                <input type="radio" id="pwd" name="pwd" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="pwd" name="pwd" value="No" />
                <label for="css">No</label>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-[30px]">
            <div
              className="w-[50%] bg-[#EE7C00] rounded-[2px] flex justify-center"
              style={{
                boxShadow:
                  "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
              }}
            >
              <button className="text-[#FFFFFF] p-1">Predict Now</button>
            </div>
          </div>
        </div>

        <div
          className="w-[47%] flex justify-center p-10 items-center mob:hidden"
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
</div>
  );
};

export default CollegePredictor;
