import { JsonValue } from "type-fest";

export type MachineLearningModel = {
  accuracy: number | null;
  createdAt: Date;
  id: string;
  modelName: string | null;
  trainingData: JsonValue;
  updatedAt: Date;
};
