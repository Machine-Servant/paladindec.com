import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SetType } from '../types/set.types';

@ObjectType()
export class SetObjectType {
  @Field(() => String, {
    description: 'A unique ID for this set on Scryfall that will not change.',
  })
  id!: string;

  @Field(() => String, { description: '', nullable: true })
  arenaCode?: string;

  @Field(() => String, {
    description: 'The unique three to five-letter code for this set.',
  })
  code!: string;

  @Field(() => String, {
    description:
      'The unique code for this set on MTGO, which may differ from the regular code.',
    nullable: true,
  })
  mtgoCode?: string;

  @Field(() => Int, {
    description: "This set's ID on TCGplayer's API, also known as the groupId.",
    nullable: true,
  })
  tcgPlayerId?: number;

  @Field(() => String, { description: 'The English name of the set.' })
  name!: string;

  @Field(() => String, {
    description: 'A computer-readable classification for this set. See below.',
  })
  setType!: SetType;

  @Field(() => Date, {
    description:
      'The date the set was released or the first card was printed in the set (in GMT-8 Pacific time).',
    nullable: true,
  })
  releasedAt?: Date;

  @Field(() => String, {
    description: 'The block code for this set, if any.',
    nullable: true,
  })
  blockCode?: string;

  @Field(() => String, {
    description: 'The block or group name code for this set, if any.',
    nullable: true,
  })
  block?: string;

  @Field(() => String, {
    description:
      'The set code for the parent set, if any. promo and token sets often have a parent set.',
    nullable: true,
  })
  parentSetCode?: string;

  @Field(() => Int, { description: 'The number of cards in this set.' })
  cardCount!: number;

  @Field(() => Int, {
    description: "The denominator for the set's printed collector numbers.",
    nullable: true,
  })
  printedSize?: number;

  @Field(() => Boolean, {
    description: 'True if this set was only released in a video game.',
  })
  isDigital!: boolean;

  @Field(() => Boolean, {
    description: 'True if this set contains only foil cards.',
  })
  isFoilOnly!: boolean;

  @Field(() => Boolean, {
    description: 'True if this set contains only nonfoil cards.',
  })
  isNonFoilOnly!: boolean;

  @Field(() => String, {
    description: "A link to this set's permapage on Scryfall's website.",
  })
  scryfallUri!: string;

  @Field(() => String, {
    description: "A link to this set object on Scryfall's API.",
  })
  uri!: string;

  @Field(() => String, {
    description:
      "A URI to an SVG file for this set's icon on Scryfall's CDN. Hotlinking this image isn't recommended, because it may change slightly over time. You should download it and use it locally for your particular user interface needs.",
  })
  iconSvgUri!: string;

  @Field(() => String, {
    description:
      'A Scryfall API URI that you can request to begin paginating over the cards in this set.',
  })
  searchUri!: string;
}
