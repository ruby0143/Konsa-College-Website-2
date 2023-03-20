import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,  useLocation } from 'react-router-dom';
import BranchCard from "../components/TrendAnalysis/BranchCard";

function trendsBranches() {
    let college = useLocation().pathname;
    let toLink = useLocation().pathname;
    // console.log(toLink);
    college = college.split('/');
    let finalPath = "";
    for (let i = 2; i < college.length; i++) {
        if (college[i]) {
            finalPath += college[i];
        }
    }
    finalPath = finalPath.split('-').join(' ');
    // console.log(finalPath);


    const [branches, setBranches] = useState([]);
    const url = "http://localhost:5000";
   

  

    useEffect(() => {
        axios
            .get(
                url + "/branches"
            )
            .then((res) => {
                const arr = res.data;
                arr.forEach((ele) => {
                    const col = ele.Institute;
                    

                    const programs = ele.Array;
                    // const arrPgs = programs.split("'");
                    // console.log(programs);
                    if(col===finalPath){
                        setBranches(programs);
                    }
                });

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // console.log(branches,);
    return (
        <>
            <div className="p-3 ">
                <div className="head md:p-6">
                    <h2 className="text-2xl font-bold p-2">
                        {finalPath}
                    </h2>
                    <hr />
                    <h3 className="p-2 mt-4 font-semibold">
                        Analyze cut-off trends of programs offered by {finalPath}
                    </h3>
                </div>
                <div className="body my-3 flex justify-center flex-col items-center md:mx-6 lg:mx-8">
                    <div className="grid grid-cols-1 gap-10  xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                        {branches?.map((branch,idx)=>{
                            
                                const addToPath = branch.split(" ").join('-');
                                console.log(addToPath);
                                return (
                                    
                                        <BranchCard instName={branch} link={addToPath} />
                                    
                                );
                            
                            
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default trendsBranches