import { IoTDeviceWhereInput } from "./IoTDeviceWhereInput";
import { IoTDeviceOrderByInput } from "./IoTDeviceOrderByInput";

export type IoTDeviceFindManyArgs = {
  where?: IoTDeviceWhereInput;
  orderBy?: Array<IoTDeviceOrderByInput>;
  skip?: number;
  take?: number;
};
