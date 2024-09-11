import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlockchainDatabaseServiceBase } from "./base/blockchainDatabase.service.base";

@Injectable()
export class BlockchainDatabaseService extends BlockchainDatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
