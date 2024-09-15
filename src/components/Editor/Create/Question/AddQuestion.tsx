import { Button } from "@/components/ui/button";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CreateQuestion, QuestionTypeList } from "@/types/question";
import { useDataStore } from "@/store/store";
import { generateUniqueId } from "@/lib/utils";
import { useParams } from "next/navigation";

import { QUESTION_TYPE_OPTIONS } from "@/constant";

const dropdown = [...QUESTION_TYPE_OPTIONS];

export default function AddQuestion() {
  const { quiz_id } = useParams<{ quiz_id: string }>();
  const { quiz } = useDataStore();

  const handleAddQuestion = (item: QuestionTypeList) => {
    // if (!quiz) return;

    const question: CreateQuestion = {
      quizId: quiz_id,
      question: "",
      description: "",
      type: item.type,
      points: quiz?.setting.defaultPoint || 0,
      answer: "",
    };

    if (item.type == "MULTIPLE_CHOICE") {
      question.options = [
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
      ];
    }

    console.log(question);
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
