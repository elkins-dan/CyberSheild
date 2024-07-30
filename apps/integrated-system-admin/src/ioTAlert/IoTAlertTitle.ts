import { IoTAlert as TIoTAlert } from "../api/ioTAlert/IoTAlert";

export const IOTALERT_TITLE_FIELD = "id";

export const IoTAlertTitle = (record: TIoTAlert): string => {
  return record.id?.toString() || String(record.id);
};
