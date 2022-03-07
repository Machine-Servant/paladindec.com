import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereInput } from './scryfall-related-card-where.input';
import { ScryfallRelatedCardOrderByWithRelationInput } from './scryfall-related-card-order-by-with-relation.input';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallRelatedCardScalarFieldEnum } from './scryfall-related-card-scalar-field.enum';

@ArgsType()
export class FindFirstScryfallRelatedCardArgs {
  @Field(() => ScryfallRelatedCardWhereInput, { nullable: true })
  where?: ScryfallRelatedCardWhereInput;

  @Field(() => [ScryfallRelatedCardOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Array<ScryfallRelatedCardOrderByWithRelationInput>;

  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: true })
  cursor?: ScryfallRelatedCardWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ScryfallRelatedCardScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ScryfallRelatedCardScalarFieldEnum>;
}
