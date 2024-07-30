import { BlockWhereUniqueInput } from "../block/BlockWhereUniqueInput";

export type TransactionUpdateInput = {
  block?: BlockWhereUniqueInput | null;
  fromAddress?: string | null;
  timestamp?: Date | null;
  toAddress?: string | null;
  transactionHash?: string | null;
  value?: number | null;
};
