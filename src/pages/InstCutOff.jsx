import React, { useState, useEffect } from 'react';
import axios from "axios";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


function InstCutOff() {
    let states = [{ value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jammu and Kashmir", label: "Jammu and Kashmir" }, { value: "Jharkhand", label: "Jharkhand" }, { value: "Karnataka", label: "Karnataka" }, { value: "Kerala", label: "Kerala" }, { value: "Madhya Pradesh", label: "Madhya Pradesh" }, { value: "Maharashtra", label: "Maharashtra" }, { value: "Manipur", label: "Manipur" }, { value: "Meghalaya", label: "Meghalaya" }, { value: "Mizoram", label: "Mizoram" }, { value: "Nagaland", label: "Nagaland" }, { value: "Odisha", label: "Odisha" }, { value: "Punjab", label: "Punjab" }, { value: "Rajasthan", label: "Rajasthan" }, { value: "Sikkim", label: "Sikkim" }, { value: "Tamil Nadu", label: "Tamil Nadu" }, { value: "Telangana", label: "Telangana" }, { value: "Tripura", label: "Tripura" }, { value: "Uttarakhand", label: "Uttarakhand" }, { value: "Uttar Pradesh", label: "Uttar Pradesh" }, { value: "West Bengal", label: "West Bengal" }, { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" }, { value: "Chandigarh", label: "Chandigarh" }, { value: "Dadra and Nagar Haveli", label: "Dadra and Nagar Haveli" }, { value: "Daman and Diu", label: "Daman and Diu" }, { value: "Delhi", label: "Delhi" }, { value: "Lakshadweep", label: "Lakshadweep" }, { value: "Puducherry", label: "Puducherry" },
    ]
 
    const animatedComponents = makeAnimated();
    const [selectedStates, setSelectedStates] = useState([]);
    const [filteredBranches, setFilteredBranches] = useState([]);
    const [colleges, setColleges] = useState([]);
    const [branches, setBranches] = useState(new Map());
    const [selectedCollege,setSelectedCollege] = useState();
    

    const url = "https://konsa-college-backend.vercel.app";

    useEffect(() => {

        axios
            .get(
                url + "/branches"
            )
            .then((res) => {
                const arr = res.data;
                arr.forEach((ele, idx) => {

                    const col = ele.Institute;
                    setColleges(function (prevState) {
                        return [...prevState, { value: col, label: col }];
                    });

                    const programs = ele.Array;
                    const temp = [];
                    
                    


                    branches.set(col, programs);
                });

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    

    return (
        <>
            <div className="p-3 ">
                <div className="head md:p-6">
                    <h2 className="text-2xl font-bold p-2">
                        View Institute-wise Cut-offs
                    </h2>
                    <hr />
                    <h3 className="p-2 mt-4 font-semibold">
                        Filter by institute allows you to filter the cut-off data with the selected institutes and further narrow down with your choice of programs.
                    </h3>
                </div>
                <div className="options p-2 mt-2">
                    <div className="flex flex-col md:flex-row md:justify-between">


                        <div className="homeStates my-3 md:w-[50%] md:px-5">
                            <div className="flex justify-between">
                                <span>Home State</span>
                                <span className="text-[10px] pt-1.5">
                                    To show home state quota ranks
                                </span>

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
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="instTypes my-3 md:w-[50%] md:px-5">
                            <div className="flex justify-between">
                                <span>Institutes</span>

                            </div>
                            <div className="mt-4">
                                <Select

                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    options={colleges}
                                />
                            </div>

                        </div>
                        {selectedCollege ? (
                            <div className="program my-3 md:px-10 md:w-[50%]">
                                <div className="flex justify-between">
                                    <span>Program</span>
                                </div>
                                <Select

                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    options={colleges}
                                /> 
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstCutOff