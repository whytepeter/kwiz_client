import { useDataStore } from "@/store/store";
import { Quiz } from "@/types/quiz";
import React from "react";

export default function useQuiz() {
  const { quiz, setState } = useDataStore();

  const setSelectedQuiz = (quiz: Quiz) => {
    setState({
      quiz,
    });
  };
  return {
    selectedQuiz: quiz,
    setSelectedQuiz,
  };
}
