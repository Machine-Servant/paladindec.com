import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardCreateWithoutReferencedByInput } from './card-create-without-referenced-by.input';

@InputType()
export class CardCreateOrConnectWithoutReferencedByInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardCreateWithoutReferencedByInput, { nullable: false })
  create!: CardCreateWithoutReferencedByInput;
}
