import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateWithoutUserInput } from './collection-create-without-user.input';
import { CollectionCreateOrConnectWithoutUserInput } from './collection-create-or-connect-without-user.input';
import { CollectionCreateManyUserInputEnvelope } from './collection-create-many-user-input-envelope.input';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';

@InputType()
export class CollectionCreateNestedManyWithoutUserInput {
  @Field(() => [CollectionCreateWithoutUserInput], { nullable: true })
  create?: Array<CollectionCreateWithoutUserInput>;

  @Field(() => [CollectionCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: Array<CollectionCreateOrConnectWithoutUserInput>;

  @Field(() => CollectionCreateManyUserInputEnvelope, { nullable: true })
  createMany?: CollectionCreateManyUserInputEnvelope;

  @Field(() => [CollectionWhereUniqueInput], { nullable: true })
  connect?: Array<CollectionWhereUniqueInput>;
}
