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
import useWorkspace from "@/hooks/useWorkspace";
import AddQuiz from "./AddQuiz";

export default function ListQuiz() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { quizzes, quizDisplay } = useDataStore();
  const { selectedWorkspace } = useWorkspace();

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

  if (loading && !quizzes?.length) return <QuizLoadingState />;

  return (
    <>
      {quizzes?.length ? (
        <div className="flex flex-col gap-4">
          <QuizHeader />

          <div
            className={`${
              quizDisplay === "LIST"
                ? "flex-col flex"
                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            } gap-4 w-full`}
          >
            {quizzes.map((quiz: Quiz) => (
              <QuizCard key={quiz._id} quiz={quiz} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState title="There’s not a quiz in sight" description="">
          <Button onClick={() => setOpen(true)}>
            <i className="pi pi-plus" />
            Create a new quiz
          </Button>
        </EmptyState>
      )}

      <AddQuiz open={open} setOpen={setOpen} />
    </>
  );
}
