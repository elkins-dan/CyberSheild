import { SortOrder } from "../../util/SortOrder";

export type MachineLearningModelOrderByInput = {
  accuracy?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  modelName?: SortOrder;
  trainingData?: SortOrder;
  updatedAt?: SortOrder;
};
