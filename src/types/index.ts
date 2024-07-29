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
