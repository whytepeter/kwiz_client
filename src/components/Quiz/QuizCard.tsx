import { formatDate } from "@/lib/utils";
import { useDataStore } from "@/store/store";
import { Quiz } from "@/types/quiz";
import React from "react";
import QuizDropdown from "./QuizDropdown";

type PropType = {
  quiz?: Quiz;
};

export default function QuizCard({ quiz }: PropType) {
  const { quizDisplay } = useDataStore();

  return (
    <>
      {quizDisplay === "LIST" ? (
        <div className=" text-dark-300 text-sm border border-outline rounded-xl py-2 px-3 bg-background flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 h-9 w-9 bg-accent text-secondary-dark text-sm rounded-full flex items-center justify-center font-medium">
              MN
            </div>
            <h3 className="line-clamp-2">My new quiz</h3>
          </div>

          <div className="flex justify-between md:grid grid-cols-3 items-center gap-2">
            <div className="col-span-2  flex items-start gap-3 md:grid grid-cols-2">
              <div className=" ">36</div>
              <span className="text-dark-100 font-thin md:hidden">|</span>
              <div className="">{formatDate(new Date())}</div>
            </div>
            <div className="flex items-center justify-end ">
              <QuizDropdown>
                <span className="hover:bg-accent flex-shrink-0 w-8 h-8 cursor-pointer flex items-center justify-center rounded-full">
                  <img className="" src="/icons/ellipsis.svg" alt="" />
                </span>
              </QuizDropdown>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="aspect-[6/4] mx-auto w-full max-w-[300px] text-dark-300  border border-outline rounded-xl overflow-hidden bg-background flex flex-col ">
            <div className="flex-shrink-0 text-2xl flex-1 w-full h-auto bg-accent text-secondary-dark  flex items-center justify-center font-medium">
              MN
            </div>

            <div className="flex items-center justify-between gap-2 py-3 px-4">
              <div className="flex flex-col gap-0.5">
                <h3 className="line-clamp-2 text-sm lg:text-base">
                  My new quiz
                </h3>
                <span className="text-xs font-light text-dark-200">
                  36 no. of takes
                </span>
              </div>
              <QuizDropdown>
                <span className="flex-shrink-0 hover:bg-accent w-8 h-8 cursor-pointer flex items-center justify-center rounded-full">
                  <img className="" src="/icons/ellipsis.svg" alt="" />
                </span>
              </QuizDropdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
