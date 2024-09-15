export type Theme = {
  title: string;
  isPremium: boolean;

  font?: string;
  image?: string;

  colors: {
    background: string;
    heading: string;
    option: string;
    buttonContainer: string;
    buttonText: string;
  };

  createdBy?: string;
  _id: string;
};

export type QuizSettings = {
  timeInSeconds?: number;
  startDate?: Date;
  endDate?: Date;
  defaultPoint: number;
  requireAuth: boolean;
  fields: Record<string, string>;
  audienceOnly: boolean;
  audience: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type Quiz = {
  _id: string;
  title: string;
  description?: string;
  workspace: string;
  theme: Theme;
  setting: QuizSettings;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateQuizType = {
  title: string;
  workspaceId: string;
};
