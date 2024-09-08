import useQuestion from "@/hooks/useQuestion";
import { useDataStore } from "@/store/store";
import { Question } from "@/types/question";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListType } from "@/types";

const dropdown: ListType[] = [
  {
    label: "Duplicate",
    value: "duplicate",
    icon: "pi pi-clone",
  },
  {
    label: "Delete",
    value: "delete",
    icon: "pi pi-trash",
  },
];

interface PropsType {
  question: Question;
  index: number;
}

const getIcon = {
  MULTIPLE_CHOICE: "/icons/multi_choice.svg",
  "YES/NO": "/icons/yes_no.svg",
  SHORT_ANSWER: "/icons/short_answer.svg",
};

export default function ListQuestionCard({ question, index }: PropsType) {
  const { selectedQuestion, setSelectedQuestion } = useQuestion();
  if (!question) return;

  const handleSelectQuestion = () => {
    setSelectedQuestion(question);
  };

  const handleClick = (item: ListType) => {};

  return (
    <div
      onClick={handleSelectQuestion}
      className={`${
        selectedQuestion?._id === question?._id
          ? "bg-background border-l border-secondary-dark"
          : ""
      } group flex cursor-pointer text-xs items-center gap-2  p-2 pl-2.5 `}
    >
      <span className="flex-shrink-0">
        <img src={getIcon[question.type]} alt="" />
      </span>
      <span className="text-secondary-dark ">{index}</span>

      <span className="flex-1 text-[0.65rem] leading-3 line-clamp-2 text-dark-300 font-normal ">
        {question?.question}
      </span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span className="invisible group-hover:visible flex-shrink-0">
            <img className="rotate-90" src="/icons/ellipsis.svg" alt="" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-28  bg-white/30 backdrop-blur-md">
          <DropdownMenuGroup className=" overflow-auto">
            {dropdown.map((item) => (
              <DropdownMenuItem
                onClick={() => handleClick(item)}
                className={`${
                  item.value == "delete" ? "text-error-dark" : ""
                } font-light gap-2 py-2`}
                key={item.value}
              >
                <i className={`${item.icon}`} />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
