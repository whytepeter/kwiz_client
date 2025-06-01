import React from "react";
import { Button } from "../ui/button";
import useQuestion from "@/hooks/useQuestion";
import useQuiz from "@/hooks/useQuiz";
import { hexToRgb } from "@/lib/utils";

export default function TakeQuizNav() {
  const { questions, selectedQuestionIndex } = useQuestion();

  const { quiz } = useQuiz();
  const colors = quiz?.theme?.colors;

  const optionContainerStyle = {
    borderColor: colors?.buttonContainer,
    color: colors?.buttonContainer,
    background: colors?.buttonContainer
      ? `rgba(${hexToRgb(colors.buttonContainer)}, 0.1)`
      : "transparent",
  };

  return (
    <nav className="sticky top-0 left-0  backdrop-blur-sm">
      <div className=" p-4 container mx-auto flex items-center gap- justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            style={{
              background: colors?.buttonContainer,
              color: colors?.buttonText,
            }}
            className="size-9 md:size-10 flex-shrink-0 flex items-center justify-center rounded-full  text-white font-medium text-sm"
          >
            JS
          </div>
          <div className="">
            <h3 style={{ color: colors?.heading }} className="text-sm ">
              Javascript
            </h3>
            <p className="text-xs font-light ">
              Questions{" "}
              {questions?.length > 0 && (
                <span className="font-normal">
                  {(selectedQuestionIndex as number) + 1} / {questions?.length}
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-3 md:gap-4 ">
            <div className="flex items-center gap-2 ">
              <i className="pi pi-stopwatch  " />
              <span className="text-base">5:00</span>
            </div>
            <Button style={optionContainerStyle} size="small">
              Submit
            </Button>
          </div>
          <span className="hidden md:inline font-light text-neutral-200">
            |
          </span>
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            <div
              style={{
                background: colors?.buttonContainer,
                color: colors?.buttonText,
              }}
              className="size-9 md:size-10 flex-shrink-0 flex items-center justify-center rounded-full  font-medium text-sm"
            >
              <i className="pi pi-user text-sm " />
            </div>
            <h3 style={{ color: colors?.heading }} className=" text-sm ">
              John Doe
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}
