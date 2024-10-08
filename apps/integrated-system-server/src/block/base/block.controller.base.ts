/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlockService } from "../block.service";
import { BlockCreateInput } from "./BlockCreateInput";
import { Block } from "./Block";
import { BlockFindManyArgs } from "./BlockFindManyArgs";
import { BlockWhereUniqueInput } from "./BlockWhereUniqueInput";
import { BlockUpdateInput } from "./BlockUpdateInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

export class BlockControllerBase {
  constructor(protected readonly service: BlockService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Block })
  async createBlock(@common.Body() data: BlockCreateInput): Promise<Block> {
    return await this.service.createBlock({
      data: data,
      select: {
        blockHash: true,
        createdAt: true,
        id: true,
        nonce: true,
        previousBlockHash: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Block] })
  @ApiNestedQuery(BlockFindManyArgs)
  async blocks(@common.Req() request: Request): Promise<Block[]> {
    const args = plainToClass(BlockFindManyArgs, request.query);
    return this.service.blocks({
      ...args,
      select: {
        blockHash: true,
        createdAt: true,
        id: true,
        nonce: true,
        previousBlockHash: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Block })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async block(
    @common.Param() params: BlockWhereUniqueInput
  ): Promise<Block | null> {
    const result = await this.service.block({
      where: params,
      select: {
        blockHash: true,
        createdAt: true,
        id: true,
        nonce: true,
        previousBlockHash: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Block })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBlock(
    @common.Param() params: BlockWhereUniqueInput,
    @common.Body() data: BlockUpdateInput
  ): Promise<Block | null> {
    try {
      return await this.service.updateBlock({
        where: params,
        data: data,
        select: {
          blockHash: true,
          createdAt: true,
          id: true,
          nonce: true,
          previousBlockHash: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Block })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBlock(
    @common.Param() params: BlockWhereUniqueInput
  ): Promise<Block | null> {
    try {
      return await this.service.deleteBlock({
        where: params,
        select: {
          blockHash: true,
          createdAt: true,
          id: true,
          nonce: true,
          previousBlockHash: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: BlockWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        block: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fromAddress: true,
        id: true,
        timestamp: true,
        toAddress: true,
        transactionHash: true,
        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  async connectTransactions(
    @common.Param() params: BlockWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateBlock({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  async updateTransactions(
    @common.Param() params: BlockWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateBlock({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  async disconnectTransactions(
    @common.Param() params: BlockWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateBlock({
      where: params,
      data,
      select: { id: true },
    });
  }
}
