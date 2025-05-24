import { DEFAULT_THEMES, QUESTIONS, QUIZ } from "@/constant";
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
  saving: boolean
  quiz: Quiz | null;
  questions: Question[];
  selectedQuestionId: string;

  themes: Theme[];
};

type Actions = {
  reset: () => void;
  setState: (state: Partial<State>) => void;
  updateSaving: (arg: boolean) => void
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

  quiz: QUIZ,
  saving: false,
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
        setState: (state: Partial<State>) => {
          set((prev) => ({ ...prev, ...state }));
        },
        updateSaving: (saving: boolean) => set(prev => ({ ...prev, saving }))
      }),
      {
        name: "dataStore",
      }
    )
  )
);
