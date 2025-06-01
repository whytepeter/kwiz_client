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

export type QueryObject = {
  search?: string
  page?: number
  sort?: string;
  limit?: number;
  fields?: string
  [key: string]: any
}