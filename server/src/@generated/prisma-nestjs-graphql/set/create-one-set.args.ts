import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SetCreateInput } from './set-create.input';

@ArgsType()
export class CreateOneSetArgs {
  @Field(() => SetCreateInput, { nullable: false })
  data!: SetCreateInput;
}
