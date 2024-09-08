export type QuestionType = "MULTIPLE_CHOICE" | "YES/NO" | "SHORT_ANSWER";

export type QuestionOptions = {
  id: string;
  text: string;
};

export type Question = {
  _id: string;
  quizId: string;
  question: string;
  description?: string;
  type: QuestionType;
  options: QuestionOptions[];
  points: number;
  answer: string;

  required?: boolean;
  randomize?: boolean;
  maxCharacters?: boolean;
};

export type QuestionTypeList = {
  label: string;
  icon: string;
  type: QuestionType;
};
