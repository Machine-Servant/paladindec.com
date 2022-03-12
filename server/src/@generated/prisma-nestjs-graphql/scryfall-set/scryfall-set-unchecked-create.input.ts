import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScryfallCardUncheckedCreateNestedManyWithoutSetInput } from '../scryfall-card/scryfall-card-unchecked-create-nested-many-without-set.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ScryfallSetUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: true })
  mtgoCode?: string;

  @Field(() => String, { nullable: true })
  arenaCode?: string;

  @Field(() => Int, { nullable: true })
  tcgPlayerId?: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  setType!: string;

  @Field(() => Date, { nullable: true })
  releasedAt?: Date | string;

  @Field(() => String, { nullable: true })
  blockCode?: string;

  @Field(() => String, { nullable: true })
  block?: string;

  @Field(() => String, { nullable: true })
  parentSetCode?: string;

  @Field(() => Int, { nullable: false })
  cardCount!: number;

  @Field(() => Int, { nullable: true })
  printedSize?: number;

  @Field(() => Boolean, { nullable: false })
  isDigital!: boolean;

  @Field(() => Boolean, { nullable: false })
  isFoilOnly!: boolean;

  @Field(() => Boolean, { nullable: false })
  isNonFoilOnly!: boolean;

  @Field(() => String, { nullable: false })
  scryfallUri!: string;

  @Field(() => String, { nullable: false })
  uri!: string;

  @Field(() => String, { nullable: false })
  iconSvgUri!: string;

  @Field(() => String, { nullable: false })
  searchUri!: string;

  @Field(() => ScryfallCardUncheckedCreateNestedManyWithoutSetInput, {
    nullable: true,
  })
  cards?: ScryfallCardUncheckedCreateNestedManyWithoutSetInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
