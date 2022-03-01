import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardCreateWithoutCollectionsInput } from './card-create-without-collections.input';

@InputType()
export class CardCreateOrConnectWithoutCollectionsInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardCreateWithoutCollectionsInput, { nullable: false })
  create!: CardCreateWithoutCollectionsInput;
}
