import * as graphql from "@nestjs/graphql";
import { AssignRoleInput } from "../roleManagement/AssignRoleInput";
import { RoleManagementService } from "./rolemanagement.service";

export class RoleManagementResolver {
  constructor(protected readonly service: RoleManagementService) {}

  @graphql.Mutation(() => String)
  async AssignRole(
    @graphql.Args()
    args: AssignRoleInput
  ): Promise<string> {
    return this.service.AssignRole(args);
  }
}
