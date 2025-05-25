export type QuizDisplay = "GRID" | "LIST";

export type ListType = {
  label: string;
  value: string;
  icon?: string;
};


export type LoadingStatus = "loading" | "updating" | "deleting" | "idle";


export enum QuizLayout {
  Mobile = "mobile",
  Desktop = "desktop",
}