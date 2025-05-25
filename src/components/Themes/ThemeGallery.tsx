import { useDataStore } from "@/store/store";
import React from "react";
import ThemeCard from "./ThemeCard";
import { Theme, UpdateQuiz } from "@/types/quiz";
import useQuiz from "@/hooks/useQuiz";

export default function ThemeGallery() {
  const { quiz, updateQuizHandler } = useQuiz();
  const { themes } = useDataStore();

  const setActive = (theme: Theme): void => {
    if (!theme || theme?._id === quiz?.theme?._id || !quiz) return;
    const newQuiz = { ...quiz, theme };
    useDataStore.setState({ quiz: newQuiz });

    const payload: UpdateQuiz = {
      quizId: quiz._id,
      theme: theme._id,
    };

    updateQuizHandler(payload);
  };

  return (
    <div>
      <h5 className="p-4">Theme Gallery</h5>

      <div
        style={{ maxHeight: "calc(100vh - 202px)" }}
        className="flex flex-col gap-3 px-4 pb-4 no-scrollbar  flex-1 overflow-auto"
      >
        {themes?.map((theme) => (
          <ThemeCard
            setActive={setActive}
            isActive={theme._id == quiz?.theme?._id}
            theme={theme}
            key={theme._id}
          />
        ))}
      </div>
    </div>
  );
}
