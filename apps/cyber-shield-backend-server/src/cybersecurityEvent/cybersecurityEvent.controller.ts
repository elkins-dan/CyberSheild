import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CybersecurityEventService } from "./cybersecurityEvent.service";
import { CybersecurityEventControllerBase } from "./base/cybersecurityEvent.controller.base";

@swagger.ApiTags("cybersecurityEvents")
@common.Controller("cybersecurityEvents")
export class CybersecurityEventController extends CybersecurityEventControllerBase {
  constructor(
    protected readonly service: CybersecurityEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
