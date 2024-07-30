import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlockchainDatabaseService } from "./blockchainDatabase.service";
import { BlockchainDatabaseControllerBase } from "./base/blockchainDatabase.controller.base";

@swagger.ApiTags("blockchainDatabases")
@common.Controller("blockchainDatabases")
export class BlockchainDatabaseController extends BlockchainDatabaseControllerBase {
  constructor(
    protected readonly service: BlockchainDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
