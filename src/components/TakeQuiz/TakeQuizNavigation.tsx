import React from "react";
import { Button } from "../ui/button";
import useQuestion from "@/hooks/useQuestion";
import { cn, hexToRgb } from "@/lib/utils";
import useQuiz from "@/hooks/useQuiz";

export default function TakeQuizNavigation() {
  const { quiz } = useQuiz();
  const colors = quiz?.theme?.colors;
  const { questions, selectedQuestionIndex, setActiveQuestion } = useQuestion();

  const handleNext = () => {
    if (
      typeof selectedQuestionIndex !== "number" ||
      selectedQuestionIndex == questions?.length - 1
    )
      return;
    const nextIndex = selectedQuestionIndex + 1;
    const question = questions[nextIndex];

    setActiveQuestion(question);
  };

  const handlePrev = () => {
    if (typeof selectedQuestionIndex !== "number" || selectedQuestionIndex == 0)
      return;
    const nextIndex = selectedQuestionIndex - 1;
    const question = questions[nextIndex];

    setActiveQuestion(question);
  };

  const optionContainerStyle = (solid: boolean) => {
    return {
      borderColor: colors?.buttonContainer,
      color: solid ? "white" : colors?.buttonContainer,
      background: colors?.buttonContainer
        ? `rgba(${hexToRgb(colors.buttonContainer)} ${solid ? "" : ", 0.1"} )`
        : "transparent",
    };
  };

  return (
    <div className="flex items-center justify-end">
      <Button
        disabled={selectedQuestionIndex == 0}
        onClick={handlePrev}
        color="secondary"
        variant="text"
        style={optionContainerStyle(false)}
        className={cn(
          "backdrop-blur-sm rounded-r-none w-28",
          selectedQuestionIndex == 0 && "pointer-events-none"
        )}
      >
        <i className="pi pi-arrow-left text-sm" />
        Previous
      </Button>
      <div style={optionContainerStyle(false)} className="!bg-transparent">
        <Button
          disabled={selectedQuestionIndex == questions?.length - 1}
          onClick={handleNext}
          color="secondary"
          style={{
            color: colors?.buttonText,
            background: colors?.buttonContainer,
          }}
          className={cn(
            "rounded-l-none px-4  w-28",
            selectedQuestionIndex == questions?.length - 1 &&
              "pointer-events-none"
          )}
        >
          Next
          <i className="pi pi-arrow-right text-sm" />
        </Button>
      </div>
    </div>
  );
}
