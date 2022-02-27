import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateNestedOneWithoutReferencedByInput } from '../card/card-create-nested-one-without-referenced-by.input';

@InputType()
export class RelatedCardCreateWithoutCardInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => CardCreateNestedOneWithoutReferencedByInput, { nullable: false })
  reference!: CardCreateNestedOneWithoutReferencedByInput;

  @Field(() => String, { nullable: false })
  component!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  typeLine!: string;

  @Field(() => String, { nullable: false })
  uri!: string;
}
