import { CreateQuestion, Question, UpdateQuestion } from "@/types/question";
import { useDataStore } from "../store";
import http from "@/lib/http";


export const getQuestionsByQuiz = async (quizId: string): Promise<Question[]> => {
    try {
        const res = await http("QuizQuestion", "get", null, {
            suffix: quizId,
        });
        console.log("Questions", res);

        useDataStore.setState({
            questions: res || [],
        });

        return res || []
    } catch (error) {
        throw error;
    }
};

export const createQuestion = async (payload: CreateQuestion): Promise<Question> => {
    if (!payload) throw new Error('Question required')
    try {
        const res = await http("Question", "post", payload);
        // await getQuestionsByQuiz(payload.quizId!)

        return res as Question;
    } catch (error) {
        throw error;
    }
};

export const updateQuestion = async (payload: UpdateQuestion) => {
    if (!payload?.questionId) throw new Error('Questiong Id is required')
    try {
        await http("Question", "patch", payload);
    } catch (error) {
        throw error;
    }
};


export const deleteQuestion = async (questionId: string, quizId?: string) => {
    if (!questionId) return;

    try {
        await http("Question", "delete", null, {
            suffix: questionId,
        });

        // await getQuestionsByQuiz(quizId);
    } catch (error) {
        throw error;
    }
};