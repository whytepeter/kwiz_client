import React, { useEffect } from "react";
import AddQuestion from "../Question/AddQuestion";
import ListQuestionCard from "../Question/ListQuestionCard";
import useQuestion from "@/hooks/useQuestion";
import { useParams } from "next/navigation";
import Spinner from "@/components/base/Spinner";

export default function LeftSidebar() {
  const { initializeQuestions, questions, loading } = useQuestion();
  const { quiz_id } = useParams<{ quiz_id: string }>();

  useEffect(() => {
    initializeQuestions(quiz_id);
  }, []);

  return (
    <div className="border rounded-lg w-full p-4 flex flex-col gap-4 ">
      <AddQuestion />

      <div className=" h-full  overflow-y-auto flex flex-col gap-4">
        {loading && <Spinner className="mx-auto" />}
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
