import { useDataStore } from "../store";
import http from "@/lib/http";

export const getQuizzes = async (workspaceId: string) => {
  try {
    const res = await http("WorkspaceQuiz", "get", null, {
      suffix: workspaceId,
    });

    console.log("Quizzes", res);

    if (res?.length) {
      useDataStore.setState({
        quizzes: res,
      });
    }
  } catch (error) {
    throw error;
  }
};
