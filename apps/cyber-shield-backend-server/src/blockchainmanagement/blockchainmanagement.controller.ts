import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BlockchainManagementService } from "./blockchainmanagement.service";
import { BlockchainRecordDto } from "../blockchainManagement/BlockchainRecordDto";

@swagger.ApiTags("blockchainManagements")
@common.Controller("blockchainManagements")
export class BlockchainManagementController {
  constructor(protected readonly service: BlockchainManagementService) {}

  @common.Post("/blockchain/add-record")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddBlockchainRecord(
    @common.Body()
    body: BlockchainRecordDto
  ): Promise<string> {
        return this.service.AddBlockchainRecord(body);
      }
}
