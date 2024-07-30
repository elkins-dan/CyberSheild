import { InputJsonValue } from "../../types";

export type BlockchainDatabaseCreateInput = {
  chainName?: string | null;
  creationDate?: Date | null;
  data?: InputJsonValue;
};
