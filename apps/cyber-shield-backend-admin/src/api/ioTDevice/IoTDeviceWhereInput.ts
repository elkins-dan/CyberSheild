import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type IoTDeviceWhereInput = {
  deviceName?: StringNullableFilter;
  deviceType?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
