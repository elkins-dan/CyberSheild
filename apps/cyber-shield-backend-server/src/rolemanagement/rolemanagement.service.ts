import { Injectable } from "@nestjs/common";
import { AssignRoleInput } from "../roleManagement/AssignRoleInput";

@Injectable()
export class RoleManagementService {
  constructor() {}
  async AssignRole(args: AssignRoleInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
