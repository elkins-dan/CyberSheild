import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlockchainDatabaseModuleBase } from "./base/blockchainDatabase.module.base";
import { BlockchainDatabaseService } from "./blockchainDatabase.service";
import { BlockchainDatabaseController } from "./blockchainDatabase.controller";
import { BlockchainDatabaseResolver } from "./blockchainDatabase.resolver";

@Module({
  imports: [BlockchainDatabaseModuleBase, forwardRef(() => AuthModule)],
  controllers: [BlockchainDatabaseController],
  providers: [BlockchainDatabaseService, BlockchainDatabaseResolver],
  exports: [BlockchainDatabaseService],
})
export class BlockchainDatabaseModule {}
