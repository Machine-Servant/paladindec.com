import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ThingWhereInput {
  @Field(() => [ThingWhereInput], { nullable: true })
  AND?: Array<ThingWhereInput>;

  @Field(() => [ThingWhereInput], { nullable: true })
  OR?: Array<ThingWhereInput>;

  @Field(() => [ThingWhereInput], { nullable: true })
  NOT?: Array<ThingWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;
}
