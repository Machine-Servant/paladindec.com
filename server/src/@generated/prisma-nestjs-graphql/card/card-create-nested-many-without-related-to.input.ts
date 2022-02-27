import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutRelatedToInput } from './card-create-without-related-to.input';
import { CardCreateOrConnectWithoutRelatedToInput } from './card-create-or-connect-without-related-to.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardCreateNestedManyWithoutRelatedToInput {
  @Field(() => [CardCreateWithoutRelatedToInput], { nullable: true })
  create?: Array<CardCreateWithoutRelatedToInput>;

  @Field(() => [CardCreateOrConnectWithoutRelatedToInput], { nullable: true })
  connectOrCreate?: Array<CardCreateOrConnectWithoutRelatedToInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  connect?: Array<CardWhereUniqueInput>;
}
