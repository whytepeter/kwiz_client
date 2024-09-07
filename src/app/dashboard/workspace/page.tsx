"use client";
import EmptyState from "@/components/base/EmptyState";
import { Button } from "@/components/ui/button";
import WorkspaceForm from "@/components/Workspace/WorkspaceForm";
import { useDataStore } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { workspace_id } = useParams<{ workspace_id: string }>();
  const { workspaces } = useDataStore();

  useEffect(() => {
    if (workspaces?.length) {
      const selectedWorkspace = workspace_id || workspaces[0]?._id;
      router.replace(`/dashboard/workspace/${selectedWorkspace}`);
    }
  }, []);

  return (
    <>
      {!workspaces?.length && (
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
