import { Question, QuestionTypeList } from "@/types/question";
import { Theme } from "@/types/quiz";

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

    randomize: false,
    required: false,
    maxCharacters: false,
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
    randomize: false,
    required: false,
    maxCharacters: false,
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
    randomize: false,
    required: false,
    maxCharacters: false,
  },
];

export const QUESTION_TYPE_OPTIONS: QuestionTypeList[] = [
  {
    label: "Multiple Choice",
    type: "MULTIPLE_CHOICE",
    icon: "/icons/multi_choice.svg",
  },
  {
    label: "Short Answer",
    type: "SHORT_ANSWER",
    icon: "/icons/short_answer.svg",
  },
  {
    label: "Yes/No",
    type: "YES/NO",
    icon: "/icons/yes_no.svg",
  },
];

export const OPTION_IDS = ["A", "B", "C", "D", "E"];

export const DEFAULT_THEMES: Theme[] = [
  {
    title: "Default",
    isPremium: false,
    font: "",
    image: "",
    colors: {
      background: "#FFFFFF",
      heading: "#2B2B2C",
      option: "#AE4E09",
      buttonContainer: "#AE4E09",
      buttonText: "#FFFFFF",
    },
    createdBy: "",
    _id: "1",
  },
  {
    title: "Light Dark",
    isPremium: false,
    font: "",
    image: "",
    colors: {
      background: "#262626",
      heading: "#FFFFFF",
      option: "#FEF5EE",
      buttonContainer: "#FEF5EE",
      buttonText: "#262626",
    },
    createdBy: "",
    _id: "2",
  },
  {
    title: "Solidita",
    isPremium: false,
    font: "",
    image: "",
    colors: {
      background: "#310A31",
      heading: "#FFFFFF",
      option: "#FEF5EE",
      buttonContainer: "#FEF5EE",
      buttonText: "#262626",
    },
    createdBy: "",
    _id: "3",
  },
  {
    title: "Plain Blue",
    isPremium: false,
    font: "",
    image: "",
    colors: {
      background: "#FFFFFF",
      heading: "#2B2B2C",
      option: "#4FB0AE",
      buttonContainer: "#4FB0AE",
      buttonText: "#FFFFFF",
    },
    createdBy: "",
    _id: "4",
  },
  {
    title: "Plain Dark",
    isPremium: false,
    font: "",
    image: "",
    colors: {
      background: "#FFFFFF",
      heading: "#2B2B2C",
      option: "#37404A",
      buttonContainer: "#37404A",
      buttonText: "#FFFFFF",
    },
    createdBy: "",
    _id: "5",
  },
  {
    title: "Art Splash",
    isPremium: true,
    font: "",
    image: "",
    colors: {
      background: "#FBF8F1",
      heading: "#2B2B2C",
      option: "#2B2B2C",
      buttonContainer: "#2B2B2C",
      buttonText: "#FBF8F1",
    },
    createdBy: "",
    _id: "6",
  },
  {
    title: "Barceloneta",
    isPremium: true,
    font: "",
    image: "",
    colors: {
      background: "#E3DCCA",
      heading: "#2B2B2C",
      option: "#4C4C4C",
      buttonContainer: "#4C4C4C",
      buttonText: "#E3DCCA",
    },
    createdBy: "",
    _id: "7",
  },
];
