import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IoTDeviceServiceBase } from "./base/ioTDevice.service.base";

@Injectable()
export class IoTDeviceService extends IoTDeviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
