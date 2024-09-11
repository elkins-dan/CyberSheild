import * as graphql from "@nestjs/graphql";
import { ModelInferenceInputDto } from "../machineLearning/ModelInferenceInputDto";
import { ModelTrainingInputDto } from "../machineLearning/ModelTrainingInputDto";
import { MachineLearningService } from "./machinelearning.service";

export class MachineLearningResolver {
  constructor(protected readonly service: MachineLearningService) {}

  @graphql.Mutation(() => String)
  async InferModel(
    @graphql.Args()
    args: ModelInferenceInputDto
  ): Promise<string> {
    return this.service.InferModel(args);
  }

  @graphql.Mutation(() => String)
  async TrainModel(
    @graphql.Args()
    args: ModelTrainingInputDto
  ): Promise<string> {
    return this.service.TrainModel(args);
  }
}
