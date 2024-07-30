import { SortOrder } from "../../util/SortOrder";

export type BlockOrderByInput = {
  blockHash?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  nonce?: SortOrder;
  previousBlockHash?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
