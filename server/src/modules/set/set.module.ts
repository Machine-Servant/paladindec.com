import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SetService } from './services/set.service';
import { SetResolver } from './resolvers/set.resolver';
import { CardModule } from '../card/card.module';

@Module({
  imports: [PrismaModule, forwardRef(() => CardModule)],
  providers: [SetService, SetResolver],
  exports: [SetService],
})
export class SetModule {}
