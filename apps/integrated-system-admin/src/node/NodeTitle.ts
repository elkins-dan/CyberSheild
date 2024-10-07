import { Node as TNode } from "../api/node/Node";

export const NODE_TITLE_FIELD = "ipAddress";

export const NodeTitle = (record: TNode): string => {
  return record.ipAddress?.toString() || String(record.id);
};
