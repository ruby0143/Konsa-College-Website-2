import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InstCard from "../components/TrendAnalysis/InstCard";
import axios from "axios";
import { saveAs } from "file-saver";
import { MdArrowRightAlt } from "react-icons/md";

const branches = () => {
  const [selectedBranch, setSelectedBranch] = useState("Agriculture");
  const [script, setScript] = useState([]);

  const filterData = async () => {
    const url = "https://konsa-college-backend.vercel.app";
    const data = await fetch(url + "/branches");
    const res = await data.json();
     console.log(res)
    // if (res.length > 0) {
    //   let array = [];

    //   for (let i = 0; i < res.length; i++) {
    //     // console.log("in first loop....");
    //     const ArrayString = res[i].Array
    //     // .substring(
    //     //   1,
    //     //   res[i].Array.length - 1
    //     // ).split(", '");
    //     // console.log(ArrayString)

    //     for (let x = 0; x < ArrayString.length; x++) {
    //       // console.log("in second loop....");
    //       let string;

    //       if (x === 0) {
    //         string = ArrayString[x]
    //           // .substring(1, ArrayString[x].length - 2)
    //           // .concat(")");
    //         if (!array.includes(string)) {
    //           array.push(string);
    //           // console.log(string);
    //         }
    //       } else {
    //         string = ArrayString[x]
    //           // .substring(0, ArrayString[x].length - 2)
    //           // .concat(")");
    //         if (!array.includes(string)) {
    //           array.push(string);
    //           // console.log(string);
    //         }
    //       }
    //     }
    //     console.log(array)
    //   }
    // }
    // setScript(res);
    // if (res.length > 0) {
    //   console.log(res);

    //   const blob = new Blob([JSON.stringify(res)], {
    //     type: "application/json",
    //   });
    //   saveAs(blob, "branches.json");
    // }
  };

  useEffect(() => {
    filterData();
  }, []);

  const Branches = [
    "Aerospace",
    "Agriculture",
    "Architecture",
    "Biotechnology",
    "Ceramic",
    "Chemical",
    "Circuital",
    "Civil",
    "Computer Science and IT",
    "Design",
    "Economics",
    "Electrical",
    "Electronics",
    "Energy",
    "Environmental",
    "Food",
    "Geology",
    "Industrial",
    "Instrumentation",
    "Life Science",
    "Material Science",
    "Mathematics",
    "Mechanical",
    "Minerals and Mining",
    "Miscellaneous",
    "Non-Circuital",
    "Ocean",
    "Petroleum",
    "Pharmaceutical",
    "Physics",
    "Textile ",
  ];
  return (
    <>
      <div className="p-3 flex flex-col">
        <div className="head md:p-5">
          <h2 className="text-2xl font-bold p-2">
            {selectedBranch ? `${selectedBranch}` : "View All Branches"}
          </h2>
          <p className={selectedBranch ? "hidden" : "p-2"}>
            List of branches available in JoSAA counselling.
          </p>
        </div>
        <div
          className={
            selectedBranch
              ? "hidden"
              : "flex flex-row flex-wrap justify-start items-start gap-5 m-7 mb-10"
          }
        >
          {Branches.map((branch, i) => {
            return (
              <div className="w-[255px] shadow-md rounded-md p-4 flex flex-row gap-3 justify-between items-center">
                <div
                  key={i}
                  className="text-center text-[16px] font-semibold"
                  onClick={() => setSelectedBranch(branch)}
                >
                  {branch}
                </div>
                <div className="text-blue-500">
                  <MdArrowRightAlt size={20} />
                </div>
              </div>
            );
          })}
        </div>
        <hr className="text-gray-500"></hr>
        <p className="text-xl font-bold m-7">
          Compare cut-offs of institutes offering programs in {selectedBranch}{" "}
          branch
        </p>
      </div>
      <div className="flex flex-row gap-5 ml-2 w-[70%]">
        <div className="options p-2 mt-2 w-1/2">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="instituteType my-3 w-full md:px-5">
              <div className="flex justify-between">
                <span>Institute Type</span>
              </div>
              <select
                name="instType"
                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
              >
                <option value={"#"} selected disabled>
                  Select Institute Type
                </option>
                <option value={"IITS"}>IITs</option>
                <option value={"NITS"}>NITs</option>
                <option value={"IIITS"}>IIITs</option>
              </select>
            </div>
          </div>
        </div>
        <div className="options p-2 mt-2 w-1/2">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="instituteType my-3 w-full md:px-5">
              <div className="flex justify-between">
                <span>Duration</span>
              </div>
              <select
                name="instType"
                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
              >
                <option value={"#"} selected disabled>
                  Select Institute Type
                </option>
                <option value={"4 Years"}>4 Years</option>
                <option value={"5 Years"}>5 Years</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="test-gray-500"></hr>
      </div>
    </>
  );
};

export default branches;
