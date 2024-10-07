import { Policy as TPolicy } from "../api/policy/Policy";

export const POLICY_TITLE_FIELD = "id";

export const PolicyTitle = (record: TPolicy): string => {
  return record.id?.toString() || String(record.id);
};
