import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CybersecurityEventModuleBase } from "./base/cybersecurityEvent.module.base";
import { CybersecurityEventService } from "./cybersecurityEvent.service";
import { CybersecurityEventController } from "./cybersecurityEvent.controller";
import { CybersecurityEventResolver } from "./cybersecurityEvent.resolver";

@Module({
  imports: [CybersecurityEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [CybersecurityEventController],
  providers: [CybersecurityEventService, CybersecurityEventResolver],
  exports: [CybersecurityEventService],
})
export class CybersecurityEventModule {}
