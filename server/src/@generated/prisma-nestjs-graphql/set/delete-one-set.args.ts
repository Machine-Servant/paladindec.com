import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SetWhereUniqueInput } from './set-where-unique.input';

@ArgsType()
export class DeleteOneSetArgs {
  @Field(() => SetWhereUniqueInput, { nullable: false })
  where!: SetWhereUniqueInput;
}
