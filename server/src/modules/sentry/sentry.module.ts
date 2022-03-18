import { Module } from '@nestjs/common';
import { SentryService } from './services/sentry.service';

@Module({
  providers: [SentryService],
})
export class SentryModule {}
