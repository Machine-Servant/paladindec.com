import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetWhereInput } from './scryfall-set-where.input';
import { ScryfallSetOrderByWithRelationInput } from './scryfall-set-order-by-with-relation.input';
import { ScryfallSetWhereUniqueInput } from './scryfall-set-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallSetScalarFieldEnum } from './scryfall-set-scalar-field.enum';

@ArgsType()
export class FindFirstScryfallSetArgs {
  @Field(() => ScryfallSetWhereInput, { nullable: true })
  where?: ScryfallSetWhereInput;

  @Field(() => [ScryfallSetOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ScryfallSetOrderByWithRelationInput>;

  @Field(() => ScryfallSetWhereUniqueInput, { nullable: true })
  cursor?: ScryfallSetWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ScryfallSetScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ScryfallSetScalarFieldEnum>;
}
