import { useDataStore } from "@/store/store";
import React from "react";

export default function QuizHeader() {
  const { quizDisplay } = useDataStore();
  return (
    <div className="flex items-center justify-between gap-4 pr-4">
      <h4>Recent Quizzes</h4>

      {quizDisplay === "LIST" && (
        <div className="hidden md:grid grid-cols-3 items-center gap-2 text-sm text-dark-200  ">
          <div className=" ">No. of takes</div>
          <div className="">Date updated</div>
          <div></div>
        </div>
      )}
    </div>
  );
}
