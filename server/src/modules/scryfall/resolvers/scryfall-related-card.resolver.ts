import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ScryfallCard } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/scryfall-card.model';
import { ScryfallRelatedCard } from '../../../@generated/prisma-nestjs-graphql/scryfall-related-card/scryfall-related-card.model';
import { ScryfallCardService } from '../services/scryfall-card.service';

@Resolver(() => ScryfallRelatedCard)
export class ScryfallRelatedCardResolver {
  constructor(private readonly scryfallCardService: ScryfallCardService) {}

  @ResolveField('card', () => [ScryfallCard])
  async getCard(
    @Parent() relatedCard: ScryfallRelatedCard,
  ): Promise<ScryfallCard[]> {
    return this.scryfallCardService.findMany({
      where: { id: { equals: relatedCard.cardId } },
    });
  }

  @ResolveField('reference', () => [ScryfallCard])
  async getReference(
    @Parent() relatedCard: ScryfallRelatedCard,
  ): Promise<ScryfallCard[]> {
    return this.scryfallCardService.findMany({
      where: { id: { equals: relatedCard.referenceId } },
    });
  }
}
