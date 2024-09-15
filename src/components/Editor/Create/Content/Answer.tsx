import useQuestion from "@/hooks/useQuestion";
import React, { useMemo } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListType } from "@/types";
import { Question, QuestionOptions } from "@/types/question";
import { OPTION_IDS } from "@/constant";

export default function Answer() {
  const { selectedQuestion, updateSelectedQuestion } = useQuestion();

  const YesNoDropdown: ListType[] = [
    {
      label: "Yes",
      value: "YES",
    },
    {
      label: "No",
      value: "NO",
    },
  ];

  const MultiChoiceDropdown: ListType[] = useMemo(() => {
    if (selectedQuestion?.type === "MULTIPLE_CHOICE") {
      return selectedQuestion?.options.map(
        (option: QuestionOptions, index: number) => ({
          label: `Option ${OPTION_IDS[index]}`,
          value: option.id,
        })
      );
    }
    return [];
  }, [selectedQuestion]);

  const mainOptions =
    selectedQuestion?.type === "MULTIPLE_CHOICE"
      ? MultiChoiceDropdown
      : YesNoDropdown;

  const getLabel = (value?: string) => {
    if (!value) return;
    return mainOptions.find((el: ListType) => el.value === value)?.label;
  };

  const updatePoint = (points: string) => {
    if (!selectedQuestion || !points) return;
    const newQuestion = {
      ...selectedQuestion,
      points: +points,
    };

    updateSelectedQuestion(newQuestion);
  };

  const updateShortAnswer = (answer: string) => {
    if (!selectedQuestion) return;
    const newQuestion = {
      ...selectedQuestion,
      answer: answer,
    };

    updateSelectedQuestion(newQuestion);
  };

  return (
    <div className="pt-3 space-y-3">
      <h5>Answer</h5>

      <div className="text-xs">
        <div className="flex gap-2 items-center justify-between text-secondary">
          {selectedQuestion?.type === "SHORT_ANSWER" ? (
            <input
              type="text"
              name="answer"
              className="flex-1 appearance-none border-b  focus:outline-none"
              value={selectedQuestion.answer}
              onChange={(e) => {
                updateShortAnswer(e.target.value);
              }}
            />
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="w-full cursor-pointer">
                  {getLabel(selectedQuestion?.answer) || "Select answer"}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44  bg-white/30 backdrop-blur-md">
                <DropdownMenuGroup className=" overflow-auto">
                  {mainOptions.map((item) => (
                    <DropdownMenuItem
                      onClick={() => updateShortAnswer(item.value)}
                      className={`${
                        selectedQuestion?.answer === item.value
                          ? " text-secondary font-semibold"
                          : ""
                      } font-light gap-2 py-2 text-[0.8rem] hover:text-secondary`}
                      key={item.value}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <i className="pi pi-check-circle text-sm"></i>
        </div>
      </div>

      <div className="text-xs flex items-center justify-between gap-3">
        <span className=" text-dark-200">Points</span>
        <input
          value={selectedQuestion?.points}
          onChange={(e) => {
            updatePoint(e.target.value);
          }}
          type="number"
          inputMode="numeric"
          className="appearance-none focus:outline-none w-12 text-center py-1.5 text-secondary-dark bg-accent border border-secondary rounded-md"
        />
      </div>
    </div>
  );
}
