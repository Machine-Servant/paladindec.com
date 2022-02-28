import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereInput } from './scryfall-related-card-where.input';

@ArgsType()
export class DeleteManyScryfallRelatedCardArgs {
  @Field(() => ScryfallRelatedCardWhereInput, { nullable: true })
  where?: ScryfallRelatedCardWhereInput;
}
