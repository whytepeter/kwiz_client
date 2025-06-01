import React, { useCallback, useMemo } from "react";
import useQuestion from "./useQuestion";
import { useDataStore } from "@/store/store";
import useQuiz from "./useQuiz";
import toast from "react-hot-toast";

export default function useResult() {
  const { quiz } = useQuiz();
  const { selectedQuestion } = useQuestion();
  const { answeredQuestions, setState } = useDataStore();

  const usersAnswer = useMemo((): string => {
    const question = answeredQuestions?.find(
      (el) => el.question._id == selectedQuestion?._id
    );

    return question?.answer || "";
  }, [answeredQuestions, selectedQuestion]);

  const selectAnswer = useCallback(
    (answer: string) => {
      if (!selectedQuestion) return;

      const idx = answeredQuestions.findIndex(
        (aq) => aq.question._id === selectedQuestion._id
      );

      // Build a new array of answered questions
      const newAnswered = [...answeredQuestions];
      const entry = { question: selectedQuestion, answer };

      if (idx !== -1) {
        newAnswered[idx] = entry;
      } else {
        newAnswered.push(entry);
      }

      setState({ answeredQuestions: newAnswered });
    },
    [selectedQuestion, setState]
  );

  const onSubmit = useCallback(async (submitted: boolean = false) => {
    if (!quiz) return;

    let score = 0;
    for (let i in answeredQuestions) {
      const question = answeredQuestions[i];
      const point = question.question.points;
      const isCorrect = question.question.answer == question.answer;
      if (isCorrect) {
        score += point;
      }
    }

    try {
      const payload = {
        name: "",
        email: "",
        quizId: quiz._id,
        score,
        questions: answeredQuestions?.map((q) => ({
          question: q.question._id,
          answer: q.answer,
        })),

        submitted, // indicate if the user submitted their sef or it was a timeout
      };

      console.log("Payload", payload);
    } catch (error: any) {
      toast.error(error?.message || "Error submitting quiz");
    } finally {
    }
  }, []);

  return {
    selectAnswer,
    usersAnswer,
    onSubmit,
  };
}
