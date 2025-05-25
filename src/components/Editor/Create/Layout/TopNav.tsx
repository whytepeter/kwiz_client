import { Button } from "@/components/ui/button";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import useQuiz from "@/hooks/useQuiz";
import { copyText } from "@/lib/utils";
import { useDataStore } from "@/store/store";
import { QuizLayout } from "@/types";
import { UpdateQuiz } from "@/types/quiz";

import React from "react";

export default function TopNav() {
  const breakpoint = useBreakpoint();
  const { quizLayout, setState } = useDataStore();
  const { totalPoints, shareLink, quiz, updateQuizHandler, updating } =
    useQuiz();

  const publishQuiz = () => {
    if (!quiz) return;
    const update: UpdateQuiz = {
      quizId: quiz._id,
      published: !quiz.published,
    };

    updateQuizHandler(update);
  };

  const toggleLayout = () => {
    const layout =
      quizLayout === QuizLayout.Desktop
        ? QuizLayout.Mobile
        : QuizLayout.Desktop;
    setState({
      quizLayout: layout,
    });
  };

  return (
    <div className="w-full  bg-accent px-3 py-2 rounded-xl flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <h3 className="text-xs md:text-sm">
          Total Points:{" "}
          <span className="text-secondary font-medium">{totalPoints}</span>
        </h3>

        <div className="flex items-center gap-3">
          <span
            onClick={toggleLayout}
            className="w-5 flex-shrink-0 cursor-pointer "
          >
            <img
              src={
                quizLayout == QuizLayout.Desktop
                  ? "/icons/mobile.svg"
                  : "/icons/monitor.svg"
              }
              alt=""
            />
          </span>
          <span className="w-5 flex-shrink-0 cursor-pointer ">
            <img src="/icons/cog.svg" alt="" />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="xsmall"
          className={`${breakpoint.sm && "w-9 h-9"}`}
        >
          <i className="pi pi-eye" />
          <span className="hidden md:inline"> Preview</span>
        </Button>
        <Button
          onClick={publishQuiz}
          loading={updating}
          disabled={updating}
          size="xsmall"
          className={`${breakpoint.sm && "w-9 h-9"}`}
        >
          {quiz?.published ? (
            <i className="pi pi-undo text-xs" />
          ) : (
            <img src="/icons/publish.svg" alt="" />
          )}
          <span className="hidden md:inline">
            {quiz?.published ? "Retract" : "Publish"}
          </span>
        </Button>
        {quiz?.published && (
          <Button
            onClick={() => copyText(shareLink)}
            variant="outline"
            size="icon"
            className="size-9"
          >
            <i className="pi pi-link text-sm" />
          </Button>
        )}
      </div>
    </div>
  );
}
