import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CybersecurityEventResolverBase } from "./base/cybersecurityEvent.resolver.base";
import { CybersecurityEvent } from "./base/CybersecurityEvent";
import { CybersecurityEventService } from "./cybersecurityEvent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CybersecurityEvent)
export class CybersecurityEventResolver extends CybersecurityEventResolverBase {
  constructor(
    protected readonly service: CybersecurityEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
