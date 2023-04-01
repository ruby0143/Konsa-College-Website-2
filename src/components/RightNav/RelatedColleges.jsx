import React from "react";

function RelatedColleges() {
  return (
    <div
      className="mt-[3rem]"
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
        bordeRadius: "10px",
      }}
    >
      <h2 className="pt-5 text-[#303030] text-[18px] m-3 font-semibold">
        Related Colleges
      </h2>
      <div className="px-2">
        <hr />
      </div>
      <div className="p-1">
        <div className="flex justify-between m-[1rem] pb-[.5rem]">
          <img
            src="https://th.bing.com/th/id/R.ceca379fca1497cbfa932a5b0ca6df14?rik=WKOse3rAlhPgGQ&riu=http%3a%2f%2fwww.sit.iitd.ac.in%2fsite-assets%2fimages%2fiitd_logo.png&ehk=KPeib6S57WAjOE%2fltX5SgTpJZ3I2SjKMisRHxIr9lyo%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="lg:w-[21%] lg:h-[3.8rem] "
          />
          <a className="font-semibold ml-[3rem] pl-2 lg:ml-[.8rem] cursor-pointer lg:w-[75%]" href="https://konsa-college-website.vercel.app/college/iitd">
            Indian Institute of Technology Delhi
          </a>
        </div>
        <div className="flex justify-between m-[1rem] pb-[.5rem]">
          <img
            src="https://i.pinimg.com/originals/f7/b7/86/f7b786921ab3444631dba2ac1edb56f9.png"
            alt=""
            className="lg:w-[21%] lg:h-[3.8rem]"
          />
          <a className="font-semibold ml-[3rem] pl-2 lg:ml-[.8rem] cursor-pointer lg:w-[75%]" href="https://konsa-college-website.vercel.app/college/iitb">
            Indian Institute of Technology Bombay
          </a>
        </div>
        <div className="flex justify-between m-[1rem] pb-[.5rem]">
          <img
            src="https://elibraryiitbhu.remotexs.in/sites/default/files/logo_img.png"
            alt=""
            className="lg:w-[21%] lg:h-[3.8rem]"
          />
          <a className="font-semibold ml-[3rem] pl-2 lg:ml-[.8rem] cursor-pointer lg:w-[75%]" href="https://konsa-college-website.vercel.app/college/iitbhu">
            Indian Institute of Technology BHU
          </a>
        </div>
      </div>
    </div>
  );
}

export default RelatedColleges;
