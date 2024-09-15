export type Workspace = {
  _id: string;
  title: string;
  logo?: string;
  createdBy: string;
  collaborators: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type CreateWorkspace = Pick<
  Workspace,
  "title" | "createdBy" | "collaborators"
>;

export type UpdateWorkspace = Pick<Workspace, "title"> & {
  workspaceId: string;
};
