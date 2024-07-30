import { InputJsonValue } from "../../types";

export type BlockchainDatabaseUpdateInput = {
  chainName?: string | null;
  creationDate?: Date | null;
  data?: InputJsonValue;
};
