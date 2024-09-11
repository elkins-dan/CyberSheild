import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CybersecurityEventServiceBase } from "./base/cybersecurityEvent.service.base";

@Injectable()
export class CybersecurityEventService extends CybersecurityEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
