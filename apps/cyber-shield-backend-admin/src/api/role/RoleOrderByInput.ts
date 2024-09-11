import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  permissions?: SortOrder;
  roleName?: SortOrder;
  updatedAt?: SortOrder;
};
