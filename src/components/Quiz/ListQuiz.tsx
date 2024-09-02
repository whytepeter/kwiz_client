import React, { useEffect, useState } from "react";
import EmptyState from "../base/EmptyState";
import { Button } from "../ui/button";
import { useDataStore } from "@/store/store";
import { getQuizzes } from "@/store/actions/quiz";
import toast from "react-hot-toast";
import QuizHeader from "./QuizHeader";
import { Quiz } from "@/types/quiz";
import QuizLoadingState from "./QuizLoadingState";
import QuizCard from "./QuizCard";

export default function ListQuiz() {
  const [loading, setLoading] = useState(false);
  const { selectedWorkspace, quizzes, quizDisplay } = useDataStore();

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
      <div className="container px-3">
        <QuizLoadingState />
      </div>
    );

  return (
    <>
      {!quizzes?.length ? (
        <div className="container px-3 flex flex-col gap-4">
          <QuizHeader />

          {/* {quizzes.map((quiz: Quiz) => (
            <QuizCard key={quiz._id} quiz={quiz} />
          ))} */}

          <div
            className={`${
              quizDisplay === "LIST"
                ? "flex-col flex"
                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            } gap-4 w-full`}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <QuizCard key={index} />
            ))}
          </div>
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
