import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IoTDeviceResolverBase } from "./base/ioTDevice.resolver.base";
import { IoTDevice } from "./base/IoTDevice";
import { IoTDeviceService } from "./ioTDevice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IoTDevice)
export class IoTDeviceResolver extends IoTDeviceResolverBase {
  constructor(
    protected readonly service: IoTDeviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
