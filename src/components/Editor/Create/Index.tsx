import React from "react";
import LeftSidebar from "./Layout/LeftSidebar";
import RightSidebar from "./Layout/RightSidebar";
import TopNav from "./Layout/TopNav";
import QuestionBox from "./QuestionBox";

export default function Create() {
  return (
    <div
      style={{ height: "calc(100vh - 80px)" }}
      className="flex text-sm text-dark overflow-hidden   items-center justify-between gap-4 pt-12 md:pt-4"
    >
      <div className="h-full  w-full max-w-[220px] hidden lg:flex">
        <LeftSidebar />
      </div>

      <div className="h-full min-w-[500px] flex-1 flex flex-col gap-6 ">
        <TopNav />
        <QuestionBox />
      </div>

      <div className="h-full w-full max-w-[220px] hidden lg:flex">
        <RightSidebar />
      </div>
    </div>
  );
}
