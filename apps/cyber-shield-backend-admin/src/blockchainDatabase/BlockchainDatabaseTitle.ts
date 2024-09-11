import { BlockchainDatabase as TBlockchainDatabase } from "../api/blockchainDatabase/BlockchainDatabase";

export const BLOCKCHAINDATABASE_TITLE_FIELD = "chainName";

export const BlockchainDatabaseTitle = (
  record: TBlockchainDatabase
): string => {
  return record.chainName?.toString() || String(record.id);
};
