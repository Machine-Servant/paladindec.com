import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SetWhereInput } from './set-where.input';
import { SetOrderByWithRelationInput } from './set-order-by-with-relation.input';
import { SetWhereUniqueInput } from './set-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SetScalarFieldEnum } from './set-scalar-field.enum';

@ArgsType()
export class FindFirstSetArgs {
  @Field(() => SetWhereInput, { nullable: true })
  where?: SetWhereInput;

  @Field(() => [SetOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SetOrderByWithRelationInput>;

  @Field(() => SetWhereUniqueInput, { nullable: true })
  cursor?: SetWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [SetScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SetScalarFieldEnum>;
}
