import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RoleManagementService } from "./rolemanagement.service";
import { AssignRoleInput } from "../roleManagement/AssignRoleInput";

@swagger.ApiTags("roleManagements")
@common.Controller("roleManagements")
export class RoleManagementController {
  constructor(protected readonly service: RoleManagementService) {}

  @common.Post("/assign-role")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AssignRole(
    @common.Body()
    body: AssignRoleInput
  ): Promise<string> {
        return this.service.AssignRole(body);
      }
}
