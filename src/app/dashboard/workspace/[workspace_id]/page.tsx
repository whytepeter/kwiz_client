"use client";

import EmptyState from "@/components/base/EmptyState";
import ListQuiz from "@/components/Quiz/ListQuiz";
import WorkspaceNav from "@/components/Workspace/WorkspaceNav";
import useWorkspace from "@/hooks/useWorkspace";

export default function page() {
  const { selectedWorkspace } = useWorkspace();

  return (
    <>
      {selectedWorkspace ? (
        <div className="flex flex-col gap-5">
          <WorkspaceNav />
          <div className="container px-3">
            <ListQuiz />
          </div>
        </div>
      ) : (
        <div className="py-14">
          <EmptyState
            title="Opps workspace not found"
            description=""
          ></EmptyState>
        </div>
      )}
    </>
  );
}
