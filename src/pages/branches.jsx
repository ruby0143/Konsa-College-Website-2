import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Branches from "../components/toolsPage/branches";
import { useStateContext } from "../Context/useStateContext";
import { Link } from "react-router-dom";

const branches = () => {
  const { setBranchData } = useStateContext();
  const [selectedBranch, setSelectedBranch] = useState("");
  const [AllColleges, setAllColleges] = useState([]);
  const [institute, setInstitutes] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [mapCollege, setMapCollege] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  let filterClg = [];
  let array = [];
  let array1 = [];

  const animatedComponents = makeAnimated();
  let states = [
    { value: "4 Years", label: "4 Years" },
    { value: "5 Years", label: "5 Years" },
  ];
  const instTypes = [
    { value: "Indian Institute of Technology", label: "IITs" },
    { value: "National Institute of Technology", label: "NITs" },
    { value: "Indian Institute of Information Technology", label: "IIITs" },
  ];
  const getData = async () => {
    const url = "https://konsa-college-backend.vercel.app";
    // const url = "http://localhost:5000";
    const data = await fetch(url + "/branches");
    const res = await data.json();
    setAllColleges(res);
    // console.log(res)
  };

  const filterData = () => {
    for (let i = 0; i < AllColleges.length; i++) {
      for (let x = 0; x < AllColleges[i].Array.length; x++) {
        if (AllColleges[i].Array[x].includes(selectedBranch)) {
          filterClg.push({
            Institute: AllColleges[i].Institute,
            Array: AllColleges[i].Array[x],
          });
        }
      }
    }
  };

  if (AllColleges.length > 0 && selectedBranch.length > 0) {
    filterData();
  }

  useEffect(() => {
    getData();

    if (institute.length > 0 || selectedStates.length > 0) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }

    if (institute.length > 0) {
      for (let i = 0; i < institute.length; i++) {
        for (let x = 0; x < filterClg.length; x++) {
          if (filterClg[x].Institute.includes(institute[i].value)) {
            array.push(filterClg[x]);
          }
        }
      }
      setMapCollege(array);
      console.log("data", array);
    }
    if (selectedStates.length > 0) {
      for (let i = 0; i < selectedStates.length; i++) {
        for (let x = 0; x < array.length; x++) {
          if (array[x].Array.includes(selectedStates[i].value)) {
            array1.push(array[x]);
          }
        }
      }
      setMapCollege(array1);
      console.log("data", array1);
    }
  }, [institute, selectedStates]);

  console.log("Institute", institute, selectedStates);
  return (
    <>
      <div className="p-3 mobs:p-1 flex flex-col">
        <div className="head">
          <h2 className="text-2xl font-bold p-2 mobs:ml-2 ml-2">
            {selectedBranch ? `${selectedBranch}` : "View All Branches"}
          </h2>
          <p className={selectedBranch ? "hidden" : "p-2 md:px-4 my-4"}>
            List of branches available in JoSAA counselling.
          </p>
        </div>
        <div
          className={
            selectedBranch
              ? "hidden"
              : "flex flex-row flex-wrap justify-start items-start gap-5 m-7 mobs:mx-2 mb-10"
          }
        >
          {Branches.map((branch, i) => {
            return (
              <div
                style={{ display: i === 0 ? "none" : "" }}
                onClick={() => setSelectedBranch(branch)}
                className="w-[255px] mobs:w-full shadow-md rounded-md p-4 flex flex-row gap-3 justify-between items-center cursor-pointer"
              >
                <div key={i} className="text-center text-[16px] font-semibold">
                  {branch}
                </div>
                <div className="text-blue-500">
                  <MdArrowRightAlt size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedBranch.length > 0 && (
        <div>
          <hr className="text-gray-500"></hr>
          <p className="text-xl font-bold mx-7 mobs:text-base mobs:my-2">
            Compare cut-offs of institutes offering programs in {selectedBranch}{" "}
            branch
          </p>

          <div className="options md:p-2 mobs:px-2 md:mt-2">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="instituteType md:my-3 mobs:my-1 md:w-[50%] px-5">
                <div className="flex justify-between">
                  <span>Institute Type</span>
                </div>
                <div className="md:mt-4">
                  <Select
                    onChange={(e) => {
                      setInstitutes(e);
                    }}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={instTypes}
                  />
                </div>
              </div>
              <div className="homeStates md:my-3 mobs:mb-3 md:w-[50%] px-5">
                <div className="flex justify-between">
                  <span>Duration</span>
                </div>
                <div className="md:mt-4">
                  <Select
                    onChange={(e) => {
                      setSelectedStates(e);
                    }}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={states}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className=" flex flex-row flex-wrap gap-5 mx-7 mb-20 mt-3">
            {showFilter ? (
              <>
                {mapCollege.length > 0 &&
                  mapCollege.map((clg, i) => {
                    return (
                      <Link to={"/analyze-branch-wise-cut-off"}>
                        <div
                          className="rounded-md shadow-md w-[380px] mobs:w-full p-3  min-h-[100px]"
                          onClick={() => {
                            setBranchData({
                              data: clg,
                            });
                            // history.push('/analyze-branch-wise-cut-off')
                          }}
                        >
                          <div className="text-[17px] font-semibold text-blue-500">
                            {clg.Institute}
                          </div>
                          <div className="text-[12px]">{clg.Array}</div>
                        </div>
                      </Link>
                    );
                  })}
              </>
            ) : (
              <>
                {filterClg.length > 0 &&
                  filterClg.map((clg, i) => {
                    return (
                      <Link to={"/analyze-branch-wise-cut-off"}>
                        <div
                          className="rounded-md shadow-md w-[380px] mobs:w-full  p-3  min-h-[100px]"
                          onClick={() => {
                            setBranchData({
                              Branch: selectedBranch,
                              Duration: selectedStates,
                              data: clg,
                            });
                            // history.push('/analyze-branch-wise-cut-off')
                          }}
                        >
                          <div className="text-[17px] font-semibold text-blue-500">
                            {clg.Institute}
                          </div>
                          <div className="text-[12px]">{clg.Array}</div>
                        </div>
                      </Link>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default branches;
