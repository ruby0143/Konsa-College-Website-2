import React,{useState,useEffect} from "react";
import ToolsHead from "../components/toolsPage/toolsHead";
import ToolBody from "../components/toolsPage/toolBody";
import RightSection from "../components/ParticularCollege/RightSection";
import axios from "axios";
const ToolsPage = () => {

 

  return (
    <div>
      <ToolsHead />
      <div className="flex w-full">
        <div className="w-full md:w-[74%] flex items-center justify-center bg-white px-4 md:px-8">
          <ToolBody />
        </div>
        
      </div>
    </div>
  );
};

export default ToolsPage;
