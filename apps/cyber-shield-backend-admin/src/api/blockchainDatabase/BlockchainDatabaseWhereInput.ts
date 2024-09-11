import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlockchainDatabaseWhereInput = {
  chainName?: StringNullableFilter;
  creationDate?: DateTimeNullableFilter;
  data?: JsonFilter;
  id?: StringFilter;
};
