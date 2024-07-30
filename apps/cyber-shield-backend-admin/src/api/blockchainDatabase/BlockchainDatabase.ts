import { JsonValue } from "type-fest";

export type BlockchainDatabase = {
  chainName: string | null;
  createdAt: Date;
  creationDate: Date | null;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
