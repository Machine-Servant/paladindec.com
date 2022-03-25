import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagUserIdNameCompoundUniqueInput } from './tag-user-id-name-compound-unique.input';

@InputType()
export class TagWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => TagUserIdNameCompoundUniqueInput, { nullable: true })
  userId_name?: TagUserIdNameCompoundUniqueInput;
}
