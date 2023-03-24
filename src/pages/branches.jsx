import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const branches = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [AllColleges, setAllColleges] = useState([]);
  const [institute, setInstitutes] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [mapCollege,setMapCollege]=useState([])
  const [showFilter,setShowFilter]=useState(false)

  let filterClg = [];
  let array=[]
  let array1=[]


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
    const data = await fetch(url + "/branches");
    const res = await data.json();
    setAllColleges(res);
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

    if(institute.length>0 || selectedStates.length>0){
      setShowFilter(true)
    }

    if(institute.length>0){
      for(let i =0;i<institute.length;i++){
        for(let x=0;x<filterClg.length;x++){
          if(filterClg[x].Institute.includes(institute[i].value)){
            array.push(filterClg[x])
          }
        }
      }
      setMapCollege(array)
      console.log("data",array)
    }
    if(selectedStates.length>0){
      for(let i =0;i<selectedStates.length;i++){
        for(let x=0;x<array.length;x++){
          if(array[x].Array.includes(selectedStates[i].value)){
            array1.push(array[x])
          }
        }
      }
      setMapCollege(array1)
      console.log("data",array1)
    }
  }, [institute,selectedStates]);

  const Branches = [
    "Electrical",
    "Mechanical",
    "Aerospace",
    "Civil",
    "Electronics",
    "Metallurgy",
    "Mining",
    "Communication",
    "Food",
    "Instrumentation",
    "Computer Science",
    "Chemical",
    "Industrial",
    "Production",
    "Control",
    "Materials",
    "Electrical",
    "Energy",
    "Metallurgical",
    "Materials",
    "Data Science",
    "Bio Medical",
    "Ceramic",
    "Food Process",
    "Biomedical",
    "Agricultural",
    "Mechatronics",
    "Environmental",
    "Mineral",
    "Machinery",
    "Petroleum",
    "Biological",
    "Naval Architecture",
    "Bio",
    "Materials Science",
    "Production",
    "Infrastructure",
    "Computer Science",
    "Material Science",
    "Biotechnology",
    "Computational",
    "Computer",
    "Chemical and Biochemical",
    "Electronics System",
    "Biochemical",
    "Pharmaceutical",
    "Industrial and Systems",
    "Manufacturing Science",
    "Mining Safety",
    "Ocean",
    "Environmental Science",
  ];
  console.log("Institute", institute, selectedStates);
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
              <div className="w-[255px] shadow-md rounded-md p-4 flex flex-row gap-3 justify-between items-center cursor-pointer">
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
      </div>

      {selectedBranch.length > 0 && (
        <div>
          <hr className="text-gray-500"></hr>
          <p className="text-xl font-bold m-7">
            Compare cut-offs of institutes offering programs in {selectedBranch}{" "}
            branch
          </p>

          <div className="options p-2 mt-2">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="instituteType my-3 md:w-[50%] md:px-5">
                <div className="flex justify-between">
                  <span>Institute Type</span>
                </div>
                <div className="mt-4">
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
              <div className="homeStates my-3 md:w-[50%] md:px-5">
                <div className="flex justify-between">
                  <span>Home State</span>
                </div>
                <div className="mt-4">
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
          <div className=" flex flex-row flex-wrap gap-5 mb-20">


              {showFilter ? (<>
                {mapCollege.length > 0 &&
              mapCollege.map((clg, i) => {
                return (
                  <div className="rounded-md shadow-md w-[380px] p-3 ml-7 min-h-[100px]">
                    <div className="text-[17px] font-semibold text-blue-500">
                      {clg.Institute}
                    </div>
                    <div className="text-[12px]">{clg.Array}</div>
                  </div>
                );
              })}</>):(<>
                {filterClg.length > 0 &&
              filterClg.map((clg, i) => {
                return (
                  <div className="rounded-md shadow-md w-[380px] p-3 ml-7 min-h-[100px]">
                    <div className="text-[17px] font-semibold text-blue-500">
                      {clg.Institute}
                    </div>
                    <div className="text-[12px]">{clg.Array}</div>
                  </div>
                );
              })}</>)}
          </div>
        </div>
      )}
    </>
  );
};

export default branches;
