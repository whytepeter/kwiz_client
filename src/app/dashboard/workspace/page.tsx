"use client";

import EmptyState from "@/components/base/EmptyState";
import ListQuiz from "@/components/Quiz/ListQuiz";
import { Button } from "@/components/ui/button";
import WorkspaceForm from "@/components/Workspace/WorkspaceForm";
import WorkspaceNav from "@/components/Workspace/WorkspaceNav";
import { useDataStore } from "@/store/store";
import { useState } from "react";

export default function page() {
  const { workspaces } = useDataStore();
  const [open, setOpen] = useState(false);

  return (
    <>
      {workspaces?.length ? (
        <div className="flex flex-col gap-5">
          <WorkspaceNav />
          <ListQuiz />
        </div>
      ) : (
        <div className="py-14">
          <EmptyState title="There’s not a workspace in sight" description="">
            <Button onClick={() => setOpen(true)}>
              <i className="pi pi-plus" />
              Create a workspace
            </Button>
          </EmptyState>

          <WorkspaceForm open={open} setOpen={setOpen} />
        </div>
      )}
    </>
  );
}
