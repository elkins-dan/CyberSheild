import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MachineLearningModelWhereInput = {
  accuracy?: FloatNullableFilter;
  id?: StringFilter;
  modelName?: StringNullableFilter;
  trainingData?: JsonFilter;
};
