import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateNestedOneWithoutRelatedToInput } from '../card/card-create-nested-one-without-related-to.input';

@InputType()
export class RelatedCardCreateWithoutReferenceInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => CardCreateNestedOneWithoutRelatedToInput, { nullable: false })
  card!: CardCreateNestedOneWithoutRelatedToInput;

  @Field(() => String, { nullable: false })
  component!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  typeLine!: string;

  @Field(() => String, { nullable: false })
  uri!: string;
}
