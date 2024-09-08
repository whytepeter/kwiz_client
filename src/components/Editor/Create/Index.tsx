import React from "react";
import LeftSidebar from "./Layout/LeftSidebar";
import RightSidebar from "./Layout/RightSidebar";
import TopNav from "./Layout/TopNav";
import QuestionBox from "./Question/QuestionBox";

export default function Create() {
  return (
    <div
      style={{ height: "calc(100vh - 80px)" }}
      className="flex text-sm text-dark overflow-hidden   items-center justify-between gap-4 pt-12 md:pt-4"
    >
      <div className="h-full  w-full max-w-[220px] hidden lg:flex">
        <LeftSidebar />
      </div>

      <div className="h-full w-full flex-1 flex flex-col md:gap-2 ">
        <TopNav />
        <div className="flex flex-col w-full h-full items-center justify-center ">
          <QuestionBox />
        </div>
      </div>

      <div className="h-full w-full max-w-[220px] hidden lg:flex">
        <RightSidebar />
      </div>
    </div>
  );
}
