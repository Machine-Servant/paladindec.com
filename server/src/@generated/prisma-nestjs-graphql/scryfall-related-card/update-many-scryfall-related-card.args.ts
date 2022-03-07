import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardUpdateManyMutationInput } from './scryfall-related-card-update-many-mutation.input';
import { ScryfallRelatedCardWhereInput } from './scryfall-related-card-where.input';

@ArgsType()
export class UpdateManyScryfallRelatedCardArgs {
  @Field(() => ScryfallRelatedCardUpdateManyMutationInput, { nullable: false })
  data!: ScryfallRelatedCardUpdateManyMutationInput;

  @Field(() => ScryfallRelatedCardWhereInput, { nullable: true })
  where?: ScryfallRelatedCardWhereInput;
}
