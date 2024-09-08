import useQuestion from "@/hooks/useQuestion";
import { useDataStore } from "@/store/store";
import React, { useEffect, useRef, useState } from "react";
import OptionBox from "./OptionBox";

export default function QuestionBox() {
  const { selectedQuestionId } = useDataStore();
  const { selectedQuestion, setSelectedQuestion, updateSelectedQuestion } =
    useQuestion();
  const questionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.focus();
    }
  }, [selectedQuestionId]);

  const handleQuestionChange = (text: string) => {
    if (!selectedQuestion) return;
    const { index, ...rest } = selectedQuestion;
    updateSelectedQuestion({ ...rest, question: text });
  };

  const handleDescriptionChange = (text: string) => {
    if (!selectedQuestion) return;
    const { index, ...rest } = selectedQuestion;
    updateSelectedQuestion({ ...rest, description: text });
  };

  return (
    <div className="w-full h-[90%] border p-4 bg-white relative flex flex-col gap-4">
      {selectedQuestion && (
        <>
          <div className=" w-7 h-7 border border-secondary-dark text-secondary-dark flex items-center justify-center ">
            {selectedQuestion?.index}
          </div>

          <div className="flex-1 h-full flex flex-col justify-center px-6 md:px-16 gap-4">
            <div className="flex flex-col gap-1">
              <input
                onChange={(e) => handleQuestionChange(e.target.value)}
                ref={questionRef}
                value={selectedQuestion.question}
                autoFocus
                type="text"
                name="question"
                placeholder="Your question here"
                className="appearance-none text-xl text-dark-300 focus:outline-none caret-secondary"
              />
              <input
                onChange={(e) => handleDescriptionChange(e.target.value)}
                value={selectedQuestion.description}
                type="text"
                name="description"
                placeholder="Description (optional)"
                className="appearance-none focus:outline-none text-xs italic font-light text-dark-200"
              />
            </div>

            <OptionBox />
          </div>
        </>
      )}
    </div>
  );
}
