import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IoTDeviceService } from "./ioTDevice.service";
import { IoTDeviceControllerBase } from "./base/ioTDevice.controller.base";

@swagger.ApiTags("ioTDevices")
@common.Controller("ioTDevices")
export class IoTDeviceController extends IoTDeviceControllerBase {
  constructor(
    protected readonly service: IoTDeviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
