import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Card } from '../../../@generated/prisma-nestjs-graphql/card/card.model';
import { RelatedCard } from '../../../@generated/prisma-nestjs-graphql/related-card/related-card.model';
import { CardService } from '../services/card.service';

@Resolver(() => RelatedCard)
export class RelatedCardResolver {
  constructor(private readonly cardService: CardService) {}

  @ResolveField('card', () => [Card])
  async getCard(@Parent() relatedCard: RelatedCard): Promise<Card[]> {
    return this.cardService.findMany({
      id: { equals: relatedCard.cardId },
    });
  }

  @ResolveField('reference', () => [Card])
  async getReference(@Parent() relatedCard: RelatedCard): Promise<Card[]> {
    return this.cardService.findMany({
      id: { equals: relatedCard.referenceId },
    });
  }
}
