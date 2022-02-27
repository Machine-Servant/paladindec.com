import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SetWhereInput } from './set-where.input';

@ArgsType()
export class DeleteManySetArgs {
  @Field(() => SetWhereInput, { nullable: true })
  where?: SetWhereInput;
}
