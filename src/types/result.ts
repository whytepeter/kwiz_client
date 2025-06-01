export type SubmitQuizPayload = {
    quizId: string;
    name: string;
    email: string;
    score: number;
    submitted: boolean;
    questions: {
        question: string
        answer: string
    }[]
}