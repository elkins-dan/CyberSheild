import { TransactionUpdateManyWithoutBlocksInput } from "./TransactionUpdateManyWithoutBlocksInput";

export type BlockUpdateInput = {
  blockHash?: string | null;
  nonce?: number | null;
  previousBlockHash?: string | null;
  timestamp?: Date | null;
  transactions?: TransactionUpdateManyWithoutBlocksInput;
};
