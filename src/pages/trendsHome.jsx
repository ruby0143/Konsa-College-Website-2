import React, { useEffect, useState } from "react";
import InstCard from "../components/TrendAnalysis/InstCard";
import axios from "axios";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';



function trendsHome() {
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
    const [state, setState] = useState(null);
    const [colleges, setColleges] = useState([]);

    const [selectedStates, setSelectedStates] = useState([]);
    const [filteredColleges,setFilter] = useState([]);
    const [fStates,setFstates] = useState([]);

    const url = "https://konsa-college-backend.vercel.app";
    const animatedComponents = makeAnimated();

    const instTypes = [{ value: 'Indian Institute of Technology', label: 'IITs' }, { value: 'National Institute of Technology', label: 'NITs' }, { value: 'Indian Institute of Informatio Technology', label: 'IIITs' }];

    useEffect(() => {
        axios
            .get(
                url + "/branches"
            )
            .then((res) => {
                const arr = res.data;
                arr.forEach((ele) => {
                    const col = {college_name : ele.Institute, college_state : ele.college_state}
                    setColleges(function (prevState) {
                        return [...prevState, col];
                    });
                    setFilter(function (prevState) {
                        return [...prevState, col];
                    });
                });

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(()=>{
        var result = selectedStates.map(a => a.value);
        if(result.length === 0){
            setFilter(colleges);

        }
        else{
            console.log(result,"1");
            setFilter(colleges.filter(ele=>{
                return result.includes(ele.college_state);
            }))
        }
    },[selectedStates]);

   
    console.log(selectedStates, "working");
    return (
        <>
            <div className="p-3 ">
                <div className="head md:p-5">
                    <h2 className="text-2xl font-bold p-2">
                        View All Institutes
                    </h2>
                    <p className="p-2">
                        List of institutes participating in JoSAA.
                    </p>
                </div>
                <div className="options p-2 mt-2">
                    <div className="flex flex-col md:flex-row md:justify-between">

                        
                        <div className="homeStates my-3 md:w-[100%] md:px-5">
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

                <div className="body mt-3 flex justify-center flex-col items-center md:mx-6 lg:mx-8">
                    <div className="grid grid-cols-1 gap-4  xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                        {filteredColleges?.map((college) => {

                            return <InstCard instName={college.college_name} state={college.college_state} />;
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default trendsHome;