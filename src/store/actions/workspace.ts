import { createWorkspaceType, updateWorkspaceType } from "@/types";
import { useDataStore } from "../store";
import http from "@/lib/http";

export const getWorkspace = async () => {
  try {
    const res = await http("MyWorkspace", "get");
    if (res?.length) {
      useDataStore.setState({
        selectedWorkspace: res[0] || null,
        workspaces: res || [],
      });
    }
  } catch (error) {
    throw error;
  }
};

export const createWorkspace = async (title: string) => {
  const createdBy = useDataStore.getState().user?._id!;
  const payload: createWorkspaceType = {
    title,
    createdBy,
    collaborators: [],
  };

  try {
    const res = await http("Workspace", "post", payload);
    console.log(res);
    if (res?.success) {
      await getWorkspace();
    }
  } catch (error) {
    throw error;
  }
};

export const editWorkspace = async (payload: updateWorkspaceType) => {
  try {
    const res = await http("Workspace", "patch", payload);
    if (res?.success) {
    } else {
    }
  } catch (error) {
    throw error;
  }
};

export const deleteWorkspace = async () => {};
export const leaveWorkspace = async () => {};
export const addCollaborators = async () => {};
