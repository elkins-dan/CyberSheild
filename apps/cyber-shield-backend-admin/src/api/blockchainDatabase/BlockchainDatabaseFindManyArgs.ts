import { BlockchainDatabaseWhereInput } from "./BlockchainDatabaseWhereInput";
import { BlockchainDatabaseOrderByInput } from "./BlockchainDatabaseOrderByInput";

export type BlockchainDatabaseFindManyArgs = {
  where?: BlockchainDatabaseWhereInput;
  orderBy?: Array<BlockchainDatabaseOrderByInput>;
  skip?: number;
  take?: number;
};
