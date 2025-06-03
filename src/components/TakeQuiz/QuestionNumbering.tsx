import useQuestion from "@/hooks/useQuestion";
import useQuiz from "@/hooks/useQuiz";
import { cn, hexToRgb } from "@/lib/utils";
import { Question } from "@/types/question";
import React from "react";

export default function QuestionNumbering() {
  const { quiz } = useQuiz();
  const colors = quiz?.theme?.colors;
  const { questions, selectedQuestionIndex, setActiveQuestion } = useQuestion();

  const handleChangeActiveQuestion = (question: Question, index: number) => {
    if (index == selectedQuestionIndex) return;
    setActiveQuestion(question);
  };

  const optionContainerStyle = {
    borderColor: colors?.buttonContainer,
    color: colors?.buttonContainer,
    background: colors?.buttonContainer
      ? `rgba(${hexToRgb(colors.buttonContainer)}, 0.1)`
      : "transparent",
  };

  return (
    <div className="flex items-center justify-center sm:justify-start gap-2 md:gap-3 flex-wrap">
      {questions?.map((q, index) => (
        <div
          key={index}
          onClick={() => handleChangeActiveQuestion(q, index)}
          style={optionContainerStyle}
          className={cn(
            "size-7 cursor-pointer backdrop-blur-sm flex items-center justify-center text-xs ",
            selectedQuestionIndex == index ? "font-medium border" : ""
          )}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
