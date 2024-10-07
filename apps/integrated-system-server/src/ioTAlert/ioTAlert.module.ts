import { Module } from "@nestjs/common";
import { IoTAlertModuleBase } from "./base/ioTAlert.module.base";
import { IoTAlertService } from "./ioTAlert.service";
import { IoTAlertController } from "./ioTAlert.controller";
import { IoTAlertResolver } from "./ioTAlert.resolver";

@Module({
  imports: [IoTAlertModuleBase],
  controllers: [IoTAlertController],
  providers: [IoTAlertService, IoTAlertResolver],
  exports: [IoTAlertService],
})
export class IoTAlertModule {}
