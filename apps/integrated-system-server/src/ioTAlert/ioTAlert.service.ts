import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IoTAlertServiceBase } from "./base/ioTAlert.service.base";

@Injectable()
export class IoTAlertService extends IoTAlertServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
