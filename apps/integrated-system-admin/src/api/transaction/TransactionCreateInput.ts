import { BlockWhereUniqueInput } from "../block/BlockWhereUniqueInput";

export type TransactionCreateInput = {
  block?: BlockWhereUniqueInput | null;
  fromAddress?: string | null;
  timestamp?: Date | null;
  toAddress?: string | null;
  transactionHash?: string | null;
  value?: number | null;
};
