import { TrainingData as TTrainingData } from "../api/trainingData/TrainingData";

export const TRAININGDATA_TITLE_FIELD = "id";

export const TrainingDataTitle = (record: TTrainingData): string => {
  return record.id?.toString() || String(record.id);
};
