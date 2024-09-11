import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MachineLearningModelModuleBase } from "./base/machineLearningModel.module.base";
import { MachineLearningModelService } from "./machineLearningModel.service";
import { MachineLearningModelController } from "./machineLearningModel.controller";
import { MachineLearningModelResolver } from "./machineLearningModel.resolver";

@Module({
  imports: [MachineLearningModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [MachineLearningModelController],
  providers: [MachineLearningModelService, MachineLearningModelResolver],
  exports: [MachineLearningModelService],
})
export class MachineLearningModelModule {}
