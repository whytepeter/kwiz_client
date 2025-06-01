
import http from "@/lib/http";
import { SubmitQuizPayload } from "@/types/result";


export const confirmEmail = async (payload: { quizId: string, email: string }) => {
    if (!payload?.quizId || !payload?.email) throw new Error('quizId and email required')
    try {

        const res = await http("Results", "post", payload, {
            suffix: 'email'
        });

        return res
    } catch (error) {
        throw error;
    }
};


export const submitQuiz = async (payload: SubmitQuizPayload) => {
    try {
        const res = await http("Results", "post", payload)
        return res
    } catch (error) {
        throw error
    }
}