import { Button } from "@/components/ui/button";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { QuestionTypeList } from "@/types/question";

const dropdown: QuestionTypeList[] = [
  {
    label: "Multiple Choice",
    type: "MULTIPLE_CHOICE",
    icon: "/icons/multi_choice.svg",
  },
  {
    label: "Short Answer",
    type: "SHORT_ANSWER",
    icon: "/icons/short_answer.svg",
  },
  {
    label: "Yes/No",
    type: "YES/NO",
    icon: "/icons/yes_no.svg",
  },
];

export default function AddQuestion() {
  const handleAddQuestion = (item: QuestionTypeList) => {
    console.log(item);
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
