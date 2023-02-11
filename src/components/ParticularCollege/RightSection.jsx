import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import axios from "axios";
import RightNews from "../RightNav/RightNews";
import RightCounselling from "../RightNav/RightCounselling";
import RelatedColleges from "../RightNav/RelatedColleges";
import Subscribe from "../RightNav/Subscribe";

function RightSection(props) {
  

  return (
    <div className="flex-row px-4 lg:pl-12">
      <RightNews />
      <RightCounselling />
      <RelatedColleges />
      <Subscribe />
    </div>
  );
}

export default RightSection;
