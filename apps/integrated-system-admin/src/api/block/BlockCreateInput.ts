import { TransactionCreateNestedManyWithoutBlocksInput } from "./TransactionCreateNestedManyWithoutBlocksInput";

export type BlockCreateInput = {
  blockHash?: string | null;
  nonce?: number | null;
  previousBlockHash?: string | null;
  timestamp?: Date | null;
  transactions?: TransactionCreateNestedManyWithoutBlocksInput;
};
