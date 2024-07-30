import * as graphql from "@nestjs/graphql";
import { IoTEventDto } from "../eventHandling/IoTEventDto";
import { CyberEventDto } from "../eventHandling/CyberEventDto";
import { EventHandlingService } from "./eventhandling.service";

export class EventHandlingResolver {
  constructor(protected readonly service: EventHandlingService) {}

  @graphql.Mutation(() => String)
  async HandleIoTEvent(
    @graphql.Args()
    args: IoTEventDto
  ): Promise<string> {
    return this.service.HandleIoTEvent(args);
  }

  @graphql.Mutation(() => String)
  async HandleSecurityEvent(
    @graphql.Args()
    args: CyberEventDto
  ): Promise<string> {
    return this.service.HandleSecurityEvent(args);
  }
}
