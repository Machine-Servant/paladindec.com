import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardScalarWhereInput } from './scryfall-related-card-scalar-where.input';
import { ScryfallRelatedCardUpdateManyMutationInput } from './scryfall-related-card-update-many-mutation.input';

@InputType()
export class ScryfallRelatedCardUpdateManyWithWhereWithoutReferenceInput {
  @Field(() => ScryfallRelatedCardScalarWhereInput, { nullable: false })
  where!: ScryfallRelatedCardScalarWhereInput;

  @Field(() => ScryfallRelatedCardUpdateManyMutationInput, { nullable: false })
  data!: ScryfallRelatedCardUpdateManyMutationInput;
}
