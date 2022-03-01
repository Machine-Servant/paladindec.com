import {
  DynamicModule,
  Module,
  ModuleMetadata,
  Provider,
} from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import * as firebase from 'firebase-admin';
import { FirebaseGqlAuthGuard } from './guards/firebase-gql-auth.guard';
import { FirebaseAuthService } from './services/firebase-auth.service';
import { FirebaseAuthStrategy } from './strategies/firebase-auth.strategy';

const FIREBASE_ADMIN_MODULE_OPTIONS = 'FIREBASE_ADMIN_MODULE_OPTIONS';
const PROVIDERS = [FirebaseAuthService];
const EXPORTS = [FirebaseAuthService];

interface FirebaseAdminModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  name?: string;
  useFactory?: (
    ...args: any[]
  ) => Promise<firebase.AppOptions> | firebase.AppOptions;
  inject?: any[];
}

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'firebase-jwt' })],
  providers: [
    FirebaseAuthStrategy,
    { provide: APP_GUARD, useClass: FirebaseGqlAuthGuard },
  ],
})
export class FirebaseModule {
  private static getApp(options: firebase.AppOptions): firebase.app.App {
    return firebase.apps.length === 0
      ? firebase.initializeApp(options)
      : firebase.apps[0];
  }

  static forRoot(options: firebase.AppOptions): DynamicModule {
    const app = this.getApp(options);
    const firebaseAdminModuleOptions = {
      provide: FIREBASE_ADMIN_MODULE_OPTIONS,
      useValue: options,
    };

    const providers = this.createProviders(app);

    return {
      module: FirebaseModule,
      providers: [firebaseAdminModuleOptions, ...providers],
      exports: EXPORTS,
    };
  }

  private static createProviders(app: firebase.app.App): Provider<any>[] {
    return PROVIDERS.map<Provider>((ProviderService) => ({
      provide: ProviderService,
      useFactory: () => new ProviderService(app),
    }));
  }

  static forRootAsync(options: FirebaseAdminModuleAsyncOptions): DynamicModule {
    const firebaseAdminModuleOptions = {
      provide: FIREBASE_ADMIN_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };

    const providers = this.createProvidersAsync();
    return {
      module: FirebaseModule,
      imports: options.imports,
      providers: [firebaseAdminModuleOptions, ...providers],
      exports: EXPORTS,
    };
  }

  private static createProvidersAsync(): Provider<any>[] {
    return PROVIDERS.map<Provider>((ProviderService) => ({
      provide: ProviderService,
      useFactory: (options: firebase.AppOptions) => {
        const app = this.getApp(options);
        return new ProviderService(app);
      },
      inject: [FIREBASE_ADMIN_MODULE_OPTIONS],
    }));
  }
}
