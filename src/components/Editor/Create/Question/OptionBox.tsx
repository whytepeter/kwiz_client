import { Button } from "@/components/ui/button";
import { OPTION_IDS } from "@/constant";
import useQuestion from "@/hooks/useQuestion";
import useQuiz from "@/hooks/useQuiz";
import useResult from "@/hooks/useResult";
import { cn, generateUniqueId, hexToRgb } from "@/lib/utils";
import { useDataStore } from "@/store/store";
import { QuizLayout } from "@/types";
import { QuestionOptions } from "@/types/question";
import React, { useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";

const optionLength = OPTION_IDS.length;

interface Props {
  live?: boolean;
}

export default function OptionBox({ live }: Props) {
  const { quizLayout } = useDataStore();
  const isMobileLayout = quizLayout == QuizLayout.Mobile;
  const [focus, setFocus] = useState(false);

  const { usersAnswer, selectAnswer } = useResult();
  const { quiz } = useQuiz();

  const colors = quiz?.theme?.colors;

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

  const optionContainerStyle = {
    borderColor: colors?.buttonContainer,
    color: colors?.buttonContainer,
    background: colors?.buttonContainer
      ? `rgba(${hexToRgb(colors.buttonContainer)}, 0.1)`
      : "transparent",
  };

  return (
    <>
      {selectedQuestion?.type === "MULTIPLE_CHOICE" && (
        <div
          className={cn("flex flex-col gap-2 ", isMobileLayout && "text-xs")}
        >
          {selectedQuestion?.options?.map((option, index) => (
            <div
              onClick={() => selectAnswer(option.id)}
              style={optionContainerStyle}
              key={`option-${index}-${option?.id}`}
              className={cn(
                "relative group p-1.5 capitalize  rounded-md border  flex items-center gap-2 min-w-[250px] w-fit"
              )}
            >
              <span
                style={{
                  borderColor: colors?.buttonContainer,
                  background: colors?.background,
                }}
                className={cn(
                  "uppercase  border  flex items-center justify-center rounded bg-white ",
                  isMobileLayout ? "size-5" : "size-6"
                )}
              >
                {OPTION_IDS[index]}
              </span>

              {live ? (
                <p className=" pr-3">{option.text} </p>
              ) : (
                <input
                  type="text"
                  name="option"
                  readOnly={live}
                  ref={(el) => {
                    if (el) inputRefs.current[index] = el!;
                  }}
                  value={option.text}
                  onChange={(e) => {
                    handleUpdateOption(option, e.target.value);
                  }}
                  placeholder="choice"
                  className={cn(
                    "w-full bg-transparent appearance-none focus:outline-none capitalize",
                    live && "cursor-pointer"
                  )}
                />
              )}

              {live && usersAnswer == option.id && (
                <div
                  style={{
                    background: colors?.buttonContainer,
                    color: colors?.buttonText,
                  }}
                  className="flex !text-white rounded-full size-5 -right-3 absolute top-1/2 -translate-y-1/2  items-center justify-center  text-xs"
                >
                  <i className="pi pi-check text-xs" />
                </div>
              )}

              {!live && selectedQuestion?.options?.length > 1 && (
                <span
                  onClick={() => {
                    removeOption(option.id);
                  }}
                  className="hidden group-hover:flex rounded-full size-5 -right-3 bg-error-dark text-white absolute top-1/2 -translate-y-1/2  items-center justify-center  cursor-pointer text-xs"
                >
                  <i className="pi pi-times " />
                </span>
              )}
            </div>
          ))}

          {!live && selectedQuestion?.options?.length < optionLength && (
            <Button
              onClick={handleAddOption}
              variant="text"
              size="small"
              style={{ color: colors?.option }}
              className="underline  underline-offset-2 !px-0"
            >
              Add Option
            </Button>
          )}
        </div>
      )}
      {selectedQuestion?.type === "YES/NO" && (
        <div
          className={cn("flex flex-col gap-2 ", isMobileLayout && "text-xs")}
        >
          <div
            onClick={() => selectAnswer("YES")}
            style={optionContainerStyle}
            className={cn(
              "p-1.5 capitalize relative rounded-md border flex items-center gap-2 w-[250px] ",
              live && "cursor-pointer"
            )}
          >
            <span
              style={{
                borderColor: colors?.buttonContainer,
                background: colors?.background,
              }}
              className={cn(
                "uppercase size-6 border  flex items-center justify-center rounded bg-white ",
                isMobileLayout ? "size-5" : "size-6"
              )}
            >
              Y
            </span>
            <span>Yes</span>

            {live && usersAnswer == "YES" && (
              <div
                style={{
                  background: colors?.buttonContainer,
                  color: colors?.buttonText,
                }}
                className="flex !text-white rounded-full size-5 -right-3 absolute top-1/2 -translate-y-1/2  items-center justify-center  text-xs"
              >
                <i className="pi pi-check text-xs" />
              </div>
            )}
          </div>
          <div
            onClick={() => selectAnswer("NO")}
            style={optionContainerStyle}
            className={cn(
              "p-1.5 capitalize relative rounded-md border flex items-center gap-2 w-[250px] ",
              live && "cursor-pointer"
            )}
          >
            <span
              style={{
                borderColor: colors?.buttonContainer,
                background: colors?.background,
              }}
              className="uppercase w-6 h-6 border flex items-center justify-center rounded bg-white "
            >
              N
            </span>
            <span>No</span>

            {live && usersAnswer == "NO" && (
              <div
                style={{
                  background: colors?.buttonContainer,
                  color: colors?.buttonText,
                }}
                className="flex !text-white rounded-full size-5 -right-3 absolute top-1/2 -translate-y-1/2  items-center justify-center  text-xs"
              >
                <i className="pi pi-check text-xs" />
              </div>
            )}
          </div>
        </div>
      )}
      {selectedQuestion?.type === "SHORT_ANSWER" && (
        <div>
          <textarea
            value={usersAnswer}
            onChange={(e) => selectAnswer(e.target.value)}
            readOnly={!live}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            style={{
              color: colors?.heading,
              borderColor: focus ? colors?.buttonContainer : "",
            }}
            placeholder="Type your answer here"
            className={cn(
              "bg-transparent max-h-[100px] appearance-none focus:outline-none  italic border-b  w-full py-2 ",
              isMobileLayout ? "text-sm" : "text-xl",
              !live && "pointer-events-none"
            )}
          />
        </div>
      )}
    </>
  );
}
