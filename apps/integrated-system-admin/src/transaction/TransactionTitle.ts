import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "fromAddress";

export const TransactionTitle = (record: TTransaction): string => {
  return record.fromAddress?.toString() || String(record.id);
};
