import { useDataStore } from "../store";
import http from "@/lib/http";

export const getWorkspace = async () => {
  try {
    // handle registration
    const res = await http("MyWorkspace", "get");
    console.log(res);
  } catch (error) {
    throw error;
  }
};
