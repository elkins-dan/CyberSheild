import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IoTDeviceModuleBase } from "./base/ioTDevice.module.base";
import { IoTDeviceService } from "./ioTDevice.service";
import { IoTDeviceController } from "./ioTDevice.controller";
import { IoTDeviceResolver } from "./ioTDevice.resolver";

@Module({
  imports: [IoTDeviceModuleBase, forwardRef(() => AuthModule)],
  controllers: [IoTDeviceController],
  providers: [IoTDeviceService, IoTDeviceResolver],
  exports: [IoTDeviceService],
})
export class IoTDeviceModule {}
