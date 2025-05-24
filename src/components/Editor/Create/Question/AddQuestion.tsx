import { Button } from "@/components/ui/button";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  CreateQuestion,
  QuestionType,
  QuestionTypeList,
} from "@/types/question";
import { generateUniqueId } from "@/lib/utils";

import { QUESTION_TYPE_OPTIONS } from "@/constant";
import useQuiz from "@/hooks/useQuiz";
import useQuestion from "@/hooks/useQuestion";

const dropdown = [...QUESTION_TYPE_OPTIONS];

export default function AddQuestion() {
  const { quiz } = useQuiz();
  const { addQuestionHandler } = useQuestion();

  const handleAddQuestion = (item: QuestionTypeList) => {
    if (!quiz) return;

    const question: CreateQuestion = {
      quizId: quiz._id,
      question: "question",
      description: "",
      type: item.type,
      points: quiz.setting.defaultPoint || 0,
      answer: "answer",
      options: [],
    };

    if (item.type == QuestionType.MULTIPLE_CHOICE) {
      question.options = [
        {
          id: generateUniqueId(),
          text: "text",
        },
        {
          id: generateUniqueId(),
          text: "text",
        },
        {
          id: generateUniqueId(),
          text: "text",
        },
        {
          id: generateUniqueId(),
          text: "text",
        },
      ];

      question.answer = question.options[0].id;
    }

    addQuestionHandler(question);

    console.log("question", question);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button block variant="outline" className="!bg-accent" size="xsmall">
            <i className="pi pi-plus" /> Add Content
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44  bg-white/30 backdrop-blur-md">
          <DropdownMenuGroup className=" overflow-auto">
            {dropdown.map((item) => (
              <DropdownMenuItem
                onClick={() => handleAddQuestion(item)}
                className="font-light gap-2 py-2 text-[0.8rem] hover:text-secondary"
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
