import { Module } from "@nestjs/common";
import { BlockchainManagementService } from "./blockchainmanagement.service";
import { BlockchainManagementController } from "./blockchainmanagement.controller";
import { BlockchainManagementResolver } from "./blockchainmanagement.resolver";

@Module({
  controllers: [BlockchainManagementController],
  providers: [BlockchainManagementService, BlockchainManagementResolver],
  exports: [BlockchainManagementService],
})
export class BlockchainManagementModule {}
