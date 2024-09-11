import { SortOrder } from "../../util/SortOrder";

export type IoTDeviceOrderByInput = {
  createdAt?: SortOrder;
  deviceName?: SortOrder;
  deviceType?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
