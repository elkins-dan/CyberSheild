/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Block } from "./Block";
import { BlockCountArgs } from "./BlockCountArgs";
import { BlockFindManyArgs } from "./BlockFindManyArgs";
import { BlockFindUniqueArgs } from "./BlockFindUniqueArgs";
import { CreateBlockArgs } from "./CreateBlockArgs";
import { UpdateBlockArgs } from "./UpdateBlockArgs";
import { DeleteBlockArgs } from "./DeleteBlockArgs";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { BlockService } from "../block.service";
@graphql.Resolver(() => Block)
export class BlockResolverBase {
  constructor(protected readonly service: BlockService) {}

  async _blocksMeta(
    @graphql.Args() args: BlockCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Block])
  async blocks(@graphql.Args() args: BlockFindManyArgs): Promise<Block[]> {
    return this.service.blocks(args);
  }

  @graphql.Query(() => Block, { nullable: true })
  async block(
    @graphql.Args() args: BlockFindUniqueArgs
  ): Promise<Block | null> {
    const result = await this.service.block(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Block)
  async createBlock(@graphql.Args() args: CreateBlockArgs): Promise<Block> {
    return await this.service.createBlock({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Block)
  async updateBlock(
    @graphql.Args() args: UpdateBlockArgs
  ): Promise<Block | null> {
    try {
      return await this.service.updateBlock({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Block)
  async deleteBlock(
    @graphql.Args() args: DeleteBlockArgs
  ): Promise<Block | null> {
    try {
      return await this.service.deleteBlock(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  async findTransactions(
    @graphql.Parent() parent: Block,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
