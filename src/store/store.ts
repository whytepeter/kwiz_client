import { Workspace } from "@/types";
import { User } from "@/types/user";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type State = {
  isLogin: boolean;
  user: User | null;

  selectedWorkspace: Workspace | null;
  workspaces: Workspace[];

  quizzes: string[];
};

type Actions = {
  reset: () => void;
};

// define the initial state
const initialState: State = {
  isLogin: false,
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
