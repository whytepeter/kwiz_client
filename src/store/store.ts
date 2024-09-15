import { DEFAULT_THEMES, QUESTIONS } from "@/constant";
import { QuizDisplay } from "@/types";
import { Question } from "@/types/question";
import { Quiz, Theme } from "@/types/quiz";
import { User } from "@/types/user";
import { Workspace } from "@/types/workspace";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type State = {
  isLogin: boolean;
  loading: boolean;
  loadingText: string;
  quizDisplay: QuizDisplay;

  user: User | null;

  selectedWorkspace: Workspace | null;
  workspaces: Workspace[];

  quizzes: Quiz[];

  quiz: Quiz | null;
  questions: Question[];
  selectedQuestionId: string;

  themes: Theme[];
};

type Actions = {
  reset: () => void;
};

// define the initial state
const initialState: State = {
  isLogin: false,
  loading: false,
  loadingText: "Loading...",
  quizDisplay: "LIST",

  user: null,

  workspaces: [],
  selectedWorkspace: null,

  quizzes: [],

  quiz: null,
  questions: [...QUESTIONS],
  selectedQuestionId: "",

  themes: [...DEFAULT_THEMES],
};

export const useDataStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        reset: () => {
          set(initialState);
        },
      }),
      {
        name: "dataStore",
      }
    )
  )
);
