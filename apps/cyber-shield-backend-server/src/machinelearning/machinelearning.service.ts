import { Injectable } from "@nestjs/common";
import { ModelInferenceInputDto } from "../machineLearning/ModelInferenceInputDto";
import { ModelTrainingInputDto } from "../machineLearning/ModelTrainingInputDto";

@Injectable()
export class MachineLearningService {
  constructor() {}
  async InferModel(args: ModelInferenceInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async TrainModel(args: ModelTrainingInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
