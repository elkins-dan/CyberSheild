import { InputJsonValue } from "../../types";

export type MachineLearningModelUpdateInput = {
  accuracy?: number | null;
  modelName?: string | null;
  trainingData?: InputJsonValue;
};
