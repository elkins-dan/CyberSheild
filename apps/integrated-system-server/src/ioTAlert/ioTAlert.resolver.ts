import * as graphql from "@nestjs/graphql";
import { IoTAlertResolverBase } from "./base/ioTAlert.resolver.base";
import { IoTAlert } from "./base/IoTAlert";
import { IoTAlertService } from "./ioTAlert.service";

@graphql.Resolver(() => IoTAlert)
export class IoTAlertResolver extends IoTAlertResolverBase {
  constructor(protected readonly service: IoTAlertService) {
    super(service);
  }
}
