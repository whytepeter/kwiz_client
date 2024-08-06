import { QuizDisplay, Workspace } from "@/types";
import { Quiz } from "@/types/quiz";
import { User } from "@/types/user";
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
