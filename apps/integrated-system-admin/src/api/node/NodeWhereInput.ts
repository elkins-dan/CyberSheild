import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type NodeWhereInput = {
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  nodeId?: StringNullableFilter;
  port?: IntNullableFilter;
  status?: StringNullableFilter;
};
