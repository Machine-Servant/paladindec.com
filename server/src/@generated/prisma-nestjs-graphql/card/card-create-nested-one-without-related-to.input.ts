import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutRelatedToInput } from './card-create-without-related-to.input';
import { CardCreateOrConnectWithoutRelatedToInput } from './card-create-or-connect-without-related-to.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardCreateNestedOneWithoutRelatedToInput {
  @Field(() => CardCreateWithoutRelatedToInput, { nullable: true })
  create?: CardCreateWithoutRelatedToInput;

  @Field(() => CardCreateOrConnectWithoutRelatedToInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutRelatedToInput;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;
}
