import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateNestedOneWithoutReferencedByInput } from '../card/card-create-nested-one-without-referenced-by.input';
import { CardCreateNestedOneWithoutRelatedToInput } from '../card/card-create-nested-one-without-related-to.input';

@InputType()
export class RelatedCardCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => CardCreateNestedOneWithoutReferencedByInput, { nullable: false })
  reference!: CardCreateNestedOneWithoutReferencedByInput;

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
