import { CreateQuizType, Quiz, UpdateQuiz } from "@/types/quiz";
import { useDataStore } from "../store";
import http from "@/lib/http";
import { QueryObject } from "@/types";


export const getAllQuizes = async (query: QueryObject = {}) => {
  try {

    const quizObject = {
      ...query,
      published: true
    }

    const res = await http("Quiz", "get", null, {
      additionalParams: quizObject,
    });

    console.log("Quizzes", res);

    return res
  } catch (error) {
    throw error;
  }
};


export const getQuizzes = async (workspaceId: string) => {
  try {
    const res = await http("WorkspaceQuiz", "get", null, {
      suffix: workspaceId,
    });

    console.log("Quizzes", res);

    useDataStore.setState({
      quizzes: res || [],
    });
    return res
  } catch (error) {
    throw error;
  }
};

export const getQuizById = async (quizId: string): Promise<Quiz | null> => {
  try {
    const { data } = await http("Quiz", "get", null, {
      suffix: quizId,
    });

    useDataStore.setState({
      quiz: data || null,
    });

    return data || null
  } catch (error) {
    throw error;
  }
};

export const createQuiz = async (payload: CreateQuizType): Promise<Quiz> => {
  if (!payload?.title || !payload?.workspaceId) throw new Error('Title and workspace required')
  try {
    const { data } = await http("Quiz", "post", payload);
    useDataStore.setState({
      quizzes: data || null,
    });
    return data as Quiz;
  } catch (error) {
    throw error;
  }
};

export const updateQuiz = async (payload: UpdateQuiz) => {
  if (!payload?.quizId) throw new Error('Quiz Id is required')
  try {
    await http("Quiz", "patch", payload);
    getQuizById(payload?.quizId)
  } catch (error) {
    throw error;
  }
};