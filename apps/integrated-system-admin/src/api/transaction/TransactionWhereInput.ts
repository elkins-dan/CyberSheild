import { BlockWhereUniqueInput } from "../block/BlockWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TransactionWhereInput = {
  block?: BlockWhereUniqueInput;
  fromAddress?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  toAddress?: StringNullableFilter;
  transactionHash?: StringNullableFilter;
  value?: FloatNullableFilter;
};
