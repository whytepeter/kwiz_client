import { CreateWorkspace, UpdateWorkspace, Workspace } from "@/types/workspace";
import { useDataStore } from "../store";
import http from "@/lib/http";

export const getWorkspace = async () => {
  try {
    const res = await http("MyWorkspace", "get");

    useDataStore.setState({
      workspaces: res || [],
    });
  } catch (error) {
    throw error;
  }
};

export const createWorkspace = async (title: string): Promise<Workspace> => {
  const createdBy = useDataStore.getState().user?._id!;
  const payload: CreateWorkspace = {
    title,
    createdBy,
    collaborators: [],
  };

  try {
    const { data } = await http("Workspace", "post", payload);

    await getWorkspace();
    return data as Workspace;
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
