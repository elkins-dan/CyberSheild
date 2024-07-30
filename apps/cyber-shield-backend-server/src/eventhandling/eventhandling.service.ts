import { Injectable } from "@nestjs/common";
import { IoTEventDto } from "../eventHandling/IoTEventDto";
import { CyberEventDto } from "../eventHandling/CyberEventDto";

@Injectable()
export class EventHandlingService {
  constructor() {}
  async HandleIoTEvent(args: IoTEventDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async HandleSecurityEvent(args: CyberEventDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
