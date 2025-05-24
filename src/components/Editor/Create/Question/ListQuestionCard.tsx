import useQuestion from "@/hooks/useQuestion";
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
import Spinner from "@/components/base/Spinner";

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

export default function ListQuestionCard({ question, index }: PropsType) {
  const {
    getIconByType,
    selectedQuestion,
    setActiveQuestion,
    deleteQuestionHandler,
    addQuestionHandler,
  } = useQuestion();
  if (!question) return;

  const handleSelectQuestion = () => {
    setActiveQuestion(question);
  };

  const handleClick = (item: ListType) => {
    if (item.value == "delete") {
      return deleteQuestionHandler(question._id);
    } else if (item.value == "duplicate") {
      const { _id, __v, ...rest } = question;
      const payload = { ...rest };

      return addQuestionHandler(payload);
    }
  };

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
        <img src={getIconByType(question.type)} alt="" />
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
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(item);
                }}
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
