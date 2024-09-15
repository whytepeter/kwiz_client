import React from "react";
import Answer from "./Answer";
import Settings from "./Settings";
import Image from "./Image";
import ChangeQuestionType from "./ChangeQuestionType";

export default function Content() {
  return (
    <div className="flex flex-col gap-3 p-4 divide-y text-dark">
      <ChangeQuestionType />
      <Answer />
      <Settings />
      <Image />
    </div>
  );
}
