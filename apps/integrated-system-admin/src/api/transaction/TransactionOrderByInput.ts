import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  blockId?: SortOrder;
  createdAt?: SortOrder;
  fromAddress?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  toAddress?: SortOrder;
  transactionHash?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
