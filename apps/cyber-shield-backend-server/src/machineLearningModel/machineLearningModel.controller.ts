import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MachineLearningModelService } from "./machineLearningModel.service";
import { MachineLearningModelControllerBase } from "./base/machineLearningModel.controller.base";

@swagger.ApiTags("machineLearningModels")
@common.Controller("machineLearningModels")
export class MachineLearningModelController extends MachineLearningModelControllerBase {
  constructor(
    protected readonly service: MachineLearningModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
