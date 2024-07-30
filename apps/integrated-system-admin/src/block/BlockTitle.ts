import { Block as TBlock } from "../api/block/Block";

export const BLOCK_TITLE_FIELD = "blockHash";

export const BlockTitle = (record: TBlock): string => {
  return record.blockHash?.toString() || String(record.id);
};
