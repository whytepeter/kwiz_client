import { Question } from "@/types/question";

export const QUESTIONS: Question[] = [
  {
    _id: "669a8db707372e5900ae7cf8",
    quizId: "66999c564c3af5eb58dbed1e",
    description: "",
    type: "MULTIPLE_CHOICE",
    options: [
      {
        id: "a",
        text: "option a",
      },
      {
        id: "b",
        text: "option b",
      },
    ],
    points: 5,
    answer: "a",
    question: "Javascript",
  },

  {
    _id: "669a8e6622c2dc56f2a36c25",
    quizId: "66999c564c3af5eb58dbed1e",
    question: "Javascript",
    description: "What is a function that calls it's self called?",
    type: "SHORT_ANSWER",
    options: [],
    points: 5,
    answer: "ifi",
  },
  {
    _id: "669a8e6622c26f2a36c25",
    quizId: "66999c564c3af5eb58dbed1e",
    question: "Is javascript asynchronous?",
    description: "",
    type: "YES/NO",
    options: [],
    points: 5,
    answer: "YES",
  },
];
