import { MachineLearningModel as TMachineLearningModel } from "../api/machineLearningModel/MachineLearningModel";

export const MACHINELEARNINGMODEL_TITLE_FIELD = "modelName";

export const MachineLearningModelTitle = (
  record: TMachineLearningModel
): string => {
  return record.modelName?.toString() || String(record.id);
};
