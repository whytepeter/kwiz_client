export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  YES_NO = 'YES/NO',
  SHORT_ANSWER = 'SHORT_ANSWER',
}


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

export type CreateQuestion = Partial<Omit<Question, "_id">>;
