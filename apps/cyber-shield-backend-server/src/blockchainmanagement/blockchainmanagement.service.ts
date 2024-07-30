import { Injectable } from "@nestjs/common";
import { BlockchainRecordDto } from "../blockchainManagement/BlockchainRecordDto";

@Injectable()
export class BlockchainManagementService {
  constructor() {}
  async AddBlockchainRecord(args: BlockchainRecordDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
