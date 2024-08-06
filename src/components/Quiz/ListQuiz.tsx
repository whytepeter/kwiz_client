import React, { useEffect, useState } from "react";
import EmptyState from "../base/EmptyState";
import { Button } from "../ui/button";
import { useDataStore } from "@/store/store";
import { getQuizzes } from "@/store/actions/quiz";
import toast from "react-hot-toast";
import Spinner from "../base/Spinner";
import QuizHeader from "./QuizHeader";
import { Quiz } from "@/types/quiz";

export default function ListQuiz() {
  const [loading, setLoading] = useState(false);
  const { selectedWorkspace, quizzes } = useDataStore();

  const fetchQuizzes = async () => {
    if (selectedWorkspace) {
      try {
        setLoading(true);
        await getQuizzes(selectedWorkspace._id);
      } catch (error: any) {
        toast.error(error.message || "Error fetching quiz");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, [selectedWorkspace]);

  if (loading)
    return (
      <div className="flex justify-center py-6">
        <Spinner />
      </div>
    );

  return (
    <>
      {!quizzes?.length ? (
        <div className="container px-3">
          <QuizHeader />

          {quizzes.map((quiz: Quiz) => (
            <div key={quiz._id}> Quiz</div>
          ))}
        </div>
      ) : (
        <EmptyState title="There’s not a quiz in sight" description="">
          <Button>
            <i className="pi pi-plus" />
            Create a new quiz
          </Button>
        </EmptyState>
      )}
    </>
  );
}
