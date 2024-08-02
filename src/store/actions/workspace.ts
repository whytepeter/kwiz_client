import { createWorkspaceType, updateWorkspaceType, Workspace } from "@/types";
import { useDataStore } from "../store";
import http from "@/lib/http";

export const getWorkspace = async () => {
  try {
    const res = await http("MyWorkspace", "get");

    if (res?.length) {
      let selected = useDataStore.getState().selectedWorkspace;
      if (selected) {
        selected =
          res.find((el: Workspace) => el._id == selected?._id) ||
          res[0] ||
          null;
      }

      useDataStore.setState({
        selectedWorkspace: selected,
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
    await getWorkspace();
  } catch (error) {
    throw error;
  }
};

export const editWorkspace = async (payload: updateWorkspaceType) => {
  try {
    const res = await http("Workspace", "patch", payload);
    console.log(res);
    await getWorkspace();
  } catch (error) {
    throw error;
  }
};

export const deleteWorkspace = async () => {};
export const leaveWorkspace = async () => {};
export const addCollaborators = async () => {};
