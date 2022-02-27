import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Card as PrismaCard } from 'prisma/prisma-client';
import { CardFace } from '../../../@generated/prisma-nestjs-graphql/card-face/card-face.model';
import { CardCount } from '../../../@generated/prisma-nestjs-graphql/card/card-count.output';
import { CardWhereInput } from '../../../@generated/prisma-nestjs-graphql/card/card-where.input';
import { Card } from '../../../@generated/prisma-nestjs-graphql/card/card.model';
import { RelatedCard } from '../../../@generated/prisma-nestjs-graphql/related-card/related-card.model';
import { Set as SetObject } from '../../../@generated/prisma-nestjs-graphql/set/set.model';
import { SetService } from '../../set/services/set.service';
import { CardFaceService } from '../services/card-face.service';
import { CardService } from '../services/card.service';
import { RelatedCardService } from '../services/related-card.service';

@Resolver(() => Card)
export class CardResolver {
  constructor(
    private readonly cardService: CardService,
    private readonly cardFaceService: CardFaceService,
    private readonly relatedCardService: RelatedCardService,
    private readonly setService: SetService,
  ) {}

  @Query(() => [Card])
  async allCards(
    @Args('where', { nullable: true }) whereArgs?: CardWhereInput,
    @Args('take', { nullable: true }) takeArgs?: number,
  ): Promise<Card[]> {
    return this.cardService.findMany(whereArgs, takeArgs);
  }

  @ResolveField('cardFaces', () => [CardFace])
  async getCardFaces(@Parent() card: PrismaCard): Promise<CardFace[]> {
    return this.cardFaceService.findMany({ cardId: { equals: card.id } });
  }

  @ResolveField('relatedTo', () => [RelatedCard])
  async getRelatedTo(@Parent() card: PrismaCard): Promise<RelatedCard[]> {
    return this.relatedCardService.findMany({
      cardId: { equals: card.id },
    });
  }

  @ResolveField('referencedBy', () => [RelatedCard])
  async getReferencedBy(@Parent() card: PrismaCard): Promise<RelatedCard[]> {
    return this.relatedCardService.findMany({
      referenceId: { equals: card.id },
    });
  }

  @ResolveField('set', () => SetObject)
  async getSet(@Parent() card: PrismaCard): Promise<SetObject> {
    return this.setService.findOne(card.setId);
  }

  @ResolveField('_count', () => CardCount)
  async getCount(@Parent() card: PrismaCard): Promise<CardCount> {
    return {
      cardFaces: await this.cardFaceService.count({
        cardId: { equals: card.id },
      }),
      referencedBy: await this.relatedCardService.count({
        referenceId: { equals: card.id },
      }),
      relatedTo: await this.relatedCardService.count({
        cardId: { equals: card.id },
      }),
    };
  }
}
