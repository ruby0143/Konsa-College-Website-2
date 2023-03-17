import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import InstCard from "../components/TrendAnalysis/InstCard";
import axios from "axios";


function trendsHome() {
    let states = ["Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"]
    const [state, setState] = useState(null);
    const [colleges, setColleges] = useState([]);
    const url = "https://konsa-college-backend.vercel.app";

    useEffect(() => {
        axios
            .get(
                url + "/branches"
            )
            .then((res) => {
                const arr = res.data;
                arr.forEach((ele) => {
                    const col = ele.Institute;
                    setColleges(function (prevState) {
                        return [...prevState, col];
                    });
                });

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
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
                        <div className="instituteType my-3 md:w-[50%] md:px-5">
                            <div className="flex justify-between">
                                <span>Institute Type</span>
                            </div>
                            <select name="instType" className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md ">
                                <option value={"#"} selected disabled>Select Institute Type</option>
                                <option value={"IITS"}>IITs</option>
                                <option value={"NITS"}>NITs</option>
                                <option value={"IIITS"}>IIITs</option>
                            </select>
                        </div>
                        <div className="homeStates my-3 md:w-[50%] md:px-5">
                            <div className="flex justify-between">
                                <span>Home State</span>

                            </div>
                            <select
                                name="states"
                                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
                                onChange={(e) => {
                                    setState(e.target.value);

                                }}
                            >
                                <option value="#" selected disabled>Select a state</option>
                                {states.map((state) => {
                                    return <option value={state}>{state}</option>;
                                })}
                            </select>

                        </div>

                    </div>
                </div>
                <div className="body mt-3 flex justify-center flex-col items-center md:mx-6 lg:mx-8">
                    <div className="grid grid-cols-1 gap-4  xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                        {colleges?.map((college)=>{
                            
                            return <InstCard instName={college} state={"Assam"} />;
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default trendsHome;