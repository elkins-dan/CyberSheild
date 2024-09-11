import { MachineLearningModelWhereInput } from "./MachineLearningModelWhereInput";
import { MachineLearningModelOrderByInput } from "./MachineLearningModelOrderByInput";

export type MachineLearningModelFindManyArgs = {
  where?: MachineLearningModelWhereInput;
  orderBy?: Array<MachineLearningModelOrderByInput>;
  skip?: number;
  take?: number;
};
