export type Workspace = {
  _id: string;
  title: string;
  logo?: string;
  createdBy: string;
  collaborators: string[];
};

export type createWorkspaceType = Pick<
  Workspace,
  "title" | "createdBy" | "collaborators"
>;

export type updateWorkspaceType = Partial<createWorkspaceType> & {
  _id: string;
};

export type QuizDisplay = "GRID" | "LIST";

export type ListType = {
  label: string;
  value: string;
  icon?: string;
};
