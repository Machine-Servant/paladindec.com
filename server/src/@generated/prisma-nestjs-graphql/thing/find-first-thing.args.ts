import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingWhereInput } from './thing-where.input';
import { ThingOrderByWithRelationInput } from './thing-order-by-with-relation.input';
import { ThingWhereUniqueInput } from './thing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThingScalarFieldEnum } from './thing-scalar-field.enum';

@ArgsType()
export class FindFirstThingArgs {
  @Field(() => ThingWhereInput, { nullable: true })
  where?: ThingWhereInput;

  @Field(() => [ThingOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ThingOrderByWithRelationInput>;

  @Field(() => ThingWhereUniqueInput, { nullable: true })
  cursor?: ThingWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ThingScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ThingScalarFieldEnum>;
}
