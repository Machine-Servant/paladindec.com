import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateNestedOneWithoutRelatedToInput } from '../scryfall-card/scryfall-card-create-nested-one-without-related-to.input';

@InputType()
export class ScryfallRelatedCardCreateWithoutReferenceInput {
  @Field(() => String, { nullable: true })
  id?: string;

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
