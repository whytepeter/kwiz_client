import { useDataStore } from "@/store/store";
import { Question, QuestionOptions } from "@/types/question";
import React, { useMemo } from "react";

type SelectedQuestion = Question & {
  index: number;
};

export default function useQuestion() {
  const { selectedQuestionId, questions } = useDataStore();

  const selectedQuestion: SelectedQuestion | undefined = useMemo(() => {
    const questionIndex = questions.findIndex(
      (el) => el._id == selectedQuestionId
    );

    if (questionIndex !== -1) {
      return { ...questions[questionIndex], index: questionIndex + 1 };
    }

    return undefined;
  }, [selectedQuestionId, questions]);

  const setSelectedQuestion = (arg: Question) => {
    useDataStore.setState({
      selectedQuestionId: arg._id,
    });
  };

  const updateSelectedQuestion = (arg: Question) => {
    useDataStore.setState({
      questions: [...questions].map((el) => (el._id === arg._id ? arg : el)),
    });
  };

  const addOptions = (option: QuestionOptions) => {
    useDataStore.setState({
      questions: [...questions].map((el) =>
        el._id === selectedQuestionId
          ? { ...el, options: [...el.options, option] }
          : el
      ),
    });
  };

  const removeOption = (optionId: string) => {
    useDataStore.setState({
      questions: [...questions].map((el) =>
        el._id === selectedQuestionId
          ? {
              ...el,
              options: el.options.filter((option) => option.id !== optionId),
            }
          : el
      ),
    });
  };

  const updateOption = (option: QuestionOptions) => {
    useDataStore.setState({
      questions: [...questions].map((el) =>
        el._id === selectedQuestionId
          ? {
              ...el,
              options: el.options.map((opt) =>
                opt.id === option.id ? option : opt
              ),
            }
          : el
      ),
    });
  };

  return {
    selectedQuestion,
    setSelectedQuestion,
    updateSelectedQuestion,
    questions,
    addOptions,
    removeOption,
    updateOption,
  };
}