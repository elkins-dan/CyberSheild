import { Module } from "@nestjs/common";
import { EventHandlingService } from "./eventhandling.service";
import { EventHandlingController } from "./eventhandling.controller";
import { EventHandlingResolver } from "./eventhandling.resolver";

@Module({
  controllers: [EventHandlingController],
  providers: [EventHandlingService, EventHandlingResolver],
  exports: [EventHandlingService],
})
export class EventHandlingModule {}
