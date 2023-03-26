import React, { useState, useEffect } from "react";
import Branches from "../components/toolsPage/branches";
import Rounds from "../components/toolsPage/rounds";
import Seat from "../components/toolsPage/seat";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const viewBranchWise = () => {
  const animatedComponents = makeAnimated();
  const [selectedSeat, setSeat] = useState("OPEN");
  const [selectedGender, setGender] = useState("Gender-Neutral");
  const [selectedRound, setRound] = useState("Last Round Only");
  const Gender = ["Gender-Neutral", "Female-only (including supernumerary)"];

  return (
    <>
      <div className="p-3 ">
        <div className="head md:p-5">
          <h2 className="text-2xl font-bold p-2">
            Analyse Branch-wise Cut-off Trends
          </h2>
          <p className="mt-2 ml-2">
            Compare the cut-offs for courses in a particular branch of
            engineering over 10 years in the JoSAA seat allocation process.
          </p>
          <p className="ml-2">
            This helps understand the popularity and perception of a branch
            among engineering aspirants, and thus helps understand the demand
            for a particular branch during the counselling process.
          </p>
        </div>
      </div>
      <div className="rankTpye md:px-10 md:w-[50%]">
        <div className="text-sm font-medium">Rank Type</div>
        <div className="py-1 flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className="flex items-center text-sm">
              <input
                id="default-radio-1"
                type="radio"
                value="Mains"
                name="rank"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => setRank(e.target.value)}
              />
              <label
                for="default-radio-1"
                className="ml-2 text-sm  text-gray-700 "
              >
                JEE (Main)
              </label>
            </div>
          </div>
          <div>
            <div class="flex items-center text-sm">
              <input
                id="default-radio-2"
                type="radio"
                value="Advance"
                name="rank"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cancel"
                onChange={(e) => setRank(e.target.value)}
              />
              <label
                for="default-radio-2"
                className="ml-2 text-sm  text-gray-700 "
              >
                JEE (Advance)
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="instituteType my-1 ml-5 md:w-[50%] md:px-5">
        <div className="flex justify-between text-sm font-medium">
          <span>Branches</span>
        </div>
        <div className="mt-1 text-sm">
          <Select
            onChange={(e) => {
              setInstitutes(e);
            }}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={Branches}
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-start text-sm">
        <div className="homeStates my-1 md:w-1/3 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Seat type</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
            onChange={(e) => {
              setSeat(e.target.value);
              setRequiredState(false);
            }}
          >
            {Seat.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
        <div className="homeStates my-1 md:w-1/3 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Gender</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
            onChange={(e) => {
              setGender(e.target.value);
              setRequiredState(false);
            }}
          >
            {Gender.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
        <div className="homeStates my-1 md:w-1/3 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Display rounds</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
            onChange={(e) => {
              setRound(e.target.value);
              setRequiredState(false);
            }}
          >
            {Rounds.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default viewBranchWise;
