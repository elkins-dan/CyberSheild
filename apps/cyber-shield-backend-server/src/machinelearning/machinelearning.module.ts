import { Module } from "@nestjs/common";
import { MachineLearningService } from "./machinelearning.service";
import { MachineLearningController } from "./machinelearning.controller";
import { MachineLearningResolver } from "./machinelearning.resolver";

@Module({
  controllers: [MachineLearningController],
  providers: [MachineLearningService, MachineLearningResolver],
  exports: [MachineLearningService],
})
export class MachineLearningModule {}
