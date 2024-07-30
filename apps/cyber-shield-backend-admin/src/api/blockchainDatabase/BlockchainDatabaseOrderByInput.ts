import { SortOrder } from "../../util/SortOrder";

export type BlockchainDatabaseOrderByInput = {
  chainName?: SortOrder;
  createdAt?: SortOrder;
  creationDate?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
