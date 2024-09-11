import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MachineLearningService } from "./machinelearning.service";
import { ModelTrainingInputDto } from "../machineLearning/ModelTrainingInputDto";

@swagger.ApiTags("machineLearnings")
@common.Controller("machineLearnings")
export class MachineLearningController {
  constructor(protected readonly service: MachineLearningService) {}

  @common.Post("/infer-model")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InferModel(
    @common.Body()
    body: ModelTrainingInputDto
  ): Promise<string> {
        return this.service.InferModel(body);
      }

  @common.Post("/train-model")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TrainModel(
    @common.Body()
    body: ModelTrainingInputDto
  ): Promise<string> {
        return this.service.TrainModel(body);
      }
}
