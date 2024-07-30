import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MachineLearningModelResolverBase } from "./base/machineLearningModel.resolver.base";
import { MachineLearningModel } from "./base/MachineLearningModel";
import { MachineLearningModelService } from "./machineLearningModel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MachineLearningModel)
export class MachineLearningModelResolver extends MachineLearningModelResolverBase {
  constructor(
    protected readonly service: MachineLearningModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
