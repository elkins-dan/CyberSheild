import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BlockchainDatabaseResolverBase } from "./base/blockchainDatabase.resolver.base";
import { BlockchainDatabase } from "./base/BlockchainDatabase";
import { BlockchainDatabaseService } from "./blockchainDatabase.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BlockchainDatabase)
export class BlockchainDatabaseResolver extends BlockchainDatabaseResolverBase {
  constructor(
    protected readonly service: BlockchainDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
