import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { QuestionType, QuestionTypeList } from "@/types/question";

import { Button } from "@/components/ui/button";
import useQuestion from "@/hooks/useQuestion";
import { QUESTION_TYPE_OPTIONS } from "@/constant";
import { generateUniqueId } from "@/lib/utils";

const dropdown = [...QUESTION_TYPE_OPTIONS];

export default function ChangeQuestionType() {
  const { getIconByType, selectedQuestion, updateSelectedQuestion } =
    useQuestion();

  if (!selectedQuestion) return "";

  const typeText = selectedQuestion?.type?.split("_").join(" ")?.toLowerCase();

  const handleSelectQuestionType = (item: QuestionTypeList) => {
    if (!item || item.type === selectedQuestion.type) return;

    const { options, ...rest } = selectedQuestion;

    const updatedOptions =
      item.type == QuestionType.MULTIPLE_CHOICE
        ? [
            {
              id: generateUniqueId(),
              text: "",
            },
            {
              id: generateUniqueId(),
              text: "",
            },
            {
              id: generateUniqueId(),
              text: "",
            },
            {
              id: generateUniqueId(),
              text: "",
            },
          ]
        : [];

    const updatedQuestion = {
      ...rest,
      options: updatedOptions,
      answer: "",
      type: item.type,
    };

    updateSelectedQuestion(updatedQuestion);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button block variant="outline" color="secondary-dark" size="small">
            <img src={getIconByType(selectedQuestion?.type)} alt="" />
            <span className="text-xs text-secondary-dark capitalize flex-1 text-left">
              {typeText}
            </span>
            <i className="pi pi-chevron-right text-xs " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44  bg-white/30 backdrop-blur-md">
          <DropdownMenuGroup className=" overflow-auto">
            {dropdown.map((item) => (
              <DropdownMenuItem
                onClick={() => handleSelectQuestionType(item)}
                className={`${
                  selectedQuestion?.type === item.type
                    ? " text-secondary font-semibold"
                    : ""
                } font-light gap-2 py-2 text-[0.8rem] hover:text-secondary`}
                key={item.type}
              >
                <img src={item.icon} alt="" />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
