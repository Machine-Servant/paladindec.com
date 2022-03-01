import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from '../user/user.module';
import { CurrentUserGuard } from './guards/current-user.guard';

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: CurrentUserGuard,
    },
  ],
})
export class CommonModule {}
