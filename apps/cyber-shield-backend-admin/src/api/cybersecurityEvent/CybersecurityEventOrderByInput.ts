import { SortOrder } from "../../util/SortOrder";

export type CybersecurityEventOrderByInput = {
  createdAt?: SortOrder;
  eventSeverity?: SortOrder;
  eventTimestamp?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
