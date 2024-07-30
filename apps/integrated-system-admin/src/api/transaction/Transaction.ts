import { Block } from "../block/Block";

export type Transaction = {
  block?: Block | null;
  createdAt: Date;
  fromAddress: string | null;
  id: string;
  timestamp: Date | null;
  toAddress: string | null;
  transactionHash: string | null;
  updatedAt: Date;
  value: number | null;
};
