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
