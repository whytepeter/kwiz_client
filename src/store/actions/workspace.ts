import {
  CreateWorkspace,
  LeaveWorkspace,
  UpdateWorkspace,
  Workspace,
} from "@/types";
import { useDataStore } from "../store";
import http from "@/lib/http";

export const getWorkspace = async () => {
  try {
    const res = await http("MyWorkspace", "get");

    if (res?.length) {
      let selected = useDataStore.getState().selectedWorkspace;
      if (selected) {
        selected = res.find((el: Workspace) => el._id == selected?._id);
      }

      console.log("SELECTED", selected);

      useDataStore.setState({
        selectedWorkspace: selected || res[0] || null,
        workspaces: res || [],
      });
    }
  } catch (error) {
    throw error;
  }
};

export const createWorkspace = async (title: string) => {
  const createdBy = useDataStore.getState().user?._id!;
  const payload: CreateWorkspace = {
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

export const editWorkspace = async (payload: UpdateWorkspace) => {
  try {
    const res = await http("Workspace", "patch", payload);
    console.log(res);
    await getWorkspace();
  } catch (error) {
    throw error;
  }
};

export const deleteWorkspace = async () => {};

export const leaveWorkspace = async (payload: LeaveWorkspace) => {
  try {
    const res = await http("LeaveWorkspace", "post", payload);
    console.log(res);
    await getWorkspace();
  } catch (error) {
    throw error;
  }
};
export const addCollaborators = async () => {};
