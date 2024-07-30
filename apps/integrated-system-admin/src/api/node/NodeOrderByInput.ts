import { SortOrder } from "../../util/SortOrder";

export type NodeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  nodeId?: SortOrder;
  port?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
