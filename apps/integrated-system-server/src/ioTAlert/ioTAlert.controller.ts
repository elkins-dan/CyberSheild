import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IoTAlertService } from "./ioTAlert.service";
import { IoTAlertControllerBase } from "./base/ioTAlert.controller.base";

@swagger.ApiTags("ioTAlerts")
@common.Controller("ioTAlerts")
export class IoTAlertController extends IoTAlertControllerBase {
  constructor(protected readonly service: IoTAlertService) {
    super(service);
  }
}
