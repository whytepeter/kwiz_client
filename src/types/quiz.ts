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
  _id: string;
  timeInSeconds?: number;
  startDate?: Date;
  endDate?: Date;
  defaultPoint: number;
  requireAuth: boolean;
  fields: Record<string, string>;
  audienceOnly: boolean;
  audience: string[];
  createdAt: string;
  updatedAt: string;
};

export type Quiz = {
  _id: string;
  title: string;
  description?: string;
  workspaceId: string;
  theme: Theme;
  setting: QuizSettings;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuizType = {
  title: string;
  workspaceId: string;
};
