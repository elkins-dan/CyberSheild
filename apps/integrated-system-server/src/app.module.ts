import { Module } from "@nestjs/common";
import { TransactionModule } from "./transaction/transaction.module";
import { BlockModule } from "./block/block.module";
import { MetricModule } from "./metric/metric.module";
import { DeviceModule } from "./device/device.module";
import { AlertModule } from "./alert/alert.module";
import { PolicyModule } from "./policy/policy.module";
import { NodeModule } from "./node/node.module";
import { IoTAlertModule } from "./ioTAlert/ioTAlert.module";
import { PredictionModule } from "./prediction/prediction.module";
import { TrainingDataModule } from "./trainingData/trainingData.module";
import { ModelModule } from "./model/model.module";
import { VulnerabilityModule } from "./vulnerability/vulnerability.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    TransactionModule,
    BlockModule,
    MetricModule,
    DeviceModule,
    AlertModule,
    PolicyModule,
    NodeModule,
    IoTAlertModule,
    PredictionModule,
    TrainingDataModule,
    ModelModule,
    VulnerabilityModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
