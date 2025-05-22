import { CreateQuizType, Quiz } from "@/types/quiz";
import { useDataStore } from "../store";
import http from "@/lib/http";


export const getQuizzes = async (workspaceId: string) => {
  try {
    const res = await http("WorkspaceQuiz", "get", null, {
      suffix: workspaceId,
    });

    console.log("Quizzes", res);

    if (res) {
      useDataStore.setState({
        quizzes: res || [],
      });
    }
  } catch (error) {
    throw error;
  }
};


export const createQuiz = async (payload: CreateQuizType): Promise<Quiz> => {
  if (!payload?.title || !payload?.workspaceId) throw new Error('Title and workspace required')
  try {
    const { data } = await http("Quiz", "post", payload);
    return data as Quiz;
  } catch (error) {
    throw error;
  }
};