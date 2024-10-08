import { Module } from "@nestjs/common";
import { MachineLearningModelModule } from "./machineLearningModel/machineLearningModel.module";
import { BlockchainDatabaseModule } from "./blockchainDatabase/blockchainDatabase.module";
import { CybersecurityEventModule } from "./cybersecurityEvent/cybersecurityEvent.module";
import { IoTDeviceModule } from "./ioTDevice/ioTDevice.module";
import { UserModule } from "./user/user.module";
import { RoleModule } from "./role/role.module";
import { BlockchainManagementModule } from "./blockchainmanagement/blockchainmanagement.module";
import { EventHandlingModule } from "./eventhandling/eventhandling.module";
import { MachineLearningModule } from "./machinelearning/machinelearning.module";
import { RoleManagementModule } from "./rolemanagement/rolemanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    MachineLearningModelModule,
    BlockchainDatabaseModule,
    CybersecurityEventModule,
    IoTDeviceModule,
    UserModule,
    RoleModule,
    BlockchainManagementModule,
    EventHandlingModule,
    MachineLearningModule,
    RoleManagementModule,
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
