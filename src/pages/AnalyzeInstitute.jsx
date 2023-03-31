import React, { useState, useEffect } from 'react';
import axios from "axios";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

function InstCutOff() {

    const animatedComponents = makeAnimated();
    const [selectedState, setState] = useState("AI");
    const [filteredBranches, setFilteredBranches] = useState([]);
    const [colleges, setColleges] = useState([]);
    const [branches, setBranches] = useState(new Map());
    const [selectedCollege, setSelectedCollege] = useState();
    const [selectedRank, setRank] = useState("");
    const [selectedBranch, setBranch] = useState([]);
    const [selectedCaste, setCaste] = useState("OPEN");
    const [selectedGender, setGender] = useState("Gender-Neutral");
    const [selectedRound, setRound] = useState("6");
    const [tableData, setTable] = useState([]);
    const [filteredColleges, setFcolleges] = useState([]);
    const [noData, setBool] = useState(false);

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
        { label: "Round 1", value: "1" },
        { label: "Round 2", value: "2" },
        { label: "Round 3", value: "3" },
        { label: "Round 4", value: "4" },
        { label: "Round 5", value: "5" },
    ]

    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

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
                    setFcolleges(function (prevState) {
                        return [...prevState, { value: col, label: col }];
                    });
                    const programs = ele.Array;
                    branches.set(col, programs);
                });


            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log(selectedRank, selectedState, selectedCollege, selectedBranch, selectedGender, selectedCaste, selectedRound, "bruh");

    const submit =
        (selectedState ? true : false) &&
        (selectedCollege ? true : false) &&
        (selectedCaste ? true : false) &&
        (selectedGender ? true : false);


    useEffect(() => {
        if (submit) {
            setTable([]);
            selectedCollege.forEach((college, idx) => {
                branches.get(college.value).forEach((br) => {
                    selectedBranch.push(college.value + " ," + br);
                })

                axios
                    .post(url + "/analyze", {
                        Institute: college.value,
                        Gender: selectedGender,
                        Caste: selectedCaste,
                        Quota: selectedState,
                        Round: selectedRound,
                    })
                    .then((resp) => {

                        const years = resp.data;
                        console.log(">>", years);


                        if (years.y20.length === 0 && years.y21.length === 0 && years.y22.length === 0) {
                            console.log("No data found");
                            setBool(true);
                        }
                        else {



                            let year2020 = {}, year2021 = {}, year2022 = {};
                            year2020["year"] = "2020";
                            year2021["year"] = "2021";
                            year2022["year"] = "2022";
                            years.y20?.forEach((ele, idx) => {
                                year2020[ele.Institute + " ," + ele.Academic_Program_Name] = ele.Closing_Rank;
                            })
                            setTable(function (prev) {
                                return [...prev, year2020];
                            })

                            years.y21?.forEach((ele, idx) => {
                                year2021[ele.Institute + " ," + ele.Academic_Program_Name] = ele.Closing_Rank;

                            })

                            setTable(function (prev) {
                                return [...prev, year2021];
                            })

                            years.y22?.forEach((ele, idx) => {
                                year2022[ele.Institute + " ," + ele.Academic_Program_Name] = ele.Closing_Rank;

                            })

                            setTable(function (prev) {
                                return [...prev, year2022];
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
        selectedRound,
    ]);



    console.log(selectedBranch, "bruh");
    console.log(tableData, "bruh");

    return (
        <>
            <div className="p-3 ">
                <div className="head md:p-6">
                    <h2 className="text-2xl font-bold p-2">
                        Analyze Institute-wise Cut-offs
                    </h2>
                    <hr />
                    <h3 className="p-2 mt-4 font-semibold">
                        Compare the cut-offs of various courses offered by an institute over 10 years in the JoSAA seat allocation process.
                        This helps understand the popularity and perception of programs offered by the institute, and thus helps understand the demand for a particular program in the institute during the counselling process.
                    </h3>
                </div>
                <div className="options p-2 mt-2">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="rankTpye md:px-7 my-3 md:w-[50%]">
                            <div className='font-medium'>Rank Type</div>
                            <div className="py-2 flex justify-between items-center">
                                <div className="flex justify-center items-center" >


                                    <div class="flex items-center my-3">
                                        <input id="default-radio-1" type="radio" value="Mains" name="rank" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => {
                                            setRank(e.target.value)
                                            setFcolleges(colleges.filter(ele => {
                                                const bool = ele.value.includes("Indian Institute of Technology");
                                                console.log(ele.value, bool);
                                                return !bool;
                                            }))

                                        }
                                        } />
                                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >JEE (Main)</label>
                                    </div>

                                </div>
                                <div>
                                    <div class="flex items-center my-3">
                                        <input id="default-radio-2" type="radio" value="Advance" name="rank" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cancel" onChange={(e) => {
                                            setRank(e.target.value)
                                            setFcolleges(colleges.filter(ele => {

                                                return ele.value.includes("Indian Institute of Technology");

                                            }))


                                        }
                                        } />

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
                        <div className="instTypes my-3 md:w-[100%] md:px-6">
                            <div className="flex justify-between">
                                <span className='font-medium'>Institutes</span>

                            </div>
                            <div className="mt-4">
                                <Select
                                    onChange={(e) => {
                                        setSelectedCollege(e);
                                        // console.log(e);                                      
                                        setTable([]);
                                        setBranch([]);
                                    }}
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    options={filteredColleges}
                                />
                            </div>

                        </div>

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
                                    setTable([]);
                                    setBranch([]);
                                }}
                            >

                                <option selected value="6">
                                    Round 6
                                </option>
                                {rounds.map((ele) => {
                                    return <option value={ele.value}>{ele.label}</option>
                                })}
                            </select>
                        </div>

                    </div>

                    <div className="chart mt-7 overflow-scroll" >
                        <ResponsiveContainer width="100%" height={400} >

                            <LineChart
                                id="chart"
                                data={tableData}
                                margin={{
                                    top: 0,
                                    right: 30,
                                    left: 0,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey={"year"} height={80}>
                                    <Label value={`Years (Round ${selectedRound})`} position="insideBottom" />
                                </XAxis>
                                <YAxis />
                                <Tooltip />
                                {tableData ? (
                                    <>
                                        {selectedBranch[0] ? (<Line type="monotone" dataKey={selectedBranch[0]} stroke={colorArray[0]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[1] ? (<Line type="monotone" dataKey={selectedBranch[1]} stroke={colorArray[1]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[2] ? (<Line type="monotone" dataKey={selectedBranch[2]} stroke={colorArray[2]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[3] ? (<Line type="monotone" dataKey={selectedBranch[3]} stroke={colorArray[3]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[4] ? (<Line type="monotone" dataKey={selectedBranch[4]} stroke={colorArray[4]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[5] ? (<Line type="monotone" dataKey={selectedBranch[5]} stroke={colorArray[5]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[6] ? (<Line type="monotone" dataKey={selectedBranch[6]} stroke={colorArray[6]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[7] ? (<Line type="monotone" dataKey={selectedBranch[7]} stroke={colorArray[7]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[8] ? (<Line type="monotone" dataKey={selectedBranch[8]} stroke={colorArray[8]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[9] ? (<Line type="monotone" dataKey={selectedBranch[9]} stroke={colorArray[9]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[10] ? (<Line type="monotone" dataKey={selectedBranch[10]} stroke={colorArray[10]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[11] ? (<Line type="monotone" dataKey={selectedBranch[11]} stroke={colorArray[11]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[12] ? (<Line type="monotone" dataKey={selectedBranch[12]} stroke={colorArray[12]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[13] ? (<Line type="monotone" dataKey={selectedBranch[13]} stroke={colorArray[13]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[14] ? (<Line type="monotone" dataKey={selectedBranch[14]} stroke={colorArray[14]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[15] ? (<Line type="monotone" dataKey={selectedBranch[15]} stroke={colorArray[15]} activeDot={{ r: 5 }} />) : null}

                                        {selectedBranch[16] ? (<Line type="monotone" dataKey={selectedBranch[16]} stroke={colorArray[16]} activeDot={{ r: 5 }} />) : null}
                                    </>
                                ) : null}

                            </LineChart>

                        </ResponsiveContainer>
                        {noData ? (<div className='absolute'>
                            <div>
                                <h1 className="mt-20 text-xl" >No Data Available</h1>
                            </div>

                        </div>) : null}


                    </div>

                </div>

            </div>
        </>
    )
}

export default InstCutOff