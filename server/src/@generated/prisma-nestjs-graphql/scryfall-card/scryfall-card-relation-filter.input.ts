import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereInput } from './scryfall-card-where.input';

@InputType()
export class ScryfallCardRelationFilter {
  @Field(() => ScryfallCardWhereInput, { nullable: true })
  is?: ScryfallCardWhereInput;

  @Field(() => ScryfallCardWhereInput, { nullable: true })
  isNot?: ScryfallCardWhereInput;
}
