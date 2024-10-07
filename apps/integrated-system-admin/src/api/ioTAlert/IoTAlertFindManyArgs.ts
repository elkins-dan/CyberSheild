import { IoTAlertWhereInput } from "./IoTAlertWhereInput";
import { IoTAlertOrderByInput } from "./IoTAlertOrderByInput";

export type IoTAlertFindManyArgs = {
  where?: IoTAlertWhereInput;
  orderBy?: Array<IoTAlertOrderByInput>;
  skip?: number;
  take?: number;
};
