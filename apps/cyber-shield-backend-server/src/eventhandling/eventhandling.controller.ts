import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EventHandlingService } from "./eventhandling.service";
import { CyberEventDto } from "../eventHandling/CyberEventDto";

@swagger.ApiTags("eventHandlings")
@common.Controller("eventHandlings")
export class EventHandlingController {
  constructor(protected readonly service: EventHandlingService) {}

  @common.Post("/handle-iot-event")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleIoTEvent(
    @common.Body()
    body: CyberEventDto
  ): Promise<string> {
        return this.service.HandleIoTEvent(body);
      }

  @common.Post("/handle-security-event")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleSecurityEvent(
    @common.Body()
    body: CyberEventDto
  ): Promise<string> {
        return this.service.HandleSecurityEvent(body);
      }
}
