export type IoTDevice = {
  createdAt: Date;
  deviceName: string | null;
  deviceType: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
