import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutReferencedByInput } from './card-create-without-referenced-by.input';
import { CardCreateOrConnectWithoutReferencedByInput } from './card-create-or-connect-without-referenced-by.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardCreateNestedOneWithoutReferencedByInput {
  @Field(() => CardCreateWithoutReferencedByInput, { nullable: true })
  create?: CardCreateWithoutReferencedByInput;

  @Field(() => CardCreateOrConnectWithoutReferencedByInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutReferencedByInput;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;
}
