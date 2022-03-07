import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateNestedOneWithoutReferencedByInput } from '../scryfall-card/scryfall-card-create-nested-one-without-referenced-by.input';
import { ScryfallCardCreateNestedOneWithoutRelatedToInput } from '../scryfall-card/scryfall-card-create-nested-one-without-related-to.input';

@InputType()
export class ScryfallRelatedCardCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => ScryfallCardCreateNestedOneWithoutReferencedByInput, {
    nullable: false,
  })
  reference!: ScryfallCardCreateNestedOneWithoutReferencedByInput;

  @Field(() => ScryfallCardCreateNestedOneWithoutRelatedToInput, {
    nullable: false,
  })
  card!: ScryfallCardCreateNestedOneWithoutRelatedToInput;

  @Field(() => String, { nullable: false })
  component!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  typeLine!: string;

  @Field(() => String, { nullable: false })
  uri!: string;
}
