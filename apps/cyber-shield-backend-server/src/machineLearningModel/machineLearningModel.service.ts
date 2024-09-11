import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MachineLearningModelServiceBase } from "./base/machineLearningModel.service.base";

@Injectable()
export class MachineLearningModelService extends MachineLearningModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
