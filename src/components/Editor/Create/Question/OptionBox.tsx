import { Button } from "@/components/ui/button";
import { OPTION_IDS } from "@/constant";
import useQuestion from "@/hooks/useQuestion";
import { generateUniqueId } from "@/lib/utils";
import { QuestionOptions } from "@/types/question";
import React, { useEffect, useRef, useState } from "react";

const optionLength = OPTION_IDS.length;

export default function OptionBox() {
  const { selectedQuestion, addOptions, removeOption, updateOption } =
    useQuestion();

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [optionAdded, setOptionAdded] = useState(false);

  //focus on the newly added option choice
  useEffect(() => {
    if (
      optionAdded &&
      selectedQuestion?.options?.length &&
      inputRefs.current.length
    ) {
      const lastInput = inputRefs.current[selectedQuestion.options.length - 1];
      if (lastInput) {
        lastInput.focus();
      }
      setOptionAdded(false); // Reset the state after focusing
    }
  }, [selectedQuestion?.options?.length, optionAdded]);

  const handleAddOption = () => {
    if (!selectedQuestion || selectedQuestion?.options?.length >= optionLength)
      return;

    const option = {
      id: generateUniqueId(),
      text: "",
    };

    addOptions(option);
    setOptionAdded(true);
  };

  const handleUpdateOption = (option: QuestionOptions, text: string) => {
    if (!option) return;
    const updatedOption = { ...option, text };
    updateOption(updatedOption);
  };

  return (
    <>
      {selectedQuestion?.type === "MULTIPLE_CHOICE" && (
        <div className="flex flex-col gap-2">
          {selectedQuestion?.options?.map((option, index) => (
            <div
              key={`option-${index}-${option?.id}`}
              className="relative group p-1.5 capitalize  rounded-md border border-secondary-dark flex items-center gap-2 w-[250px] text-secondary-dark"
            >
              <span className="uppercase w-6 h-6 border border-secondary-dark flex items-center justify-center rounded bg-white ">
                {OPTION_IDS[index]}
              </span>
              <input
                type="text"
                name="option"
                ref={(el) => {
                  if (el) inputRefs.current[index] = el!;
                }}
                value={option.text}
                onChange={(e) => {
                  handleUpdateOption(option, e.target.value);
                }}
                placeholder="choice"
                className="w-full  appearance-none focus:outline-none capitalize"
              />

              <span
                onClick={() => {
                  removeOption(option.id);
                }}
                className="hidden group-hover:flex rounded-full h-5 w-5 -right-3 bg-error-dark text-white absolute top-1/2 -translate-y-1/2  items-center justify-center  cursor-pointer text-xs"
              >
                <i className="pi pi-times " />
              </span>
            </div>
          ))}

          {selectedQuestion?.options?.length < optionLength && (
            <Button
              onClick={handleAddOption}
              variant="text"
              size="small"
              color="secondary"
              className="underline  underline-offset-2 !px-0"
            >
              Add Option
            </Button>
          )}
        </div>
      )}

      {selectedQuestion?.type === "YES/NO" && (
        <div className="flex flex-col gap-2">
          <div className="p-1.5 capitalize  rounded-md border border-secondary-dark flex items-center gap-2 w-[250px] text-secondary-dark">
            <span className="uppercase w-6 h-6 border border-secondary-dark flex items-center justify-center rounded bg-white ">
              Y
            </span>
            <span>Yes</span>
          </div>
          <div className="p-1.5 capitalize  rounded-md border border-secondary-dark flex items-center gap-2 w-[250px] text-secondary-dark">
            <span className="uppercase w-6 h-6 border border-secondary-dark flex items-center justify-center rounded bg-white ">
              N
            </span>
            <span>No</span>
          </div>
        </div>
      )}

      {selectedQuestion?.type === "SHORT_ANSWER" && (
        <div>
          <input
            type="text"
            placeholder="Type your answer here"
            className="pointer-events-none appearance-none focus:outline-none text-xl italic border-b focus:border-secondary w-full py-2 "
          />
        </div>
      )}
    </>
  );
}
