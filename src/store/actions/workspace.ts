import { CreateWorkspace, UpdateWorkspace, Workspace } from "@/types";
import { useDataStore } from "../store";
import http from "@/lib/http";

export const getWorkspace = async () => {
  try {
    const res = await http("MyWorkspace", "get");

    let selectedWorkspace = res[0] || null;
    let selectedId = useDataStore.getState().selectedWorkspace?._id;

    if (selectedId) {
      selectedWorkspace =
        res.find((el: Workspace) => el._id == selectedId) || null;
    }

    useDataStore.setState({
      selectedWorkspace,
      workspaces: res || [],
    });
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
    const newWorkspace = res?.data;

    if (newWorkspace) {
      useDataStore.setState({
        selectedWorkspace: newWorkspace,
      });
    }

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

export const deleteWorkspace = async (workspaceId: string) => {
  if (!workspaceId) return;

  try {
    const res = await http("Workspace", "delete", null, {
      suffix: workspaceId,
    });
    console.log(res);
    await getWorkspace();
  } catch (error) {
    throw error;
  }
};

export const leaveWorkspace = async (workspaceId: string, userId: string) => {
  if (!workspaceId || !userId) return;

  try {
    const payload = {
      workspaceId,
      userId,
    };
    const res = await http("LeaveWorkspace", "post", payload);
    console.log(res);
    await getWorkspace();
  } catch (error) {
    throw error;
  }
};

export const addCollaborators = async () => {};
