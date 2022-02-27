import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SetModule } from '../set/set.module';
import { CardResolver } from './resolvers/card.resolver';
import { RelatedCardResolver } from './resolvers/related-card.resolver';
import { CardFaceService } from './services/card-face.service';
import { CardService } from './services/card.service';
import { RelatedCardService } from './services/related-card.service';

@Module({
  imports: [PrismaModule, forwardRef(() => SetModule)],
  providers: [
    CardService,
    CardResolver,
    CardFaceService,
    RelatedCardService,
    RelatedCardResolver,
  ],

  exports: [CardService, CardFaceService, RelatedCardService],
})
export class CardModule {}
