import * as graphql from "@nestjs/graphql";
import { BlockchainRecordDto } from "../blockchainManagement/BlockchainRecordDto";
import { BlockchainManagementService } from "./blockchainmanagement.service";

export class BlockchainManagementResolver {
  constructor(protected readonly service: BlockchainManagementService) {}

  @graphql.Mutation(() => String)
  async AddBlockchainRecord(
    @graphql.Args()
    args: BlockchainRecordDto
  ): Promise<string> {
    return this.service.AddBlockchainRecord(args);
  }
}
