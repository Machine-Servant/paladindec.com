import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as firebase from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import Redis from 'ioredis';
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
import { GraphqlInterceptor, SentryModule } from '@ntegral/nestjs-sentry';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ req }),
      driver: ApolloDriver,
      introspection: true,
      cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
      },
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
            const url = configService.get<string>('REDIS_URL');
            const isTls = url.startsWith('rediss');
            return new Redis(url, {
              tls: isTls
                ? {
                    rejectUnauthorized: false,
                  }
                : undefined,
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
    SentryModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        dsn: config.get<string>('SENTRY_DSN'),
        debug: false,
        environment: process.env.NODE_ENV,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useFactory: () => new GraphqlInterceptor(),
    },
  ],
})
export class AppModule {}
