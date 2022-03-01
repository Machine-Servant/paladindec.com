import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateManyUserInput } from './collection-create-many-user.input';

@InputType()
export class CollectionCreateManyUserInputEnvelope {
  @Field(() => [CollectionCreateManyUserInput], { nullable: false })
  data!: Array<CollectionCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
