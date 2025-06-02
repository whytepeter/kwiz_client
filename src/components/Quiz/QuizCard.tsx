import { formatDate, hexToRgb, initials } from "@/lib/utils";
import { useDataStore } from "@/store/store";
import { Quiz } from "@/types/quiz";
import React from "react";
import QuizDropdown from "./QuizDropdown";

type PropType = {
  quiz: Quiz;
  onClick?: () => void;
  overridedDisplay?: boolean;
  hideEssentials?: boolean;
};

export default function QuizCard({
  quiz,
  onClick,
  overridedDisplay = false,
  hideEssentials = false,
}: PropType) {
  const { quizDisplay } = useDataStore();
  const colors = quiz?.theme?.colors;

  return (
    <>
      {quizDisplay === "LIST" && !overridedDisplay ? (
        <div
          style={{
            background: quiz?.theme?.image
              ? `url(${quiz?.theme.image}) no-repeat center/cover, ${
                  colors?.background || "#fff"
                }`
              : colors?.background || "#fff",

            color: colors.heading,
            fontFamily: quiz?.theme?.fontName,
          }}
          onClick={onClick}
          className=" text-dark-300 text-sm  rounded-xl py-2 px-3  flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-4"
        >
          <div className="flex items-center gap-3">
            <div
              style={{
                borderColor: colors?.option,
                color: colors?.option,
                background: colors.background,
              }}
              className="flex-shrink-0 h-9 w-9 bg-accent border-[0.5px] text-secondary-dark text-sm rounded-full flex items-center justify-center font-medium"
            >
              {initials(quiz.title)}
            </div>
            <h3 className="line-clamp-2">{quiz?.title || "n/a"}</h3>
          </div>

          <div className="flex justify-between md:grid grid-cols-3 items-center gap-2">
            <div className="col-span-2 text-center flex items-start gap-3 md:grid grid-cols-2">
              <div className=" ">{quiz?.noOfTake}</div>
              <span className="text-dark-100 font-thin md:hidden">|</span>
              <div className="">{formatDate(quiz?.updatedAt)}</div>
            </div>
            <div className="flex items-center justify-end ">
              <QuizDropdown quiz={quiz}>
                <span className="hover:bg-accent flex-shrink-0 w-8 h-8 cursor-pointer flex items-center justify-center rounded-full">
                  <img className="" src="/icons/ellipsis.svg" alt="" />
                </span>
              </QuizDropdown>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            color: colors?.option,
            background: colors.background,
            fontFamily: quiz?.theme?.fontName,
          }}
          onClick={onClick}
          className="cursor-pointer aspect-[6/4] w-full max-w-[300px]  rounded-xl overflow-hidden flex flex-col "
        >
          <div
            style={{
              background: quiz?.theme?.image
                ? `url(${quiz?.theme.image}) no-repeat center/cover, ${
                    colors?.background || "#fff"
                  }`
                : colors?.background || "#fff",

              color: colors.heading,
            }}
            className="flex-shrink-0 text-2xl flex-1 w-full h-auto bg-accent  flex items-center justify-center font-medium"
          >
            {initials(quiz.title)}
          </div>

          <div
            style={{
              borderColor: `rgba(${hexToRgb(colors.option)}, 0.1)`,
            }}
            className="flex items-center border-t-[0.5px] justify-between gap-2 py-3 px-4"
          >
            <div className="flex flex-col gap-0.5">
              <h3 className="line-clamp-2 text-sm lg:text-base">
                {quiz?.title}
              </h3>
              {!hideEssentials && (
                <span className="text-xs font-light ">
                  {quiz?.noOfTake || 0} no. of takes
                </span>
              )}
            </div>
            {!hideEssentials && (
              <QuizDropdown quiz={quiz}>
                <span className="flex-shrink-0 hover:bg-accent w-8 h-8 cursor-pointer flex items-center justify-center rounded-full">
                  <img className="" src="/icons/ellipsis.svg" alt="" />
                </span>
              </QuizDropdown>
            )}
          </div>
        </div>
      )}
    </>
  );
}
