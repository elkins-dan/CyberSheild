import { Module } from "@nestjs/common";
import { MetricModuleBase } from "./base/metric.module.base";
import { MetricService } from "./metric.service";
import { MetricController } from "./metric.controller";
import { MetricResolver } from "./metric.resolver";

@Module({
  imports: [MetricModuleBase],
  controllers: [MetricController],
  providers: [MetricService, MetricResolver],
  exports: [MetricService],
})
export class MetricModule {}
