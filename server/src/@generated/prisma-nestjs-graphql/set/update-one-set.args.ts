import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SetUpdateInput } from './set-update.input';
import { SetWhereUniqueInput } from './set-where-unique.input';

@ArgsType()
export class UpdateOneSetArgs {
  @Field(() => SetUpdateInput, { nullable: false })
  data!: SetUpdateInput;

  @Field(() => SetWhereUniqueInput, { nullable: false })
  where!: SetWhereUniqueInput;
}
