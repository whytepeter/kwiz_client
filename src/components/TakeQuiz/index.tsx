"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import TakeQuizNav from "./TakeQuizNav";
import { ProgressBar } from "primereact/progressbar";
import useQuiz from "@/hooks/useQuiz";
import Loader from "../base/Loader";
import useQuestion from "@/hooks/useQuestion";
import { useParams } from "next/navigation";
import Spinner from "../base/Spinner";
import QuestionNumbering from "./QuestionNumbering";
import TakeQuizNavigation from "./TakeQuizNavigation";
import QuestionBox from "../Editor/Create/Question/QuestionBox";
import TakeQuizUserInfo from "./TakeQuizUserInfo";
import { Quiz } from "@/types/quiz";
import { useDataStore } from "@/store/store";

interface Props {
  className?: string;
  preview?: boolean;
}
export default function index({ className }: Props) {
  const [open, setOpen] = useState(false);
  const { quizTaker } = useDataStore();
  const { initializeQuiz, loading, quiz } = useQuiz();
  const {
    initializeQuestions,
    questions,
    loading: loadingQuestions,
  } = useQuestion();
  const { quiz_id } = useParams<{ quiz_id: string }>();

  useEffect(() => {
    initializeQuiz();
    initializeQuestions(quiz_id);
  }, []);

  useEffect(() => {
    if (!quiz) return;
    if (!quizTaker) {
      setOpen(true);
    }
  }, [quiz]);

  return (
    <div
      style={{
        background: quiz?.theme?.image
          ? `url(${quiz?.theme.image}) no-repeat center/cover, ${
              quiz?.theme?.colors?.background || "#fff"
            }`
          : quiz?.theme?.colors?.background || "#fff",

        color: quiz?.theme?.colors?.heading,
      }}
    >
      <Loader loading={loading} loadingText="A moment, we are preparing quiz" />

      {loading && (
        <ProgressBar
          mode="indeterminate"
          className="fixed h-1 top-0 left-0 w-full z-10"
        />
      )}
      {quiz && (
        <>
          <div
            className={cn(
              "h-[calc(100dvh)] flex flex-col gap-4 overflow-y-auto ",
              className
            )}
          >
            <TakeQuizNav />

            {loadingQuestions && !questions?.length && (
              <Spinner className="mx-auto py-6" />
            )}

            <main className="flex-1 flex flex-col gap-4 pb-8 mx-auto p-4 container">
              <div className="flex-1">
                <QuestionBox live />
              </div>

              <div className="space-y-2">
                <TakeQuizNavigation />
                <QuestionNumbering />
              </div>
            </main>
          </div>
          <TakeQuizUserInfo
            open={open}
            onClose={() => {
              if (!quizTaker) return;
              setOpen(false);
            }}
            quiz={quiz}
          />
        </>
      )}
    </div>
  );
}
