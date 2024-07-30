import { CybersecurityEvent as TCybersecurityEvent } from "../api/cybersecurityEvent/CybersecurityEvent";

export const CYBERSECURITYEVENT_TITLE_FIELD = "id";

export const CybersecurityEventTitle = (
  record: TCybersecurityEvent
): string => {
  return record.id?.toString() || String(record.id);
};
