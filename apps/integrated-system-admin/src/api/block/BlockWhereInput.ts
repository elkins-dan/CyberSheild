import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type BlockWhereInput = {
  blockHash?: StringNullableFilter;
  id?: StringFilter;
  nonce?: IntNullableFilter;
  previousBlockHash?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  transactions?: TransactionListRelationFilter;
};
