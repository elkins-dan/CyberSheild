export type CybersecurityEvent = {
  createdAt: Date;
  eventSeverity: number | null;
  eventTimestamp: Date | null;
  eventType?: "Option1" | null;
  id: string;
  updatedAt: Date;
};
