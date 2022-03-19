import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  scryfallCardId?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  isBorderless?: true;

  @Field(() => Boolean, { nullable: true })
  isShowcase?: true;

  @Field(() => Boolean, { nullable: true })
  canBeFoil?: true;

  @Field(() => Boolean, { nullable: true })
  collectorNumber?: true;

  @Field(() => Boolean, { nullable: true })
  isPaper?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  canBeEtched?: true;

  @Field(() => Boolean, { nullable: true })
  canBeNonFoil?: true;

  @Field(() => Boolean, { nullable: true })
  isExtendedArt?: true;

  @Field(() => Boolean, { nullable: true })
  isRetro?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
