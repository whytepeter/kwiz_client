import { QuestionType, QuestionTypeList } from "@/types/question";
import { Theme } from "@/types/quiz";



export const QUESTION_TYPE_OPTIONS: QuestionTypeList[] = [
  {
    label: "Multiple Choice",
    type: QuestionType.MULTIPLE_CHOICE,
    icon: "/icons/multi_choice.svg",
  },
  {
    label: "Short Answer",
    type: QuestionType.SHORT_ANSWER,
    icon: "/icons/short_answer.svg",
  },
  {
    label: "Yes/No",
    type: QuestionType.YES_NO,
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
    image: "/img/art_splash.jpeg",
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
    image: "/img/barceloneta.png",
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
  {
    title: "Eixample",
    isPremium: true,
    font: "",
    image: "/img/eixample.png",
    colors: {
      background: "#F1ECE3",
      heading: "#2B2B2C",
      option: "#427E93",
      buttonContainer: "#427E93",
      buttonText: "#FFFFFF",
    },
    createdBy: "",
    _id: "8",
  },
  {
    title: "Orbital",
    isPremium: true,
    font: "",
    image: "/img/orbital.png",
    colors: {
      background: "#EEEFF1",
      heading: "#2B2B2C",
      option: "#37404A",
      buttonContainer: "#37404A",
      buttonText: "#EEEFF1",
    },
    createdBy: "",
    _id: "9",
  },
];


