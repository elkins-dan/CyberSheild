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
import { Prediction } from "./Prediction";
import { PredictionCountArgs } from "./PredictionCountArgs";
import { PredictionFindManyArgs } from "./PredictionFindManyArgs";
import { PredictionFindUniqueArgs } from "./PredictionFindUniqueArgs";
import { DeletePredictionArgs } from "./DeletePredictionArgs";
import { PredictionService } from "../prediction.service";
@graphql.Resolver(() => Prediction)
export class PredictionResolverBase {
  constructor(protected readonly service: PredictionService) {}

  async _predictionsMeta(
    @graphql.Args() args: PredictionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Prediction])
  async predictions(
    @graphql.Args() args: PredictionFindManyArgs
  ): Promise<Prediction[]> {
    return this.service.predictions(args);
  }

  @graphql.Query(() => Prediction, { nullable: true })
  async prediction(
    @graphql.Args() args: PredictionFindUniqueArgs
  ): Promise<Prediction | null> {
    const result = await this.service.prediction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Prediction)
  async deletePrediction(
    @graphql.Args() args: DeletePredictionArgs
  ): Promise<Prediction | null> {
    try {
      return await this.service.deletePrediction(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
