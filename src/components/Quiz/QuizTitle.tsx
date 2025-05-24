import useQuiz from "@/hooks/useQuiz";
import React, { useCallback, useEffect, useState } from "react";
import TextInput from "../base/TextInput";
import debounce from "lodash/debounce";
import { UpdateQuiz } from "@/types/quiz";

export default function QuizTitle() {
  const { quiz, updateQuizHandler, updating } = useQuiz();
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(quiz?.title || "");
  }, [quiz?.title]);

  const debouncedUpdateTitle = useCallback(
    debounce(async (title) => {
      if (!quiz || updating || !title?.trim()) return;
      const payload: UpdateQuiz = {
        quizId: quiz._id,
        title,
      };

      console.log("payload", payload);
      updateQuizHandler(payload);
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    debouncedUpdateTitle(newTitle);
  };

  useEffect(() => {
    return () => {
      debouncedUpdateTitle.cancel();
    };
  }, [debouncedUpdateTitle]);
  return (
    <TextInput
      onChange={handleChange}
      className="p-0 border-none h-auto"
      placeholder="Quiz title"
      value={title}
    ></TextInput>
  );
}
