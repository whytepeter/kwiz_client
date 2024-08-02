"use client";
import EmptyState from "@/components/base/EmptyState";
import { Button } from "@/components/ui/button";
import WorkspaceNav from "@/components/Workspace/WorkspaceNav";
import { getQuizzes } from "@/store/actions/quiz";
import { useDataStore } from "@/store/store";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function page() {
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

  return (
    <div className="flex flex-col gap-5">
      <WorkspaceNav />

      {loading ? (
        <div className="text-center p-4">Loading</div>
      ) : quizzes?.length ? (
        <div>List Quiz</div>
      ) : (
        <EmptyState title="There’s not a quiz in sight" description="">
          <Button>
            <i className="pi pi-plus" />
            Create a new quiz
          </Button>
        </EmptyState>
      )}
    </div>
  );
}
