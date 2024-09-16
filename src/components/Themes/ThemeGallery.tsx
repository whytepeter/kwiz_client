import { useDataStore } from "@/store/store";
import React, { useMemo, useState } from "react";
import ThemeCard from "./ThemeCard";
import { Theme } from "@/types/quiz";
import { DEFAULT_THEMES } from "@/constant";

export default function ThemeGallery() {
  const { quiz } = useDataStore();

  const setActive = (theme: Theme): void => {
    if (!theme || theme?._id === quiz?.theme?._id || !quiz) return;
    const newQuiz = { ...quiz, theme };
    useDataStore.setState({ quiz: newQuiz });
  };

  return (
    <div>
      <h5 className="p-4">Theme Gallery</h5>

      <div
        style={{ maxHeight: "calc(100vh - 202px)" }}
        className="flex flex-col gap-3 px-4 pb-4 no-scrollbar  flex-1 overflow-auto"
      >
        {DEFAULT_THEMES.map((theme) => (
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
