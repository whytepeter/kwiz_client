import React from "react";
import Answer from "./Answer";
import Settings from "./Settings";
import Image from "./Image";
import ChangeQuestionType from "./ChangeQuestionType";
import useQuestion from "@/hooks/useQuestion";

export default function Content() {
  const { selectedQuestion } = useQuestion();
  return (
    <div className="flex flex-col gap-3 p-4 divide-y text-dark">
      {selectedQuestion && (
        <>
          <ChangeQuestionType />
          <Answer />
          <Settings />
          <Image />
        </>
      )}
    </div>
  );
}
