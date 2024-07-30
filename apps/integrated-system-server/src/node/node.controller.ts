import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NodeService } from "./node.service";
import { NodeControllerBase } from "./base/node.controller.base";

@swagger.ApiTags("nodes")
@common.Controller("nodes")
export class NodeController extends NodeControllerBase {
  constructor(protected readonly service: NodeService) {
    super(service);
  }
}
