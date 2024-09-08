import React, { useEffect } from "react";
import AddQuestion from "../Question/AddQuestion";
import ListQuestionCard from "../Question/ListQuestionCard";
import useQuestion from "@/hooks/useQuestion";

export default function LeftSidebar() {
  const { selectedQuestion, setSelectedQuestion, questions } = useQuestion();

  useEffect(() => {
    if (!selectedQuestion && questions?.length) {
      setSelectedQuestion(questions[0]);
    }
  }, []);

  return (
    <div className="border rounded-lg w-full p-4 flex flex-col gap-4 ">
      <AddQuestion />

      <div className=" h-full  overflow-y-auto flex flex-col gap-4">
        {questions.map((quest, index) => (
          <ListQuestionCard
            key={quest._id}
            index={index + 1}
            question={quest}
          />
        ))}
      </div>
    </div>
  );
}
