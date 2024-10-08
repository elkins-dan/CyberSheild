/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  BlockchainDatabase as PrismaBlockchainDatabase,
} from "@prisma/client";

export class BlockchainDatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BlockchainDatabaseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.blockchainDatabase.count(args);
  }

  async blockchainDatabases(
    args: Prisma.BlockchainDatabaseFindManyArgs
  ): Promise<PrismaBlockchainDatabase[]> {
    return this.prisma.blockchainDatabase.findMany(args);
  }
  async blockchainDatabase(
    args: Prisma.BlockchainDatabaseFindUniqueArgs
  ): Promise<PrismaBlockchainDatabase | null> {
    return this.prisma.blockchainDatabase.findUnique(args);
  }
  async createBlockchainDatabase(
    args: Prisma.BlockchainDatabaseCreateArgs
  ): Promise<PrismaBlockchainDatabase> {
    return this.prisma.blockchainDatabase.create(args);
  }
  async updateBlockchainDatabase(
    args: Prisma.BlockchainDatabaseUpdateArgs
  ): Promise<PrismaBlockchainDatabase> {
    return this.prisma.blockchainDatabase.update(args);
  }
  async deleteBlockchainDatabase(
    args: Prisma.BlockchainDatabaseDeleteArgs
  ): Promise<PrismaBlockchainDatabase> {
    return this.prisma.blockchainDatabase.delete(args);
  }
}
