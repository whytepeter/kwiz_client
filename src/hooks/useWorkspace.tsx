"use client";
import { useDataStore } from "@/store/store";
import { ROUTES } from "@/types/routes";
import { Workspace } from "@/types/workspace";
import { useParams, useRouter } from "next/navigation";

import React, { useMemo } from "react";

export default function useWorkspace() {
  const router = useRouter();
  const { workspace_id } = useParams<{ workspace_id: string }>();
  const { workspaces } = useDataStore();

  const selectedWorkspace = useMemo(() => {
    return workspaces.find((el) => el._id === workspace_id);
  }, [workspace_id, workspaces]);

  const setSelectedWorkspace = (workspace: Workspace) => {
    if (workspace._id === selectedWorkspace?._id) return;
    router.push(`${ROUTES.Workspace}/${workspace._id}`);
  };

  return { workspaces, selectedWorkspace, setSelectedWorkspace };
}
