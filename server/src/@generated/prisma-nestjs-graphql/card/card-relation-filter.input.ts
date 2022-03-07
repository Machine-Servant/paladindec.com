import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereInput } from './card-where.input';

@InputType()
export class CardRelationFilter {
  @Field(() => CardWhereInput, { nullable: true })
  is?: CardWhereInput;

  @Field(() => CardWhereInput, { nullable: true })
  isNot?: CardWhereInput;
}
