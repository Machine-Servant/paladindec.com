import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SetWhereUniqueInput } from './set-where-unique.input';
import { SetCreateInput } from './set-create.input';
import { SetUpdateInput } from './set-update.input';

@ArgsType()
export class UpsertOneSetArgs {
  @Field(() => SetWhereUniqueInput, { nullable: false })
  where!: SetWhereUniqueInput;

  @Field(() => SetCreateInput, { nullable: false })
  create!: SetCreateInput;

  @Field(() => SetUpdateInput, { nullable: false })
  update!: SetUpdateInput;
}
