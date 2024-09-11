import { Module } from "@nestjs/common";
import { RoleManagementService } from "./rolemanagement.service";
import { RoleManagementController } from "./rolemanagement.controller";
import { RoleManagementResolver } from "./rolemanagement.resolver";

@Module({
  controllers: [RoleManagementController],
  providers: [RoleManagementService, RoleManagementResolver],
  exports: [RoleManagementService],
})
export class RoleManagementModule {}
