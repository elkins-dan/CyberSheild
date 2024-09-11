import { IoTDevice as TIoTDevice } from "../api/ioTDevice/IoTDevice";

export const IOTDEVICE_TITLE_FIELD = "deviceName";

export const IoTDeviceTitle = (record: TIoTDevice): string => {
  return record.deviceName?.toString() || String(record.id);
};
