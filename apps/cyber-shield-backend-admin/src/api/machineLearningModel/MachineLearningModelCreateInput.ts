import { InputJsonValue } from "../../types";

export type MachineLearningModelCreateInput = {
  accuracy?: number | null;
  modelName?: string | null;
  trainingData?: InputJsonValue;
};
