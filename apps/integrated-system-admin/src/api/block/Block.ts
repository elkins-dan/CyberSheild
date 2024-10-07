import { Transaction } from "../transaction/Transaction";

export type Block = {
  blockHash: string | null;
  createdAt: Date;
  id: string;
  nonce: number | null;
  previousBlockHash: string | null;
  timestamp: Date | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
