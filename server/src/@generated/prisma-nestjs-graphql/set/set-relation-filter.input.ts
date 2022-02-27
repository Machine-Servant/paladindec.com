import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SetWhereInput } from './set-where.input';

@InputType()
export class SetRelationFilter {
  @Field(() => SetWhereInput, { nullable: true })
  is?: SetWhereInput;

  @Field(() => SetWhereInput, { nullable: true })
  isNot?: SetWhereInput;
}
