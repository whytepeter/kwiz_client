import { useDataStore } from "@/store/store";
import { Quiz } from "@/types/quiz";
import React from "react";

type PropType = {
  quiz?: Quiz;
};

export default function QuizCard({ quiz }: PropType) {
  const { quizDisplay } = useDataStore();

  return (
    <>
      <div className="border border-outline rounded-xl py-2 px-3 bg-background flex items-center gap-4">
        <div className="flex-shrink-0 h-9 w-9 bg-accent text-secondary-dark text-sm rounded-full flex items-center justify-center font-medium">
          MN
        </div>
      </div>
    </>
  );
}
