import { CreateQuestion, Question } from "@/types/question";
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
        const { data } = await http("Question", "post", payload);
        getQuestionsByQuiz(payload.quizId!)
        return data as Question;
    } catch (error) {
        throw error;
    }
};