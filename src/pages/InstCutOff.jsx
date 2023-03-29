import React, { useState, useEffect } from 'react';
import axios from "axios";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import EnhancedTable from '../components/InstitueCutoffs/Table';

function InstCutOff() {

    const animatedComponents = makeAnimated();
    const [selectedState, setState] = useState("AI");
    const [filteredBranches, setFilteredBranches] = useState([]);
    const [colleges, setColleges] = useState([]);
    const [branches, setBranches] = useState(new Map());
    const [selectedCollege, setSelectedCollege] = useState();
    const [selectedRank, setRank] = useState("Mains");
    const [selectedBranch, setBranch] = useState();
    const [selectedCaste, setCaste] = useState("OPEN");
    const [selectedGender, setGender] = useState("Gender-Neutral");
    const [selectedRound, setRound] = useState("7");
    const [minRank, setMinRank] = useState(NaN);
    const [maxRank, setMaxRank] = useState(NaN);
    const [tableData, setTable] = useState([]);
    const [filteredData, setFilter] = useState([]);

    const castes = [
        "EWS",
        "EWS (PwD)",
        "OBC-NCL",
        "OBC-NCL (PwD)",
        "OPEN (PwD)",
        "SC",
        "SC (PwD)",
        "ST",
        "ST (PwD)",
    ];

    const states = [
        "OS",
        "HS",
        "GO",
        "JK"
    ];

    const rounds = [
        { label: "Last-Round Only", value: "6" },
        { label: "Round 1", value: "1" },
        { label: "Round 2", value: "2" },
        { label: "Round 3", value: "3" },
        { label: "Round 4", value: "4" },
        { label: "Round 5", value: "5" },
    ]
    const roundValues = {

    }

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

    console.log(selectedRank, selectedState, selectedCollege, selectedBranch, selectedGender, selectedCaste, selectedRound, minRank, maxRank, "bruh");

    const submit =
        (selectedState ? true : false) &&
        (selectedCollege ? true : false) &&
        (selectedBranch ? true : false) &&
        (selectedCaste ? true : false) &&
        (selectedGender ? true : false);


    useEffect(() => {
        if (submit) {
            setTable([]);
            selectedCollege.forEach((college, idx) => {

                axios
                    .post(url + "/trends", {
                        Institute: college.value,
                        Program: selectedBranch,
                        Gender: selectedGender,
                        Caste: selectedCaste,
                        Quota: selectedState,
                    })
                    .then((resp) => {

                        const years = resp.data;
                        console.log(">>", years);


                        if (years.y20.length === 0 && years.y21.length === 0 && years.y22.length === 0) {
                            console.log("No data found");

                        }
                        else {


                            years.y20?.forEach((ele, idx) => {
                                ele.Year = 2020;
                                setTable(function (prev) {
                                    return [...prev, ele];
                                })
                                if (ele.Round === selectedRound || selectedRound === "7") {

                                    setFilter(function (prev) {
                                        return [...prev, ele];
                                    })
                                }
                            })

                            years.y21?.forEach((ele, idx) => {
                                ele.Year = 2021;
                                setTable(function (prev) {
                                    return [...prev, ele];
                                })
                                if (ele.Round === selectedRound || selectedRound === "7") {

                                    setFilter(function (prev) {
                                        return [...prev, ele];
                                    })
                                }
                            })
                            years.y22?.forEach((ele, idx) => {
                                ele.Year = 2022;
                                setTable(function (prev) {
                                    return [...prev, ele];
                                })
                                if (ele.Round === selectedRound || selectedRound === "7") {

                                    setFilter(function (prev) {
                                        return [...prev, ele];
                                    })
                                }
                            })


                        }

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })

        }
    }, [
        selectedState,
        selectedCollege,
        selectedBranch,
        selectedCaste,
        selectedGender,
    ]);



    console.log(filteredData, "bruh");

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
                        <div className="rankTpye md:px-7 my-3 md:w-[50%]">
                            <div className='font-medium'>Rank Type</div>
                            <div className="py-2 flex justify-between items-center">
                                <div className="flex justify-center items-center" >


                                    <div class="flex items-center my-3">
                                        <input id="default-radio-1" type="radio" value="Mains" name="rank" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setRank(e.target.value)} />
                                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >JEE (Main)</label>
                                    </div>

                                </div>
                                <div>
                                    <div class="flex items-center my-3">
                                        <input id="default-radio-2" type="radio" value="Advance" name="rank" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cancel" onChange={(e) => setRank(e.target.value)} />
                                        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">JEE (Advance)</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="homeStates my-1 md:w-[50%] md:px-5">
                            <div className="flex justify-between">
                                <span className='font-medium'>Home State</span>
                                <span className="text-[10px] pt-1.5">
                                    To show home state quota ranks
                                </span>

                            </div>

                            <div className="mt-2">
                                <select
                                    name="states"
                                    className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
                                    onChange={(e) => {
                                        setState(e.target.value);

                                    }}
                                >

                                    <option selected value={"AI"}>
                                        {"AI"}
                                    </option>
                                    {states.map((state) => {
                                        return <option value={state}>{state}</option>;
                                    })}
                                </select>

                            </div>

                        </div>





                    </div>
                    <div className="flex flex-col  md:flex-row md:justify-between">
                        <div className="instTypes my-3 md:w-[50%] md:px-6">
                            <div className="flex justify-between">
                                <span className='font-medium'>Institutes</span>

                            </div>
                            <div className="mt-4">
                                <Select
                                    onChange={(e) => {
                                        setSelectedCollege(e);
                                        // console.log(e);
                                        setFilteredBranches([]);
                                        setTable([]);
                                        setFilter([]);
                                        e.forEach((ele, idx) => {
                                            const cbranches = branches.get(ele.value);
                                            cbranches.forEach(branch => {
                                                setFilteredBranches(function (prev) {
                                                    return [...prev, branch];
                                                })
                                            })
                                        })
                                    }}
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    options={colleges}
                                />
                            </div>

                        </div>
                        {selectedCollege ? (
                            <div className="program my-4 md:px-5 md:w-[50%]">
                                <div className="flex justify-between">
                                    <span className='font-medium'>Program</span>
                                </div>
                                <select
                                    name="programs"
                                    className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
                                    value={selectedBranch}
                                    onChange={(e) => {
                                        setBranch(e.target.value);
                                        setTable([]);
                                        setFilter([]);

                                    }}
                                >

                                    <option selected disabled>
                                        Select a program
                                    </option>
                                    {filteredBranches?.map((ele, idx) => {


                                        return <option value={ele}>{ele}</option>;

                                    })}
                                </select>

                            </div>
                        ) : null}
                    </div>
                    <div className="flex flex-col mt-2 md:flex-row md:justify-between">
                        <div className="seatType my-3 md:w-[33%] md:px-5">
                            <div className="flex justify-between pl-1">
                                <span className='font-medium'>Seat Type</span>
                            </div>
                            <select
                                name="castes"
                                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
                                onChange={(e) => {
                                    setCaste(e.target.value);
                                }}
                            >
                                <option selected value={"OPEN"}>
                                    {"OPEN"}
                                </option>
                                {castes.map((caste) => {
                                    return <option value={caste}>{caste}</option>;
                                })}
                            </select>

                        </div>

                        <div className="gender my-3 md:w-[33%] md:px-5">
                            <div className="flex justify-between">
                                <span className='font-medium'>Gender</span>
                            </div>
                            <select
                                name="gender"
                                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
                                onChange={(e) => {
                                    setGender(e.target.value);

                                }}
                            >
                                <option value="Female-only (including Supernumerary)">
                                    Female Only
                                </option>
                                <option selected value="Gender-Neutral">
                                    Gender Neutral
                                </option>
                            </select>
                        </div>

                        <div className="rounds my-3 md:w-[33%] md:px-5">
                            <div className="flex justify-between">
                                <span className='font-medium'>Rounds</span>
                            </div>
                            <select
                                name="rounds"
                                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
                                onChange={(e) => {
                                    setRound(e.target.value);
                                    const r = e.target.value + "";
                                    setFilter(tableData.filter(ele => {
                                        return ele.Round === r || e.target.value === "7";
                                    }));
                                }}
                            >

                                <option selected value="7">
                                    All Rounds
                                </option>
                                {rounds.map((ele) => {
                                    return <option value={ele.value}>{ele.label}</option>
                                })}
                            </select>
                        </div>

                    </div>

                    <div className="flex flex-col  md:flex-row md:justify-between">
                        <div className="minRank my-3 md:w-[50%] md:px-6">
                            <div className="flex justify-between">
                                <span className='font-medium ml-1'>Minimum Rank</span>

                            </div>
                            <div className="mt-2">
                                <input type="number" className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
                                    onChange={(e) => {
                                        setMinRank(e.target.value);
                                        const mn = parseInt(e.target.value);
                                        console.log(typeof mn,mn,'bruh');
                                        if (mn !== NaN) {
                                            setFilter(tableData.filter(ele => {

                                                return ele.Opening_Rank >= mn;
                                            }))
                                        }
                                        else if (maxRank !== NaN) {
                                            setFilter(tableData.filter(ele => {

                                                return ele.Opening_Rank <= maxRank;
                                            }))
                                        }



                                    }} />
                            </div>

                        </div>

                        <div className="maxRank my-3 md:w-[50%] md:px-6">
                            <div className="flex justify-between">
                                <span className='font-medium'>Maximum Rank</span>

                            </div>
                            <div className="mt-2">
                                <input type="number" className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md" onChange={(e) => {

                                    setMaxRank(e.target.value);
                                    const mx = parseInt(e.target.value);

                                    if (mx !== NaN) {
                                        setFilter(tableData.filter(ele => {

                                            return ele.Opening_Rank <= mx;
                                        }))
                                    }
                                    else if (minRank !== NaN) {
                                        setFilter(tableData.filter(ele => {

                                            return ele.Opening_Rank >= minRank;
                                        }))
                                    }



                                }} />
                            </div>

                        </div>

                    </div>
                </div>
                <div className='table p-2 mt-2 m-auto'>
                    <EnhancedTable data={filteredData} />
                </div>
            </div>
        </>
    )
}

export default InstCutOff