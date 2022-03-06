import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as firebase from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from './modules/card/card.module';
import { CollectionModule } from './modules/collection/collection.module';
import { CommonModule } from './modules/common/common.module';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ScryfallModule } from './modules/scryfall/scryfall.module';
import { UserModule } from './modules/user/user.module';
import Redis from 'ioredis';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ req }),
      driver: ApolloDriver,
    }),
    ConfigModule.forRoot(),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          settings: {
            lockDuration: 60 * 20 * 1000,
            lockRenewTime: 60 * 10 * 1000,
            maxStalledCount: 0,
          },
          createClient: () => {
            return new Redis(configService.get<string>('REDIS_URL'), {
              tls: {
                rejectUnauthorized: false,
              },
              enableReadyCheck: false,
              maxRetriesPerRequest: null,
            });
          },
        };
      },
    }),
    PrismaModule,
    ScryfallModule,
    FirebaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const serviceAccount: ServiceAccount = {
          privateKey: configService
            .get<string>('FIREBASE_PRIVATE_KEY')
            .replace(/\\n/g, '\n'),
          projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
          clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
        };
        return {
          credential: firebase.credential.cert(serviceAccount),
        };
      },
    }),
    CommonModule,
    UserModule,
    CardModule,
    CollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
