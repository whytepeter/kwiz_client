import useQuestion from "@/hooks/useQuestion";
import { useDataStore } from "@/store/store";
import React, { useEffect, useRef, useState } from "react";
import OptionBox from "./OptionBox";
import EmptyState from "@/components/base/EmptyState";

export default function QuestionBox() {
  const { quiz } = useDataStore();
  const colors = quiz?.theme?.colors;

  const { selectedQuestionId } = useDataStore();
  const {
    selectedQuestion,
    updateSelectedQuestion,
    selectedQuestionIndex,
    questions,
  } = useQuestion();
  const questionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.focus();
    }
  }, [selectedQuestionId]);

  const handleQuestionChange = (text: string) => {
    if (!selectedQuestion) return;
    updateSelectedQuestion({ ...selectedQuestion, question: text });
  };

  const handleDescriptionChange = (text: string) => {
    if (!selectedQuestion) return;
    updateSelectedQuestion({ ...selectedQuestion, description: text });
  };

  return (
    <>
      <div
        style={{
          background: quiz?.theme?.image
            ? `url(${quiz?.theme.image}) no-repeat center/cover, ${
                colors?.background || "#fff"
              }`
            : colors?.background || "#fff",
        }}
        className="overflow-hidden w-full h-[90%] border p-4  relative flex flex-col gap-4"
      >
        {selectedQuestion && (
          <>
            {selectedQuestionIndex !== undefined && (
              <div
                style={{
                  borderColor: colors?.option,
                  color: colors?.option,
                }}
                className="absolute top-5 left-5 w-7 h-7 border border-secondary-dark text-secondary-dark flex items-center justify-center "
              >
                {selectedQuestionIndex + 1}
              </div>
            )}

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
                  style={{
                    color: colors?.heading,
                    caretColor: colors?.option,
                  }}
                  className="appearance-none bg-transparent text-xl  focus:outline-none "
                />
                <input
                  onChange={(e) => handleDescriptionChange(e.target.value)}
                  value={selectedQuestion.description}
                  type="text"
                  name="description"
                  placeholder="Description (optional)"
                  style={{ color: colors?.heading }}
                  className="appearance-none opacity-90 bg-transparent focus:outline-none text-xs italic font-light "
                />
              </div>

              <OptionBox />
            </div>
          </>
        )}

        {!selectedQuestion && !questions?.length && (
          <div className="flex items-center justify-center h-full w-full">
            <EmptyState />
          </div>
        )}
      </div>
    </>
  );
}
