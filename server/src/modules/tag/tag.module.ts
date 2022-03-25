import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TagService } from './services/tag.service';
import { TagResolver } from './resolvers/tag.resolver';
import { CollectionModule } from '../collection/collection.module';

@Module({
  imports: [PrismaModule, forwardRef(() => CollectionModule)],
  providers: [TagService, TagResolver],
  exports: [TagService],
})
export class TagModule {}
